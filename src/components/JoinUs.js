import React from 'react';

const JoinUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Join Us on the Journey to Success</h2>

        {/* Why Join Us Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-500">
            At <strong>ST Investment Group</strong>, we are committed to creating a global network of investors and partners who share our vision of sustainable growth, collaboration, and opportunity. As we expand our presence worldwide, we invite you to be a part of this exciting journey by joining our investment platform.
          </p>
        </div>

        {/* Benefits of Joining Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Join Us?</h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
            <li><strong>Sustainable Investment Opportunities:</strong> Our focus is on building lasting success, from our coffee shops and bars to the innovative solutions we create through our investments.</li>
            <li><strong>Global Expansion:</strong> Be a part of our expanding footprint across the globe. With over 5,000 locations planned in key markets, your investment will help fuel our international growth.</li>
            <li><strong>Community Impact:</strong> Join a network of like-minded investors who believe in the power of community, sustainability, and growth.</li>
          </ul>
        </div>

        {/* How to Get Started Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">How to Get Started</h3>
          <p className="text-lg text-gray-500 mb-4">
            Getting started is easy! Simply follow the link below to the <strong>Cibex</strong> investment platform, where you can sign up, explore investment options, and take the next step toward a secure financial future.
          </p>
          <a
            href="https://cbex18.com?code=7eps9t9r0s00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Start Investing on Cibex
          </a>
        </div>

        {/* Telegram Channel Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-500 mb-4">
            We believe in building lasting relationships, and we want to hear from you! Join our community on <strong>Telegram</strong>, where you can ask questions, stay up to date with our latest updates, and connect with other investors.
          </p>
          <a
            href="YOUR_TELEGRAM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-300"
          >
            Join Our Telegram Channel
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
