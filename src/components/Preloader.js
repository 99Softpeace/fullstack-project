import React from "react";
import logo from "../assets/images/logo.png"; // Adjust the path if needed

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white/20 backdrop-blur-x6 border border-white/30 shadow-lg flex flex-col items-center justify-center z-50">
      {/* Company logo with neon effect and bounce animation */}
      <img
        src={logo}
        alt="ST Investment Group"
        className="w-24 h-24 mb-6 animate-bounce text-blue-500 transform transition duration-500 ease-in-out hover:scale-110 hover:text-blue-700"
      />

      {/* Loading text */}
      <p className="text-gray-700 mt-4 text-xl font-semibold animate-pulse">
      Shaping brilliance for you...
      </p>
    </div>
  );
};

export default Preloader;
