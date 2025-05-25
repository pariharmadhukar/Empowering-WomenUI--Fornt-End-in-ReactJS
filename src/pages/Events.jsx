import React from 'react';
import { format } from 'date-fns';

function Events() {
  const events = [
    {
      title: "Women in Leadership Summit",
      date: new Date(2024, 2, 15),
      time: "9:00 AM - 5:00 PM",
      location: "Virtual",
      description: "Join industry leaders for a day of inspiration and networking."
    },
    {
      title: "Tech Skills Workshop",
      date: new Date(2024, 2, 20),
      time: "2:00 PM - 4:00 PM",
      location: "Online",
      description: "Learn essential coding skills for career advancement."
    },
    {
      title: "Financial Wellness Webinar",
      date: new Date(2024, 2, 25),
      time: "6:00 PM - 7:30 PM",
      location: "Virtual",
      description: "Expert advice on personal finance and investment strategies."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">Upcoming Events</h1>

      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.title} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-purple-700 mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Date:</span> {format(event.date, 'MMMM d, yyyy')}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Time:</span> {event.time}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Location:</span> {event.location}
                  </p>
                </div>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;