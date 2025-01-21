import React from 'react';
import aboutImage from '../assets/images/about.jpg';
import securityImage from '../assets/images/security.jpg'; // Add your security image path here
import leadershipImage from '../assets/images/leadership.jpg'; // Replace with actual leadership image path

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">About Us</h2>
            <p className="text-lg text-gray-500 mb-4">
              At ST Investment Group, our mission is to foster innovation, sustainability, and global community growth. We are dedicated to empowering communities and creating opportunities worldwide through strategic investments and collaboration.
            </p>
            <p className="text-lg text-gray-500 mb-4">
              With over 50,000 members and a vision to expand globally, we aim to open 5,200 coffee shops and 800 bars by 2025. These spaces are designed to promote networking, collaboration, and community building.
            </p>
            <p className="text-lg text-gray-500">
              Together, we strive for a future where innovation meets sustainability, ensuring long-term growth and success for our members and communities.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={aboutImage}
              alt="ST Investment Group"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
          <p className="text-lg text-gray-500 mb-4">
            Our mission is to lead the way in sustainable investments, creating a positive global impact through innovation and collaboration. We aim to empower individuals and communities through forward-thinking solutions.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8">Our Vision</h3>
          <p className="text-lg text-gray-500 mb-4">
            We envision a world where businesses thrive in harmony with nature and communities, shaping the future with integrity and a commitment to growth for everyone.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900">Our Core Values</h3>
          <ul className="list-disc list-inside text-lg text-gray-500 mt-4">
            <li>Integrity: We believe in maintaining transparency and honesty in everything we do.</li>
            <li>Sustainability: We are committed to creating long-lasting, positive impacts on the environment and society.</li>
            <li>Innovation: We strive for continuous innovation in our strategies and solutions to stay ahead of the curve.</li>
            <li>Collaboration: We value teamwork and partnerships that help achieve common goals.</li>
          </ul>
        </div>

        {/* Leadership Team Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900">Our Leadership Team</h3>
          <p className="text-lg text-gray-500 mb-4">
            Meet the visionaries behind ST Investment Group, who are committed to making a global impact through innovation and collaboration:
          </p>

          <div className="flex justify-between mt-8">
            <div className="w-1/4">
              <img src={leadershipImage} alt="CEO" className="w-full h-auto rounded-lg shadow-lg" />
              <h4 className="text-xl font-semibold text-gray-900 mt-4">Trust Otorudor</h4>
              <p className="text-lg text-gray-500">CEO & Founder</p>
            </div>
            {/* Add more leadership team members */}
          </div>
        </div>

        {/* Security Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900">Security at Cebex</h3>
          <p className="text-lg text-gray-500 mb-4">
            At ST Investment Group, the security of our platform, Cebex, is a top priority. We utilize industry-leading encryption methods to ensure that user data remains private and protected. Cebex employs robust security protocols, including end-to-end encryption, secure sockets layer (SSL) technology, and regular audits to guarantee the highest level of data protection.
          </p>
          <p className="text-lg text-gray-500 mb-4">
            Our platform complies with global security standards and is continuously monitored to detect and mitigate any potential threats. Whether you're making an investment or simply browsing, you can be assured that your data is safe with us.
          </p>

          {/* Security Image */}
          <div className="text-center">
            <img
              src={securityImage} // Replace with the actual security image
              alt="Cebex Platform Security"
              className="w-full h-auto rounded-lg shadow-lg mt-6"
            />
            <p className="text-lg text-gray-500 mt-4">Your data is encrypted and secured with the latest security measures.</p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">Ready to Join Us?</h3>
          <p className="text-lg text-gray-500 mb-4">
            If you're passionate about sustainability, innovation, and global growth, we'd love to have you onboard. Together, we can achieve great things.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
