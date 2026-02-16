import React, { useState } from 'react';

export default function SearchCard({ onSearch }) {
  const [tripType, setTripType] = useState('roundtrip');
  const [from, setFrom] = useState('MNL');
  const [to, setTo] = useState('NRT');
  const [departDate, setDepartDate] = useState('2024-10-24');
  const [returnDate, setReturnDate] = useState('2024-11-07');
  const [passengers, setPassengers] = useState(1);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = () => {
    onSearch({ from, to, departDate, returnDate, tripType, passengers });
  };

  return (
    <div className="bg-white w-full max-w-7xl rounded-3xl shadow-2xl p-8 md:p-10">
      {/* TABS */}
      <div className="flex space-x-8 mb-8 border-b-2 border-gray-100 pb-6">
        <button
          onClick={() => setTripType('roundtrip')}
          className={`text-base md:text-lg font-bold pb-3 -mb-6 transition relative ${
            tripType === 'roundtrip'
              ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-600 after:rounded-t-full'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          Round Trip
        </button>
        <button
          onClick={() => setTripType('oneway')}
          className={`text-base md:text-lg font-bold pb-3 -mb-6 transition relative ${
            tripType === 'oneway'
              ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-600 after:rounded-t-full'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          One Way
        </button>
        <button
          onClick={() => setTripType('multicity')}
          className={`text-base md:text-lg font-bold pb-3 -mb-6 transition relative ${
            tripType === 'multicity'
              ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-600 after:rounded-t-full'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          Multi-city
        </button>
      </div>

      {/* INPUT GRID */}
      {/* [BUG - LAYOUT] Invalid grid column count breaks responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-13 gap-3 md:gap-4 items-end">
      {/* [FIX] Should be md:grid-cols-12 */}
        {/* LOCATION GROUP */}
        {/* [BUG - TYPO] Invalid Tailwind border color class */}
        <div className="md:col-span-4 grid grid-cols-2 gap-0 border-2 border-gray-2 rounded-xl overflow-hidden relative hover:border-blue-300 transition">
        {/* [FIX] Should be border-gray-200 */}
          <div className="p-4 md:p-5 bg-gray-50 border-r border-gray-200 hover:bg-white transition">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value.toUpperCase())}
              className="w-full bg-transparent font-bold text-gray-900 text-lg md:text-xl outline-none placeholder-gray-300 mt-1"
            />
            <p className="text-xs text-gray-500 truncate mt-1">Departure</p>
          </div>
          <div className="p-4 md:p-5 bg-gray-50 hover:bg-white transition">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">To</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value.toUpperCase())}
              className="w-full bg-transparent font-bold text-gray-900 text-lg md:text-xl outline-none placeholder-gray-300 mt-1"
            />
            <p className="text-xs text-gray-500 truncate mt-1">Arrival</p>
          </div>

          {/* SWAP ICON */}
          {/* [BUG - LAYERS] Swap button hidden behind location fields */}
          <button
            onClick={handleSwap}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 border-2 border-gray-200 shadow-md hover:bg-blue-50 hover:border-blue-500 hover:shadow-lg transition duration-300 -z-10"
          >
            {/* [FIX] Should be z-10 */}
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </button>
        </div>

        {/* DATES GROUP */}
        <div className="md:col-span-4 flex border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition">
          <div className="flex-1 p-4 md:p-5 border-r border-gray-200 hover:bg-blue-50 transition">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Depart</label>
            <input
              type="date"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
              className="w-full font-bold text-gray-900 text-lg md:text-xl outline-none bg-transparent mt-1"
            />
          </div>
          {tripType !== 'oneway' && (
            <div className="flex-1 p-4 md:p-5 hover:bg-blue-50 transition">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Return</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full font-bold text-gray-900 text-lg md:text-xl outline-none bg-transparent mt-1"
              />
            </div>
          )}
        </div>

        {/* PASSENGERS */}
        <div className="md:col-span-2 border-2 border-gray-200 rounded-xl p-4 md:p-5 hover:bg-blue-50 hover:border-blue-300 transition">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Passengers</label>
          <select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="w-full font-bold text-gray-900 text-lg md:text-xl outline-none bg-transparent mt-1"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* SEARCH BUTTON */}
        {/* [BUG - SPACING] Negative margin causes overlap with passenger field */}
        <div className="md:col-span-2 -m-10">
        {/* [FIX] Remove -m-10 class */}
          <button
            onClick={handleSearch}
            className="w-full h-full bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-700 hover:via-blue-700 hover:to-blue-800 text-white font-bold py-5 md:py-0 px-4 md:px-6 rounded-xl transition shadow-lg hover:shadow-2xl active:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 md:gap-3 duration-300 text-base md:text-lg"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="font-semibold">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
