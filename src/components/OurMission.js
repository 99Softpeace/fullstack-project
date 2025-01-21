import React from 'react';
import missionImage from '../assets/images/ourmission2.jpg'; // Import the mission-related image

const OurMission = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Our Mission</h2>

        {/* Mission Text Section */}
        <div className="lg:flex lg:justify-between items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-lg text-gray-500 mb-4">
              At ST Investment Group, we believe in creating a future where innovation, sustainability, and collaboration drive global growth. Our mission is to empower communities worldwide through investments that foster long-term success and mutual benefit. We are dedicated to making strategic investments that promote sustainability, support local economies, and create lasting opportunities.
            </p>
            <p className="text-lg text-gray-500 mb-4">
              Our vision for 2025 includes expanding our footprint globally by opening 5,200 coffee shops and 800 bars, designed to serve as community hubs that foster connection, collaboration, and growth.
            </p>
          </div>

          {/* Mission Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={missionImage} // Use the imported mission-related image
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Key Focus Areas */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Drives Us</h3>
          <ul className="list-disc list-inside text-lg text-gray-500">
            <li>Empowering communities through strategic investments</li>
            <li>Promoting sustainability and responsible business practices</li>
            <li>Creating global opportunities for collaboration and growth</li>
            <li>Building a sustainable ecosystem for future generations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
