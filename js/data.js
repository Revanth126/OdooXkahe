// Shared Mock Data
const destinationsData = [
  {
    "id": "d1",
    "name": "Santorini, Greece",
    "imageUrl": "assets/images/destination_santorini_1778395758306.png",
    "rating": 4.9,
    "tags": ["Beach", "Romantic"]
  },
  {
    "id": "d2",
    "name": "Swiss Alps",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    "rating": 4.8,
    "tags": ["Mountains", "Hiking"]
  },
  {
    "id": "d3",
    "name": "Bali, Indonesia",
    "imageUrl": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "rating": 4.7,
    "tags": ["Beach", "Culture"]
  }
];

const myTripsData = [
  {
    "id": "t1",
    "title": "Summer in Santorini",
    "budget": 1299.00,
    "durationDays": 5,
    "dates": "Aug 12 - Aug 17, 2026",
    "imageUrl": "assets/images/destination_santorini_1778395758306.png",
    "status": "Upcoming",
    "stops": [
      {
        "id": "s1",
        "location": "Oia, Santorini",
        "flag": "🇬🇷",
        "dates": "Aug 12 - Aug 15 (3 Nights)",
        "activities": [
          {
            "day": "Day 1",
            "name": "Check-in at Caldera View Hotel",
            "type": "Accommodation",
            "time": "14:00",
            "cost": 300
          },
          {
            "day": "Day 2",
            "name": "Sunset Catamaran Cruise",
            "type": "Activity",
            "time": "15:00",
            "cost": 150
          }
        ]
      },
      {
        "id": "s2",
        "location": "Fira, Santorini",
        "flag": "🇬🇷",
        "dates": "Aug 15 - Aug 17 (2 Nights)",
        "activities": [
          {
            "day": "Day 4",
            "name": "Volcano & Hot Springs Tour",
            "type": "Activity",
            "time": "10:00 AM",
            "cost": 80
          }
        ]
      }
    ]
  },
  {
    "id": "t2",
    "title": "Swiss Alps Expedition",
    "budget": 1850.00,
    "durationDays": 7,
    "dates": "Dec 05 - Dec 12, 2026",
    "imageUrl": "assets/images/trip_alps_hiking_1778395781563.png",
    "status": "Upcoming",
    "stops": [
      {
        "id": "s1",
        "location": "Interlaken, Switzerland",
        "flag": "🇨🇭",
        "dates": "Dec 05 - Dec 09 (4 Nights)",
        "activities": [
          {
            "day": "Day 1",
            "name": "Check-in at Victoria-Jungfrau",
            "type": "Accommodation",
            "time": "15:00",
            "cost": 800
          },
          {
            "day": "Day 2",
            "name": "Jungfraujoch Excursion",
            "type": "Sightseeing",
            "time": "08:00 AM",
            "cost": 250
          }
        ]
      },
      {
        "id": "s2",
        "location": "Zermatt, Switzerland",
        "flag": "🇨🇭",
        "dates": "Dec 09 - Dec 12 (3 Nights)",
        "activities": []
      }
    ]
  }
];
