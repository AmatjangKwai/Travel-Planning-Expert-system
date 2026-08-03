import json
import os
import re

from flask import Flask, jsonify, request

app = Flask(__name__)

DATA_FILE = os.path.join(os.path.dirname(__file__), 'travel_data.json')
_travel_data_cache = None


def load_travel_data():
    """Load the source JSON database from travel_data.json."""
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)


def get_travel_data():
    """Return cached JSON data, loading it once per process."""
    global _travel_data_cache
    if _travel_data_cache is None:
        _travel_data_cache = load_travel_data()
    return _travel_data_cache


def reload_travel_data():
    """Reload the JSON database from disk."""
    global _travel_data_cache
    _travel_data_cache = load_travel_data()
    return _travel_data_cache


def normalize_slug(value):
    if not value:
        return ''
    normalized = re.sub(r'[^a-z0-9]+', '-', value.lower())
    return normalized.strip('-')


def get_all_destinations():
    return get_travel_data().get('destinations', [])


def find_destination_by_query(query):
    if not query:
        return None

    normalized_query = normalize_slug(query)
    for dest in get_all_destinations():
        if normalize_slug(dest.get('name')) == normalized_query:
            return dest

    query_lower = query.strip().lower()
    for dest in get_all_destinations():
        if query_lower in dest.get('name', '').lower():
            return dest

    return None


def match_destinations(query):
    if not query:
        return []

    query_lower = query.strip().lower()
    matches = []
    for dest in get_all_destinations():
        name = dest.get('name', '').lower()
        if query_lower in name or normalize_slug(dest.get('name')) == normalize_slug(query):
            matches.append(dest)
    return matches


def serialize_destination(dest, include_details=False):
    payload = {
        'name': dest.get('name'),
        'weather_type': dest.get('weather_type'),
        'base_transport_cost': dest.get('base_transport_cost'),
        'slug': normalize_slug(dest.get('name'))
    }
    if include_details:
        payload['accommodations'] = dest.get('accommodations', [])
        payload['activities'] = dest.get('activities', [])
    return payload


def validate_plan_trip_payload(data):
    """Validate the payload for the plan trip endpoint."""
    if not data:
        return False, 'Invalid JSON request body.'

    if not isinstance(data, dict):
        return False, 'Invalid JSON request body.'

    required_fields = ['budget', 'group_size']
    missing_fields = [field for field in required_fields if data.get(field) is None]
    if missing_fields:
        return False, f"Missing required parameters: {', '.join(missing_fields)}"

    if data.get('weather_pref') is None and data.get('destination') is None:
        return False, 'Either weather_pref or destination must be provided.'

    try:
        budget = float(data['budget'])
        group_size = int(data['group_size'])
        nights = int(data.get('nights', 3))
    except (TypeError, ValueError):
        return False, 'budget must be numeric and group_size/nights must be integers.'

    if budget < 0:
        return False, 'budget must be a non-negative number.'
    if group_size <= 0:
        return False, 'group_size must be greater than zero.'
    if nights <= 0:
        return False, 'nights must be greater than zero.'

    return True, {
        'budget': budget,
        'group_size': group_size,
        'weather_pref': str(data['weather_pref']) if data.get('weather_pref') is not None else None,
        'destination': data.get('destination'),
        'nights': nights
    }


