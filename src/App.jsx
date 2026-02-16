import React, { useState } from 'react';
import { Navbar, SearchCard, FlightResults, ReviewCard, Footer, PromoCard, StatsCard, FAQItem, PriceCard } from './components/index.js';

function App() {
  const [showResults, setShowResults] = useState(false);
  const [searchData, setSearchData] = useState(null);

  const handleSearch = (data) => {
    setSearchData(data);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <div className="bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 pb-0 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full -ml-40 -mb-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg">
              Find Your Perfect Flight
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium">Discover amazing deals on flights worldwide</p>
          </div>

          {/* SEARCH CARD */}
          <div className="flex justify-center mb-8">
            <SearchCard onSearch={handleSearch} />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        {showResults ? (
          <div>
            <button
              onClick={() => setShowResults(false)}
              className="mb-12 text-blue-600 hover:text-blue-700 font-bold flex items-center gap-2 text-lg transition duration-300 group"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Search
            </button>
            <FlightResults searchData={searchData} />
          </div>
        ) : (
          <div>
            {/* PROMOTIONS SECTION */}
            <section className="mb-28">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Special Offers</h2>
                <p className="text-lg text-gray-600">Exclusive deals just for you</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PromoCard
                  icon="🎉"
                  title="Summer Flash Sale"
                  description="Get up to 50% off on selected flights"
                  discount="Save Now"
                />
                <PromoCard
                  icon="🎁"
                  title="Loyalty Rewards"
                  description="Earn points on every booking"
                  discount="Join Free"
                />
                <PromoCard
                  icon="✈️"
                  title="Weekend Getaways"
                  description="Last-minute deals on weekend trips"
                  discount="Book Today"
                />
              </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="mb-20 bg-gray-50 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose TravelGo</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Best Prices</h3>
                  <p className="text-gray-600">Guaranteed lowest fares across all airlines</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Fast Booking</h3>
                  <p className="text-gray-600">Book your flight in just 3 easy steps</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">🛡️</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Secure Payment</h3>
                  <p className="text-gray-600">100% safe and encrypted transactions</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">📞</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Always here to help you anytime</p>
                </div>
              </div>
            </section>

            {/* FEATURED ROUTES */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Popular Routes</h2>
              <p className="text-gray-600 mb-10">Most booked destinations this month</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { from: 'MNL', to: 'NRT', price: '$189' },
                  { from: 'NYC', to: 'LAX', price: '$149' },
                  { from: 'LHR', to: 'CDG', price: '$89' },
                  { from: 'SYD', to: 'MEL', price: '$79' },
                ].map((route, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{route.from}</p>
                      </div>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{route.to}</p>
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 text-center">{route.price}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* REVIEWS SECTION */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Traveler Reviews</h2>
              <p className="text-gray-600 mb-10">What our customers say about us</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ReviewCard
                  name="Sarah Johnson"
                  rating={5}
                  comment="Amazing experience! Found the perfect flight at an unbeatable price. Will definitely book again with TravelGo."
                  date="2 weeks ago"
                  image="👩"
                />
                <ReviewCard
                  name="Michael Chen"
                  rating={5}
                  comment="Super easy to use website and great customer service. They helped me change my flight without any issues."
                  date="1 month ago"
                  image="👨"
                />
                <ReviewCard
                  name="Emma Davis"
                  rating={4}
                  comment="Good prices and smooth booking process. Only wish there were more flight options for my specific route."
                  date="3 weeks ago"
                  image="👩"
                />
              </div>
            </section>

            {/* CTA SECTION */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white mb-20">
              <h2 className="text-4xl font-bold mb-4">Ready to Book Your Next Adventure?</h2>
              <p className="text-xl text-blue-100 mb-8">Start searching for flights now and save up to 50%</p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white hover:bg-gray-50 text-blue-600 font-bold py-3 px-8 rounded-lg transition shadow-lg text-lg"
              >
                Search Flights Now
              </button>
            </section>

            {/* STATS SECTION */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Why 5M+ Travelers Trust Us</h2>
              <p className="text-gray-600 mb-10">Join millions of happy travelers worldwide</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatsCard icon="✈️" number="50K+" label="Flights Daily" />
                <StatsCard icon="🌍" number="195+" label="Countries" />
                <StatsCard icon="💰" number="$2B+" label="Saved Annually" />
                <StatsCard icon="😊" number="4.8★" label="Customer Rating" />
              </div>
            </section>

            {/* PRICING SECTION */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Price Comparison</h2>
              <p className="text-gray-600 mb-10">Find your budget-friendly option</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PriceCard price="149" label="Economy" />
                <PriceCard price="289" label="Premium Economy" highlight={true} />
                <PriceCard price="549" label="Business" />
              </div>
            </section>

            {/* FAQ SECTION */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-10">Answers to your travel booking questions</p>
              <div className="space-y-4">
                <FAQItem
                  question="How far in advance should I book a flight?"
                  answer="Typically, booking 1-2 months in advance offers the best prices. For domestic flights, 3-4 weeks is usually sufficient. However, prices can vary significantly based on travel season and destination, so using our price comparison tool is recommended."
                />
                <FAQItem
                  question="Can I change or cancel my flight?"
                  answer="Most tickets allow cancellations or changes, though fees may apply depending on the airline and ticket type. We recommend checking the specific terms when booking. Travel insurance can provide additional coverage for unforeseen circumstances."
                />
                <FAQItem
                  question="What are your baggage policies?"
                  answer="Baggage allowances vary by airline and ticket class. Most economy flights include one checked bag and a carry-on, while premium classes offer more baggage. You can view specific policies for each flight during the booking process."
                />
                <FAQItem
                  question="Is my payment information secure?"
                  answer="Yes, we use industry-leading encryption and security protocols. All payments are processed through secure payment gateways with SSL certificates to protect your personal and financial information."
                />
                <FAQItem
                  question="Do you offer group discounts?"
                  answer="We offer special rates for group bookings of 10 or more passengers. Please contact our customer support team for custom quotes and booking arrangements."
                />
                <FAQItem
                  question="Can I get a refund?"
                  answer="Refund eligibility depends on your ticket type and the airline's policy. Non-refundable tickets cannot be refunded but can usually be converted to travel credits. Flexible tickets can be refunded directly to your original payment method."
                />
              </div>
            </section>

            {/* NEWSLETTER SECTION */}
            <section className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-12 text-white text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Don't Miss Out on Deals</h2>
              <p className="text-lg text-purple-100 mb-8">Subscribe to get exclusive offers and travel tips delivered to your inbox</p>
              <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg text-gray-900 font-medium outline-none focus:shadow-lg transition"
                />
                <button className="bg-white hover:bg-gray-50 text-blue-600 font-bold px-8 py-3 rounded-lg transition shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-purple-200 mt-4">We'll never spam you. Unsubscribe anytime.</p>
            </section>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
