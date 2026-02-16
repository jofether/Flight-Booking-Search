import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20 mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* ABOUT */}
          <div>
            <h3 className="font-bold text-xl mb-5">About TravelGo</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted travel companion for finding the best flight deals and seamless booking experiences worldwide.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-bold text-xl mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition duration-300 inline-block">Home</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition duration-300 inline-block">Flights</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition duration-300 inline-block">Hotels</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition duration-300 inline-block">Deals</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="font-bold text-xl mb-5">Support</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition duration-300 inline-block">Help Center</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition duration-300 inline-block">Contact Us</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition duration-300 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition duration-300 inline-block">Terms</a></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-bold text-xl mb-5">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition duration-300 hover:shadow-lg hover:-translate-y-1 text-lg font-bold">
                f
              </a>
              <a href="#" className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition duration-300 hover:shadow-lg hover:-translate-y-1 text-lg">
                𝕏
              </a>
              <a href="#" className="w-12 h-12 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition duration-300 hover:shadow-lg hover:-translate-y-1 text-lg">
                📷
              </a>
              <a href="#" className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition duration-300 hover:shadow-lg hover:-translate-y-1 text-lg">
                ▶
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-10">
          <div className="text-center text-gray-500 text-sm font-medium">
            <p>&copy; 2026 TravelGo. All rights reserved. Made with ❤️ for travelers.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
