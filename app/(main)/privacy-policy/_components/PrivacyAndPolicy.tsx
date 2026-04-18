/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { PRIVACY_CONTENT } from "./privacy-data";


const PrivacyAndPolicy = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-20 px-6 md:px-12 lg:px-24 font-sans text-[#334155]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-[#0D1B3E] mb-6 tracking-tight">
            {PRIVACY_CONTENT.title}
          </h1>
          <p className="text-gray-500 font-medium mb-4">
            Effective Date: {PRIVACY_CONTENT.effectiveDate}
          </p>
          <p className="leading-relaxed text-lg">{PRIVACY_CONTENT.intro}</p>
        </header>

        {/* Company Info Box */}
        <div className="space-y-3 mb-20 text-sm md:text-base border-l-4 border-[#56C1ED] pl-6 py-2">
          <p>
            <strong>Company Number:</strong>{" "}
            {PRIVACY_CONTENT.companyDetails.number}
          </p>
          <p className="max-w-sm">
            <strong>Registered Office:</strong>{" "}
            {PRIVACY_CONTENT.companyDetails.office}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`https://${PRIVACY_CONTENT.companyDetails.website}`}
              className="text-[#2F8BDD] hover:underline"
            >
              {PRIVACY_CONTENT.companyDetails.website}
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${PRIVACY_CONTENT.companyDetails.email}`}
              className="text-[#2F8BDD] hover:underline"
            >
              {PRIVACY_CONTENT.companyDetails.email}
            </a>
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-16">
          {PRIVACY_CONTENT.sections.map((section) => (
            <section key={section.id} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] tracking-tight">
                {section.id}. {section.title}
              </h2>

              {section.content && (
                <p className="leading-relaxed text-lg">{section.content}</p>
              )}

              {section.list && (
                <ul className="space-y-3 pl-5">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-gray-400 mt-1.5 text-xs">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Subsections (like 3A, 3B) */}
              {section.subsections?.map((sub, idx) => (
                <div key={idx} className="pt-4 space-y-4">
                  <h3 className="text-xl font-bold text-[#0D1B3E]">
                    {(sub as any).title}
                  </h3>
                  {sub.intro && <p>{sub.intro}</p>}
                  <ul className="space-y-2 pl-5">
                    {(sub as any).list &&
                      (sub as any).list.map((item: any, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-gray-400 mt-1.5 text-xs">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                  </ul>
                  {(sub as any).footer && (
                    <p className="text-sm text-gray-500 italic">
                      {(sub as any).footer}
                    </p>
                  )}
                </div>
              ))}

              {section.footer && <p className="pt-4">{section.footer}</p>}
            </section>
          ))}

          <section className="pt-20 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1B3E] mb-8 tracking-tight">
              16. Contact Information
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

export default PrivacyAndPolicy;
