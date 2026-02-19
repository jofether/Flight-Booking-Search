import React, { useState } from 'react';

const flightData = [
  {
    id: 1,
    airline: 'Asian Airlines',
    departure: '08:30',
    arrival: '17:45',
    duration: '9h 15m',
    stops: 'Nonstop',
    price: '$258',
    rating: 4.8,
    image: '✈️',
  },
  {
    id: 2,
    airline: 'Pacific Airways',
    departure: '10:15',
    arrival: '19:30',
    duration: '9h 15m',
    stops: '1 Stop',
    price: '$189',
    rating: 4.5,
    image: '✈️',
  },
  {
    id: 3,
    airline: 'Sky Express',
    departure: '14:00',
    arrival: '23:15',
    duration: '9h 15m',
    stops: 'Nonstop',
    price: '$312',
    rating: 4.9,
    image: '✈️',
  },
  {
    id: 4,
    airline: 'Travel Direct',
    departure: '11:45',
    arrival: '21:00',
    duration: '9h 15m',
    stops: '2 Stops',
    price: '$145',
    rating: 4.2,
    image: '✈️',
  },
  {
    id: 5,
    airline: 'Global Airlines',
    departure: '06:30',
    arrival: '15:45',
    duration: '9h 15m',
    stops: 'Nonstop',
    price: '$295',
    rating: 4.7,
    image: '✈️',
  },
];

export default function FlightResults({ searchData }) {
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <div className="w-full max-w-6xl">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Available Flights</h2>
        <p className="text-lg text-blue-100">
          {searchData.from} → {searchData.to} • {searchData.passengers} passenger{searchData.passengers > 1 ? 's' : ''}
        </p>
      </div>

      <div className="space-y-5">
        {flightData.map((flight) => (
          <div
            key={flight.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-7 md:p-8 cursor-pointer border-2 border-transparent hover:border-blue-300 hover:-translate-y-1"
            onClick={() => setSelectedFlight(flight.id)}
          >
            <div className="flex flex-col gap-6 md:gap-4 items-start">
              {/* AIRLINE HEADER */}
              <div className="md:col-span-2">
                <p className="text-xl font-bold text-gray-900">{flight.airline}</p>
                <div className="text-3xxl mt-1">{flight.image}</div>
              </div>

              {/* TIMES & DURATION */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">{flight.departure}</p>
                    <p className="text-sm text-gray-500 font-medium">Departure</p>
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="flex-1 h-0.5 bg-gradient-to-l from-blue-400 to-transparent"></div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-900">{flight.arrival}</p>
                    <p className="text-sm text-gray-500 font-medium">Arrival</p>
                  </div>
                </div>
              </div>

              {/* FLIGHT DETAILS */}
              <div className="md:col-span-2">
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-2"><span className="font-bold text-gray-900">{flight.duration}</span> flight time</p>
                  <span className="inline-block bg-blue-200 text-blue-800 text-xs font-bold px-4 py-2 rounded-full">
                    {flight.stops}
                  </span>
                </div>
              </div>

              {/* RATING */}
              <div className="md:col-span-1">
                <div className="bg-yellow-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(flight.rating) ? 'text-yellow-400 text-lg' : 'text-gray-300 text-lg'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="font-bold text-gray-900">{flight.rating}</p>
                  <p className="text-xs text-gray-500">{Math.floor(Math.random() * 500) + 100} reviews</p>
                </div>
              </div>

              {/* PRICE & CTA */}
              <div className="md:col-span-2 flex flex-col gap-4">
                <div className="text-center md:text-right">
                  <p className="text-4xl md:text-5xl font-bold text-blue-600">{flight.price}</p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">round trip per person</p>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedFlight && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Booking Confirmed</h3>
            <p className="text-gray-600 mb-6">
              You've selected {flightData.find((f) => f.id === selectedFlight).airline}
            </p>
            <button
              onClick={() => setSelectedFlight(null)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition"
            >
              Continue Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
