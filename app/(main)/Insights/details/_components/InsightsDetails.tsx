/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
// import { articles as ARTICLES_DATA } from "./data"; // Apnar data file theke import korun
import bgImage from "@/public/contact/bgOne.png";
import insightFeatureImg from "@/public/newImg/insight/insDetl.png";
import { INSIGHTS_DATA } from "./data";

/**
 * Main Details Page Component
 */
const InsightsDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // Find the matching article or fallback to first
  const article = useMemo(() => {
    return (
      INSIGHTS_DATA.find((a: any) => a.id === Number(id)) || INSIGHTS_DATA[0]
    );
  }, [id]);

  const bgStyle = {
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  if (!article) return null;

  return (
    <main className="w-full bg-white flex flex-col">
      {/* 1. Background Header */}
      <section
        className="relative w-full pt-40 pb-60 px-6 overflow-hidden"
        style={bgStyle}
      >
        <div className="absolute inset-0 h-full z-0 bg-gradient-to-b from-[#021335] via-[#021335]/40 to-white" />
      </section>

      {/* 2. Image Section */}
      <section className="relative w-full px-6 pb-12 -mt-48 z-20 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="relative w-full rounded-md overflow-hidden shadow-2xl bg-[#0D1B3E]">
            <Image
              src={insightFeatureImg} // Dynamic image path thakle article.image use korun
              alt={article.title}
              className="object-cover w-full h-[40vh] md:h-[60vh]"
            />
          </div>
        </div>
      </section>

      {/* 3. Content Section */}
      <InsightDetailsContent article={article} />
    </main>
  );
};

/**
 * Content Renderer Component
 */
const InsightDetailsContent = ({ article }: { article: any }) => {
  return (
    <section className="w-full bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Meta Info */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2F8BDD] bg-blue-50 px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
          <span className="text-sm text-slate-400 font-medium">
            Published: {article.publishDate}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#05183D] leading-[1.1] mb-8">
          {article.title}
        </h1>

        {/* Introduction */}
        <div className="text-lg md:text-xl text-slate-600 leading-relaxed mb-16 border-l-4 border-[#2F8BDD] pl-6 py-2 italic">
          {article.introduction}
        </div>

        {/* Dynamic Sections Loop */}
        <div className="space-y-16">
          {article.sections.map((section: any, idx: number) => (
            <div key={idx} className="group">
              <h2 className="text-2xl md:text-3xl font-bold text-[#05183D] mb-6 flex items-center gap-4">
                <span className="text-[#2F8BDD]/20 text-4xl font-black">
                  0{idx + 1}
                </span>
                {section.title}
              </h2>

              <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                {/* Content text or list rendering */}
                {typeof section.content === "string" ? (
                  <p>{section.content}</p>
                ) : (
                  <p>{section.content}</p>
                )}

                {/* Sub-sections rendering for articles like ID: 8 */}
                {section.subSections && (
                  <div className="grid grid-cols-1 gap-8 mt-8">
                    {section.subSections.map((sub: any, sIdx: number) => (
                      <div
                        key={sIdx}
                        className="bg-slate-50 p-6 rounded-xl border-l-2 border-[#2F8BDD]"
                      >
                        <h4 className="font-bold text-[#05183D] text-lg mb-2">
                          {sub.title}
                        </h4>
                        <p className="text-slate-600">{sub.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {article.cta && (
          <div className="mt-24 p-8 md:p-12 bg-[#05183D] rounded-2xl text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Direct Execution</h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl">
                {article.cta}
              </p>
              <button className="bg-[#2F8BDD] hover:bg-blue-600 transition-colors px-8 py-4 rounded-lg font-bold">
                Work with Aventra3
              </button>
            </div>
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          </div>
        )}
      </div>
    </section>
  );
};

export default InsightsDetails;
