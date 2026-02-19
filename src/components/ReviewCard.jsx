import React from 'react';

export default function ReviewCard({ name, rating, comment, date, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-blue-200">
      <div className="flex items-start gap-5">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-3xl flex-shrink-0 shadow-md group">
          {image}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="font-bold text-gray-900 text-lg">{name}</p>
              <p className="text-sm text-gray-500 font-medium">{date}</p>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                  ★
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-gray-600 mt-4 leading-relaxed text-base" style={{color: '#f3f4f6'}}>{comment}</p>
        </div>
      </div>
    </div>
  );
}
