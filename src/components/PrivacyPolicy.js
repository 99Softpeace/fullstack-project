import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-900 p-8 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Privacy Policy</h1>
        <p className="mb-6 text-lg text-gray-700">
          At ST Investment Group, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect the following types of information:
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-700">
              <li>Personal Data: Names, contact information, and account details.</li>
              <li>Transactional Data: Investment and trading activity details.</li>
              <li>System Data: Logs and usage data for platform optimization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              Your information is used to:
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-700">
              <li>Provide and enhance our services.</li>
              <li>Comply with legal requirements.</li>
              <li>Communicate important updates about our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Protection and Compliance</h2>
            <p className="text-gray-700 mb-4">
              We adhere to stringent data protection standards, including encryption and compliance with global regulations like the U.S. MSB license.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to access, update, or delete your personal information. For any assistance, please contact our support team.
            </p>
          </section>

          <div className="border-t-2 border-gray-200 mt-8 pt-4 text-center">
            <p className="text-sm text-gray-500">
              This Privacy Policy is subject to updates. Please review it periodically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
