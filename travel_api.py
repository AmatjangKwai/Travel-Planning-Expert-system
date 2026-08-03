from flask import Flask, jsonify, request, g
import sqlite3

from inference_engine import plan_trip
from database_setup import setup_database

app = Flask(__name__)
app.config['DATABASE'] = 'travel_expert.db'


def get_db():
    """Open a database connection for the current request."""
    if 'db' not in g:
        g.db = sqlite3.connect(
            app.config['DATABASE'],
            row_factory=sqlite3.Row
        )
    return g.db


def close_db(e=None):
    """Close the database connection at the end of the request."""
    db = g.pop('db', None)
    if db is not None:
        db.close()


def validate_plan_trip_payload(data):
    """Validate the payload for the plan trip endpoint."""
    if not data:
        return False, 'Invalid JSON request body.'

    required_fields = ['budget', 'group_size', 'weather_pref']
    missing_fields = [field for field in required_fields if data.get(field) is None]
    if missing_fields:
        return False, f"Missing required parameters: {', '.join(missing_fields)}"

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
        'weather_pref': str(data['weather_pref']),
        'nights': nights
    }


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

    recommended_trips = plan_trip(
        budget=payload_or_error['budget'],
        group_size=payload_or_error['group_size'],
        weather_pref=payload_or_error['weather_pref'],
        nights=payload_or_error['nights']
    )

    return jsonify({'recommendations': format_recommendations(recommended_trips)}), 200


@app.route('/destinations', methods=['GET'])
def list_destinations():
    db = get_db()
    rows = db.execute(
        'SELECT id, name, weather_type FROM destinations'
    ).fetchall()
    destinations = [dict(row) for row in rows]
    return jsonify({'destinations': destinations}), 200


@app.route('/weather-options', methods=['GET'])
def list_weather_options():
    db = get_db()
    rows = db.execute(
        'SELECT DISTINCT weather_type FROM destinations'
    ).fetchall()
    options = [row['weather_type'] for row in rows]
    return jsonify({'weather_options': options}), 200


@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'}), 200


@app.route('/refresh-db', methods=['POST'])
def refresh_database():
    setup_database()
    return jsonify({'status': 'database refreshed'}), 200


app.teardown_appcontext(close_db)

if __name__ == '__main__':
    app.run(debug=True)


