import React from 'react';

export default function StatsCard({ icon, number, label }) {
  return (
    <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 group border border-gray-100 hover:border-blue-200">
      <div className="text-6xl mb-4 group-hover:scale-125 transition duration-300 inline-block">{icon}</div>
      <p className="text-5xl font-bold text-blue-600 mt-4">{number}</p>
      <p className="text-gray-600 mt-3 font-medium text-base">{label}</p>
    </div>
  );
}
