import React from 'react';

export default function PriceCard({ price, currency = '$', label, highlight = false }) {
  return (
    <div className={`rounded-2xl p-8 text-center transition duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl border-2 ${
      highlight
        ? 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white border-blue-400 ring-2 ring-blue-400 ring-offset-2'
        : 'bg-white text-gray-900 border-gray-200 hover:border-blue-300'
    }`}>
      <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${highlight ? 'text-blue-100' : 'text-gray-600'}`}>{label}</p>
      <p className={`text-6xl font-bold mb-1 ${highlight ? 'text-white' : 'text-blue-600'}`}>
        {currency}{price}
      </p>
      <p className={`text-xs ${highlight ? 'text-blue-100' : 'text-gray-500'}`}>per person</p>
      {highlight && (
        <div className="mt-6 pt-6 border-t border-white border-opacity-20">
          <p className="text-xs text-blue-100 font-semibold">MOST POPULAR</p>
        </div>
      )}
    </div>
  );
}
