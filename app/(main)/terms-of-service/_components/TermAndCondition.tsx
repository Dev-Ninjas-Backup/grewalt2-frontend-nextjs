import React from "react";
import { TERMS_DATA } from "./termData";
// import { TERMS_DATA } from "./termsData"; // Adjust path as needed

const TermAndCondition = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-20 px-6 md:px-12 lg:px-24 font-sans text-[#334155]">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-[#0D1B3E] mb-6 tracking-tight leading-tight uppercase">
            {TERMS_DATA.title}
          </h1>
          <p className="text-gray-500 font-medium mb-4">
            Effective Date: {TERMS_DATA.effectiveDate}
          </p>
          <p className="leading-relaxed text-lg">{TERMS_DATA.intro}</p>
        </header>

        {/* Operational Info Section */}
        <div className="space-y-4 mb-20 border-l-4 border-[#56C1ED] pl-6 py-2">
          <p className="leading-relaxed">
            Aventra3 is operated by{" "}
            <strong>{TERMS_DATA.companyInfo.name}</strong>, a company registered
            in England & Wales under company number{" "}
            <strong>{TERMS_DATA.companyInfo.regNumber}</strong>, with its
            registered office at:
          </p>
          <p className="font-medium text-[#0D1B3E] whitespace-pre-line">
            {TERMS_DATA.companyInfo.address}
          </p>
          <p className="pt-4 text-sm md:text-base text-gray-600">
            By accessing{" "}
            <span className="text-[#2F8BDD] underline cursor-pointer">
              {TERMS_DATA.companyInfo.website}
            </span>{" "}
            or engaging our services, you agree to be bound by these Terms.
          </p>
        </div>

        {/* Dynamic Content Mapping */}
        <div className="space-y-20">
          {TERMS_DATA.sections.map((section) => (
            <section key={section.id} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] tracking-tight leading-tight">
                {section.id}. {section.title}
              </h2>

              {section.content && (
                <p className="text-lg leading-relaxed text-[#475569]">
                  {section.content}
                </p>
              )}

              {section.points && (
                <ul className="space-y-4 pl-5">
                  {section.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-lg text-[#475569]"
                    >
                      <span className="text-gray-400 mt-2.5 text-[10px] flex-shrink-0">
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="pt-2 text-[#475569] leading-relaxed">
                  {section.footer}
                </p>
              )}
            </section>
          ))}

          <section className="pt-20 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1B3E] mb-8 tracking-tight">
              16. Contact Details
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                For any questions regarding this Privacy Policy or data
                protection matters:
              </p>
              <div className="space-y-1 font-medium">
                <p>MKTG INTELLECT GROUP UK LIMITED</p>
                <p>Company Number: 16066406</p>
                <p>Studio 9, 50-54 St. Pauls Square</p>
                <p>Birmingham</p>
                <p>United Kingdom</p>
                <p>B3 1QS</p>
              </div>
              <div className="pt-4 space-y-2">
                <p>
                  <strong>Email:</strong> info@aventra3.com
                </p>
                <p>
                  <strong>Website:</strong> www.aventra3.com
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermAndCondition;
