import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-blue-600 p-4 md:p-12 font-sans flex flex-col items-center">
      
      <h1 className="text-4xl font-extrabold text-white mb-8 tracking-tight">
        Travel<span className="text-blue-200">Go</span>
      </h1>

      {/* SEARCH CARD */}
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-2xl p-6 md:p-10">
        
        {/* TABS */}
        <div className="flex space-x-6 mb-6 border-b border-gray-200 pb-4">
          <button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-4 -mb-4.5">Round Trip</button>
          <button className="text-gray-500 font-medium hover:text-blue-600">One Way</button>
          <button className="text-gray-500 font-medium hover:text-blue-600">Multi-city</button>
        </div>

        {/* INPUT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          
          {/* LOCATION GROUP */}
          <div className="md:col-span-5 grid grid-cols-2 gap-0 border border-gray-300 rounded-lg overflow-hidden relative">
            <div className="p-3 bg-gray-50 border-r border-gray-200 hover:bg-white transition">
              <label className="block text-xs font-bold text-gray-500 uppercase">From</label>
              <input type="text" defaultValue="MNL" className="w-full bg-transparent font-bold text-gray-900 text-xl outline-none placeholder-gray-300" />
              <p className="text-xs text-gray-400 truncate">Ninoy Aquino Intl</p>
            </div>
            <div className="p-3 bg-gray-50 hover:bg-white transition">
              <label className="block text-xs font-bold text-gray-500 uppercase">To</label>
              <input type="text" defaultValue="NRT" className="w-full bg-transparent font-bold text-gray-900 text-xl outline-none placeholder-gray-300" />
              <p className="text-xs text-gray-400 truncate">Narita International</p>
            </div>
            
            {/* SWAP ICON ABSOLUTE */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 border border-gray-200 shadow cursor-pointer hover:bg-gray-50">
               <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
            </div>
          </div>

          {/* DATES GROUP */}
          {/* FUTURE BUG: Add 'gap-4' to this flex container to break the visual grouping of the date fields */}
          <div className="md:col-span-5 flex border border-gray-300 rounded-lg overflow-hidden">
             <div className="flex-1 p-3 border-r border-gray-200 hover:bg-blue-50 transition cursor-pointer">
              <label className="block text-xs font-bold text-gray-500 uppercase">Depart</label>
              <span className="block font-bold text-gray-900 text-lg">Oct 24</span>
              <span className="text-xs text-gray-400">Tuesday</span>
            </div>
            <div className="flex-1 p-3 hover:bg-blue-50 transition cursor-pointer">
              <label className="block text-xs font-bold text-gray-500 uppercase">Return</label>
              <span className="block font-bold text-gray-900 text-lg">Nov 07</span>
              <span className="text-xs text-gray-400">Tuesday</span>
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <div className="md:col-span-2">
            <button className="w-full h-full bg-orange-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-orange-600 transition flex items-center justify-center py-4 md:py-0">
              Search
            </button>
          </div>

        </div>
        
        {/* PRICE PREDICTION (Horizontal Bar Chart) */}
        <div className="mt-8 pt-6 border-t border-gray-100">
           <h3 className="text-sm font-bold text-gray-700 mb-4">Price History</h3>
           <div className="flex items-end space-x-2 h-24">
              {[40, 60, 30, 80, 50, 90, 45, 60, 75, 50, 40, 65].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-100 rounded-t-sm hover:bg-blue-200 transition relative group">
                      <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                      {/* Tooltip */}
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
                          ${h * 5}
                      </div>
                  </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}

export default App;
