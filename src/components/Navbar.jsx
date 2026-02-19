import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 shadow-xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-white rounded-xl p-2.5 shadow-md group-hover:shadow-lg transition transform group-hover:-translate-y-0.5">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.25 4.25L4.75 9.75m0 0v5.5m0-5.5h5.5m0 5h5.5v-5.5m0 0l5.5 5.5m-5.5-5.5v5.5"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-400">Travel<span className="text-blue-100">Go</span></h1>
              <p className="text-xs text-blue-100 hidden sm:block leading-none">Flight Booking</p>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-10">
            <a href="#" className="text-white hover:text-blue-100 font-medium transition duration-300 relative group">
              Flights
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-white hover:text-blue-100 font-medium transition duration-300 relative group">
              Hotels
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-white hover:text-blue-100 font-medium transition duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-white hover:text-blue-100 font-medium transition duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <button className="bg-white text-blue-700 font-bold px-6 md:px-8 py-2.5 rounded-lg hover:bg-blue-50 transition shadow-lg hover:shadow-xl active:shadow-md hover:-translate-y-0.5 duration-300 text-sm md:text-base font-semibold">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
