import React from 'react';
import { ChevronRight } from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using our platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services."
    },
    {
      title: "2. Platform Usage",
      content: "Users must comply with the following rules:\n- Maintain active participation in the learning group\n- Follow trading signal guidelines strictly\n- Use only 1% of account balance per trade\n- Execute trades personally without forwarding signals\n- Maintain one account per person"
    },
    {
      title: "3. Trading Rules and Volume Requirements",
      content: "- All trades must follow the provided signals and timing\n- Trading volume requirements must be met to avoid penalties\n- A 20% fee applies when trading volume is less than twice the deposit amount\n- Trading signals are provided at 14:00 and 19:00 UK time"
    },
    {
      title: "4. Account Security",
      content: "Users are responsible for:\n- Maintaining account security\n- Not sharing personal account information or passwords\n- Reporting any security concerns immediately\n- Following proper verification procedures"
    },
    {
      title: "5. Team Structure and Responsibilities",
      content: "- Members are encouraged to form five-person teams\n- Team leaders must maintain active communication\n- Regular participation in team activities is required\n- Support and training will be provided to team members"
    },
    {
      title: "6. Financial Terms",
      content: "- Deposits exceeding 10,000 USDT require special approval\n- Withdrawal processes must follow platform guidelines\n- Returns are calculated based on account balance and trading volume\n- Commission structures are based on team performance and size"
    },
    {
      title: "7. Compliance and Conduct",
      content: "Users must:\n- Comply with anti-money laundering regulations\n- Maintain professional conduct in all communications\n- Not spread false information or market manipulation\n- Follow all applicable local laws and regulations"
    },
    {
      title: "8. Termination of Service",
      content: "We reserve the right to terminate service for:\n- Violation of these terms\n- Spreading negative information\n- Unauthorized multiple accounts\n- Non-compliance with team rules"
    },
    {
      title: "9. Modifications to Terms",
      content: "We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of new terms."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6">
        <h2 className="text-3xl font-semibold text-center">Terms of Service</h2>
      </div>
      <div className="p-8 space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-start space-x-3">
              <ChevronRight className="h-6 w-6 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
            </div>
            <div className="ml-8 text-gray-700 leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
            <div className="border-t-2 border-gray-200 mt-4 pt-4" />
          </div>
        ))}

        <div className="mt-12 pt-6 border-t text-sm text-gray-500 text-center">
          Last updated: January 15, 2025
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