def plan_trip_from_json(budget, group_size, weather_pref=None, destination=None, nights=3):
    """Plan trips by reading the JSON data directly instead of SQLite."""
    data = get_travel_data()
    recommendations = []

    # Choose destinations by destination name or by weather preference
    if destination:
        dest_obj = find_destination_by_query(destination)
        candidates = [dest_obj] if dest_obj is not None else []
    else:
        candidates = [
            dest for dest in data.get('destinations', [])
            if dest.get('weather_type') == weather_pref
        ]

    for dest in candidates:
        if dest is None:
            continue

        transport_cost = dest.get('base_transport_cost', 0) * group_size
        activities = dest.get('activities', [])
        total_activity_cost = sum(act.get('cost_per_person', 0) for act in activities) * group_size
        meal_cost = 1500 * group_size * nights

        valid_accommodations = [
            acc for acc in dest.get('accommodations', [])
            if acc.get('max_occupancy', 0) >= group_size
        ]

        for acc in valid_accommodations:
            hotel_cost = acc.get('price_per_night', 0) * nights
            total_trip_cost = transport_cost + hotel_cost + total_activity_cost + meal_cost

            if total_trip_cost <= budget:
                recommendations.append({
                    'destination': dest.get('name'),
                    'hotel': acc.get('name'),
                    'hotel_cost': hotel_cost,
                    'transport_cost': transport_cost,
                    'activities_cost': total_activity_cost,
                    'meals': meal_cost,
                    'total_cost': total_trip_cost
                })

    return sorted(recommendations, key=lambda x: x['total_cost'])


def format_recommendations(recommendations):
    """Convert internal recommendation objects into JSON-serializable shape."""
    return [
        {
            'destination': rec['destination'],
            'hotel': rec['hotel'],
            'hotel_cost': rec['hotel_cost'],
            'transport_cost': rec['transport_cost'],
            'activities_cost': rec['activities_cost'],
            'meals': rec['meals'],
            'total_cost': rec['total_cost']
        }
        for rec in recommendations
    ]


@app.route('/plan_trip', methods=['POST'])
def plan_trip_endpoint():
    data = request.get_json(silent=True)
    valid, payload_or_error = validate_plan_trip_payload(data)
    if not valid:
        return jsonify({'error': payload_or_error}), 400

    recommended_trips = plan_trip_from_json(
        budget=payload_or_error['budget'],
        group_size=payload_or_error['group_size'],
        weather_pref=payload_or_error['weather_pref'],
        nights=payload_or_error['nights']
    )

    return jsonify({'recommendations': format_recommendations(recommended_trips)}), 200


@app.route('/destinations', methods=['GET'])
def list_destinations():
    data = get_travel_data()
    destinations = [
        {
            'name': dest.get('name'),
            'weather_type': dest.get('weather_type'),
            'base_transport_cost': dest.get('base_transport_cost'),
            'slug': normalize_slug(dest.get('name')),
            'accommodation_count': len(dest.get('accommodations', [])),
            'activity_count': len(dest.get('activities', []))
        }
        for dest in data.get('destinations', [])
    ]
    return jsonify({'destinations': destinations}), 200


@app.route('/destination', methods=['GET'])
def get_destination():
    name = request.args.get('name') or request.args.get('slug')
    if not name:
        return jsonify({'error': 'name or slug query parameter is required.'}), 400

    dest = find_destination_by_query(name)
    if dest is None:
        return jsonify({'error': 'Destination not found.'}), 404

    return jsonify({'destination': serialize_destination(dest, include_details=True)}), 200


@app.route('/search', methods=['GET'])
def search_destinations():
    query = request.args.get('query', '').strip()
    if not query:
        return jsonify({'error': 'query parameter is required.'}), 400

    matches = [serialize_destination(dest, include_details=True) for dest in match_destinations(query)]
    return jsonify({'results': matches}), 200


@app.route('/app-data', methods=['GET'])
def get_app_data():
    data = get_travel_data()
    destinations = [serialize_destination(dest, include_details=True) for dest in data.get('destinations', [])]
    weather_options = sorted({dest.get('weather_type') for dest in data.get('destinations', []) if dest.get('weather_type')})
    return jsonify({'destinations': destinations, 'weather_options': weather_options}), 200


@app.route('/weather-options', methods=['GET'])
def list_weather_options():
    data = get_travel_data()
    options = sorted({dest.get('weather_type') for dest in data.get('destinations', []) if dest.get('weather_type')})
    return jsonify({'weather_options': options}), 200


@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'}), 200


@app.route('/refresh-db', methods=['POST'])
def refresh_database():
    reload_travel_data()
    return jsonify({'status': 'travel data reloaded'}), 200


if __name__ == '__main__':
    app.run(debug=True)


