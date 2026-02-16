import React, { useState } from 'react';

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-2 border-gray-200 rounded-2xl p-7 hover:shadow-lg transition duration-300 hover:border-blue-300 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left font-bold text-gray-900 hover:text-blue-600 transition duration-300 group"
      >
        <span className="text-lg md:text-lg group-hover:translate-x-1 transition duration-300">{question}</span>
        <svg
          className={`w-6 h-6 text-blue-600 flex-shrink-0 transition duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {open && (
        <div className="border-t-2 border-gray-100 mt-6 pt-6">
          <p className="text-gray-600 leading-relaxed text-base">{answer}</p>
        </div>
      )}
    </div>
  );
}
