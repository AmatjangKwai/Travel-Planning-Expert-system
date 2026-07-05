import sqlite3

def plan_trip(budget, group_size, weather_pref, nights=3):
    """
    The core inference engine. Evaluates user constraints against the knowledge base.
    """
    print(f"\n{'='*50}")
    print(f"NEW TRIP REQUEST")
    print(f"Budget: KES {budget:,.2f} | Group: {group_size} | Weather: {weather_pref} | Nights: {nights}")
    print(f"{'='*50}")
    
    conn = sqlite3.connect('travel_expert.db')
    
    # Using row_factory so we can access database columns by name
    conn.row_factory = sqlite3.Row 
    cursor = conn.cursor()

    # RULE: Filter by Weather
    cursor.execute("SELECT * FROM destinations WHERE weather_type = ?", (weather_pref,))
    valid_destinations = cursor.fetchall()

    if not valid_destinations:
        print("No destinations match your weather preference.\n")
        return []

    recommended_trips = []

    for dest in valid_destinations:
        dest_id = dest['id']
        dest_name = dest['name']
        transport_cost = dest['base_transport_cost'] * group_size

        # RULE: Filter Accommodations by Group Size
        cursor.execute("SELECT * FROM accommodations WHERE destination_id = ? AND max_occupancy >= ?", (dest_id, group_size))
        accommodations = cursor.fetchall()

        # Fetch Activities for this destination
        cursor.execute("SELECT * FROM activities WHERE destination_id = ?", (dest_id,))
        activities = cursor.fetchall()
        
        # Assume the group does all available activities
        total_activity_cost = sum([act['cost_per_person'] for act in activities]) * group_size
        
        # Estimate meals (Assuming KES 1,500 per person per day for 3 meals)
        meal_cost = 1500 * group_size * nights

        # Evaluate each valid accommodation
        for acc in accommodations:
            hotel_cost = acc['price_per_night'] * nights
            
            # RULE: The Cost Formula
            total_trip_cost = transport_cost + hotel_cost + total_activity_cost + meal_cost

            # RULE: The Budget Constraint
            if total_trip_cost <= budget:
                recommended_trips.append({
                    'destination': dest_name,
                    'hotel': acc['name'],
                    'hotel_cost': hotel_cost,
                    'transport_cost': transport_cost,
                    'activities_cost': total_activity_cost,
                    'meals': meal_cost,
                    'total_cost': total_trip_cost
                })

    conn.close()

    # Sort the valid trips from cheapest to most expensive
    recommended_trips = sorted(recommended_trips, key=lambda x: x['total_cost'])

    # Output the results
    if not recommended_trips:
        print("No trips found within your budget parameters. Try increasing your budget or changing your weather preference.\n")
    else:
        print(f"Found {len(recommended_trips)} valid trips that fit your budget!\n")
        for i, trip in enumerate(recommended_trips, 1):
            print(f"Option {i}: {trip['destination']}")
            print(f"  Hotel: {trip['hotel']}")
            print(f"  Total Cost: KES {trip['total_cost']:,.2f}")
            print(f"  Breakdown: Hotel(KES {trip['hotel_cost']:,.2f}), Transport(KES {trip['transport_cost']:,.2f}), Activities(KES {trip['activities_cost']:,.2f}), Meals(KES {trip['meals']:,.2f})\n")
    
    return recommended_trips



if __name__ == '__main__':
    # Test Scenario 1: High Budget, Mild Weather (Should suggest places like Naivasha, Kakamega)
    plan_trip(budget=150000.00, group_size=4, weather_pref='Mild', nights=3)

    # Test Scenario 2: Very Low Budget, Hot Weather (Will likely fail or only find cheap coastal options)
    plan_trip(budget=15000.00, group_size=2, weather_pref='Hot', nights=2)
    
    # Test Scenario 3: Cold Weather, Couple's Retreat
    plan_trip(budget=50000.00, group_size=2, weather_pref='Cold', nights=2)