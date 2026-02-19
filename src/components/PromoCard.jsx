import React from 'react';

export default function PromoCard({ icon, title, description, discount }) {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 group overflow-hidden relative absolute">
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition duration-300"></div>
      <div className="relative z-10">
        <div className="text-6xl mb-4 group-hover:scale-110 transition duration-300">{icon}</div>
        <h3 className="font-bold text-xl mb-3 leading-tight">{title}</h3>
        <p className="text-blue-100 text-sm mb-6 leading-relaxed">{description}</p>
        {discount && (
          <button className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl">
            {discount}
          </button>
        )}
      </div>
    </div>
  );
}
