import React from 'react';
import { ArrowRight, Globe, Users, Target, Calendar } from 'lucide-react';
import { Card, CardContent } from './Card'; 
import logo from '../assets/images/hero.jpg'; 
import GlobalMap from './GlobalMap';  
import aboutImage from '../assets/images/about.jpg'; 
import patnershipImage from '../assets/images/patnership.jpg'; 
import sustainabilityImage from '../assets/images/sustainability.jpg'; 
import LeadershipImage from '../assets/images/leadership.jpg'; 
import communityEngagementImage from '../assets/images/achievements.jpg'; 

const HomePage = () => {
  const stats = [
    { 
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: "Global Presence",
      value: "20M+",
      description: "Online Users Target by 2025"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Team Growth",
      value: "50,000+",
      description: "Active Team Members"
    },
    {
      icon: <Target className="h-6 w-6 text-blue-500" />,
      title: "Success Rate",
      value: "99.8%",
      description: "Trading Signal Accuracy"
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-500" />,
      title: "Global Network",
      value: "6,000+",
      description: "Locations Worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${logo})` }}  // Use the imported image
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
              <span className="block">Innovation and Sustainability</span>
              <span className="block text-blue-600">Driving Global Growth</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-black sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Leading the way in strategic development and collaborative success through our commitment to innovation, sustainability, and win-win partnerships.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="/join-us"  // Updated link to Join Us page
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Join Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900">{stat.value}</h3>
                <p className="text-sm font-medium text-center text-gray-500 mt-2">{stat.title}</p>
                <p className="text-xs text-center text-gray-400 mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">About ST Investment Group</h2>
              <p className="text-lg text-gray-500 mb-4">
                At ST Investment Group, we are dedicated to making a significant impact globally through sustainable practices, innovation, and collaboration. Our mission is to lead in driving growth across continents and empowering communities worldwide.
              </p>
              <p className="text-lg text-gray-500">
                With a team of over 50,000 members and a vision to expand globally by 2025, we are creating spaces for professional networking and community building through our coffee shops and bars.
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img
                src={aboutImage} 
                alt="ST Investment Group"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Achievements</h2>
          <p className="mt-4 text-lg text-gray-500">
            Over the years, we’ve achieved remarkable milestones, including our target of establishing over 5,200 coffee shops and 800 bars by 2025. We are proud to lead the way in sustainable growth and community building.
          </p>
        </div>
        
        {/* Individual Achievements */}
        {[ 
          {
            title: "Sustainability Commitment",
            description: "We are committed to sustainability in every aspect of our business. From sourcing eco-friendly products for our coffee shops to reducing carbon emissions in our operations, we strive to lead the way in creating a greener, more sustainable future.",
            image: sustainabilityImage
          },
          {
            title: "Innovative Partnerships",
            description: "Through innovative partnerships with local and international businesses, we continue to foster a collaborative environment, contributing to local economies and providing opportunities for growth.",
            image: patnershipImage
          },
          {
            title: "Successful Community Engagement",
            description: "Our coffee shops and bars have become vital community hubs, hosting events, seminars, and gatherings that help connect professionals, entrepreneurs, and community members.",
            image: communityEngagementImage
          },
          {
            title: "Industry Leadership",
            description: "As an industry leader, ST Investment Group has set the standard for excellence in business operations and customer experience. Our focus on quality, innovation, and sustainability has positioned us for continued success.",
            image: LeadershipImage
          },
        ].map((achievement, index) => (
          <div key={index} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex items-center justify-between">
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
              <p className="text-lg text-gray-500 mb-4">{achievement.description}</p>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Global Map Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Global Expansion</h2>
          <p className="mt-4 text-lg text-gray-500 text-center">
            Our global expansion plan includes opening 5,200 coffee shops and 800 bars across six continents. We are bringing our products and services to communities around the world.
          </p>
          <GlobalMap className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
