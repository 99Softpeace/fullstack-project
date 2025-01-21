import React from 'react';

// Import images
import welcomeImage1 from '../assets/images/newmembers.jpeg';
import cafeImage1 from '../assets/images/stcafe1.jpeg';
import officeImage1 from '../assets/images/st branch2.jpeg';
import cafeImage2 from '../assets/images/stcafe2.jpeg'; // New image
import branchImage1 from '../assets/images/stbranch1.jpeg'; // New image
import teamEventImage from '../assets/images/stcafe3.jpeg'; // New image

const Achievements = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Our Achievements</h2>

        {/* Company Achievement Text Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-500">
            ST Investment Group has made significant strides in creating a global community through our coffee shops, bars, and investments. Our team continuously works towards our mission of fostering sustainability, growth, and community collaboration.
          </p>
        </div>

        {/* Achievements Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Image 1: Welcome New Members */}
          <div className="relative">
            <img
              src={welcomeImage1}
              alt="ST Team Welcoming New Members"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="absolute bottom-4 left-4 text-white font-bold bg-black bg-opacity-50 px-4 py-2">Welcoming New Members</p>
          </div>

          {/* Image 2: ST Cafe */}
          <div className="relative">
            <img
              src={cafeImage1}
              alt="ST Cafe"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="absolute bottom-4 left-4 text-white font-bold bg-black bg-opacity-50 px-4 py-2">ST Cafe in Action</p>
          </div>

          {/* Image 3: ST Office Space */}
          <div className="relative">
            <img
              src={officeImage1}
              alt="ST Office"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="absolute bottom-4 left-4 text-white font-bold bg-black bg-opacity-50 px-4 py-2">ST Office Space</p>
          </div>

          {/* Image 4: ST Cafe (New Image) */}
          <div className="relative">
            <img
              src={cafeImage2}
              alt="ST Cafe Expansion"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="absolute bottom-4 left-4 text-white font-bold bg-black bg-opacity-50 px-4 py-2">ST Cafe Expansion</p>
          </div>

          {/* Image 5: ST Branch (New Image) */}
          <div className="relative">
            <img
              src={branchImage1}
              alt="ST Branch"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="absolute bottom-4 left-4 text-white font-bold bg-black bg-opacity-50 px-4 py-2">ST Ondo Branch</p>
          </div>

          {/* Image 6: Team Event (New Image) */}
          <div className="relative">
            <img
              src={teamEventImage}
              alt="ST Team Event"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="absolute bottom-4 left-4 text-white font-bold bg-black bg-opacity-50 px-4 py-2">ST Team Event</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
