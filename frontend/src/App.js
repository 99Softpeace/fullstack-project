import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use BrowserRouter as Router
import HomePage from "./components/HomePage"; // Adjust the import path if needed
import AboutUs from "./components/AboutUs"; // Import the About Us component
import Header from "./components/Header"; // Import the Header
import Footer from "./components/Footer"; // Import the Footer
import OurMission from "./components/OurMission"; // Import the Our Mission component
import Achievements from "./components/Achievements"; // Import the Achievements component
import JoinUs from "./components/JoinUs"; // Import the Join Us component
import PrivacyPolicy from "./components/PrivacyPolicy"; // Import the Privacy Policy component
import TermsOfService from "./components/TermsOfService"; // Import the Terms of Service component
import ContactUs from "./components/ContactUs"; // Import the Contact Us component
import Preloader from "./components/Preloader"; // Import the Preloader component

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data or other async operations)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isLoading) {
    return <Preloader />; // Show the Preloader while loading
  }

  return (
    <Router>
      <Header /> {/* This renders the Header on all pages */}
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} /> {/* About Us Route */}
            <Route path="/our-mission" element={<OurMission />} /> {/* Our Mission Route */}
            <Route path="/achievements" element={<Achievements />} /> {/* Achievements Route */}
            <Route path="/join-us" element={<JoinUs />} /> {/* Join Us Route */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Privacy Policy Route */}
            <Route path="/terms" element={<TermsOfService />} /> {/* Terms of Service Route */}
            <Route path="/contact" element={<ContactUs />} /> {/* Contact Us Route */}
            {/* Add more routes here for other pages */}
          </Routes>
        </div>
        <Footer /> {/* This renders the Footer on all pages */}
      </div>
    </Router>
  );
};

export default App;
