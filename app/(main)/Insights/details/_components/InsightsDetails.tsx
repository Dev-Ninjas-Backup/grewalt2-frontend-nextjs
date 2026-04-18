/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo } from "react";
// import Image from "next/image";
import { useSearchParams } from "next/navigation";
// import bgImage from "@/public/contact/bgOne.png";
// import insightFeatureImg from "@/public/newImg/insight/insDetl.png";
import { INSIGHTS_DATA } from "./data";

const InsightsDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const article = useMemo(() => {
    return (
      INSIGHTS_DATA.find((a: any) => a.id === Number(id)) || INSIGHTS_DATA[0]
    );
  }, [id]);

  // const bgStyle = {
  //   backgroundImage: `url(${bgImage.src})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // };

  // bg-gradient-to-b from-[#021335] via-[#021335]/60

  if (!article) return null;

  return (
    <main className="w-full mt-33  flex flex-col">
      {/* HERO HEADER */}
      <section
        className="relative w-full px-6 overflow-hidden"
        // style={bgStyle}
      >
        <div className="absolute inset-0  z-0" />
      </section>

      {/* FEATURE IMAGE */}
      {/* <section className="relative w-full px-6 pb-12 -mt-56 z-20 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
            <Image
              src={insightFeatureImg}
              alt={article.title}
              className="object-cover w-full h-[42vh] md:h-[35vh]"
            />
          </div>
        </div>
      </section> */}

      {/* CONTENT */}
      <InsightDetailsContent article={article} />
    </main>
  );
};

const InsightDetailsContent = ({ article }: { article: any }) => {
  return (
    <section className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 pb-28">
        {/* META */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2F8BDD] bg-[#EEF6FF] px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>

          <span className="text-sm text-slate-400 font-medium">
            Published: {article.publishDate}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#05183D] leading-[1.1] mb-10">
          {article.title}
        </h1>

        {/* INTRO */}
        <div className="text-lg md:text-xl text-slate-600 leading-relaxed mb-20 border-l-4 border-[#2F8BDD] pl-6 py-2 italic">
          {article.introduction}
        </div>

        {/* ARTICLE SECTIONS */}
        <div className="space-y-20">
          {article.sections.map((section: any, idx: number) => (
            <div key={idx} className="relative">
              {/* section divider */}
              {idx !== 0 && (
                <div className="absolute -top-10 left-0 w-full h-[1px] bg-slate-100" />
              )}

              <h2 className="text-2xl md:text-3xl font-bold text-[#05183D] mb-6 flex items-center gap-4">
                <span className="text-[#2F8BDD]/20 text-5xl font-black leading-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {section.title}
              </h2>

              <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                {typeof section.content === "string" ? (
                  <p>{section.content}</p>
                ) : (
                  <p>{section.content}</p>
                )}

                {/* SUB SECTIONS */}
                {section.subSections && (
                  <div className="grid grid-cols-1 gap-8 mt-10">
                    {section.subSections.map((sub: any, sIdx: number) => (
                      <div
                        key={sIdx}
                        className="bg-[#F8FAFC] p-6 rounded-xl border border-slate-100 hover:border-[#2F8BDD]/30 transition-colors"
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

        {/* CTA */}
        {article.cta && (
          <div className="mt-24 p-10 md:p-14 bg-[#05183D] rounded-2xl text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Build Your AI & Web3 Team
              </h3>

              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl">
                {article.cta}
              </p>

              <button className="bg-[#2F8BDD] hover:bg-blue-600 transition-colors px-8 py-4 rounded-lg font-bold">
                Work with Aventra3
              </button>
            </div>

            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -mr-40 -mt-40" />
          </div>
        )}
      </div>
    </section>
  );
};

export default InsightsDetails;
