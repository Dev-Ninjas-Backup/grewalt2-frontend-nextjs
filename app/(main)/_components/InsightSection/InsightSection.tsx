"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import blogImg1 from "@/public/insight/ai.png";
import blogImg2 from "@/public/insight/ofc.png";
import blogImg3 from "@/public/insight/btc.png";
import bgShape from "@/public/teamSection/Svg file 2.svg";

import { InsightCard } from "../../Insights/_components/InsightsSection/InsightsSection";
import { useRouter } from "next/navigation";


const INSIGHTS_DATA = [
  {
    id: 1,
    image: blogImg1,
    category: "Market",
    date: "Dec 2025",
    readTime: "4 min read",
    title: "AI tooling consolidation: why it changes hiring",
    description:
      'As platforms consolidate, demand rises for integration, evaluation, and governance skills not only model building. It\'s a shift from "build" to "operate".',
  },
  {
    id: 2,
    image: blogImg2,
    category: "Hiring",
    date: "Dec 2025",
    readTime: "4 min read",
    title: "AI teams that scale: hire order that reduces risk",
    description:
      "The fastest teams follow a predictable sequence: product + data foundations → MLOps + reliability → applied scientists. Skip steps and you pay later.",
  },
  {
    id: 3,
    image: blogImg3,
    category: "Regulation",
    date: "Dec 2025",
    readTime: "4 min read",
    title: "DeFi compliance is becoming operational, not theoretical",
    description:
      "Teams are building controls, monitoring and reporting functions earlier — often using hybrid models: specialist squads + strategic hires.",
  },
];

const InsightSection = () => {
  const navigate  = useRouter()
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="bg-[#05183D] py-24 px-6 relative overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/10 opacity-90 pointer-events-none select-none z-0">
        <Image src={bgShape} alt="bg-shape" width={900} height={900} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div data-aos="fade-right" className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FDEF7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6FDEF7] shadow-[0_0_10px_#6FDEF7]"></span>
              </div>

              <p className="text-[#6FDEF7] text-[14px] font-bold uppercase tracking-widest">
                Insights
              </p>
            </div>

            <h2 className="font-bomstad text-[48px] md:text-[64px] font-bold text-white leading-[1.05]">
              Market Intelligence & <br /> Insights
            </h2>
          </div>

          <div data-aos="fade-left" className="max-w-md pb-2">
            <p className="text-slate-300 text-[16px] mb-8 leading-relaxed">
              Deep analysis across AI, DeFi, and Web3 — covering talent trends,
              regulatory shifts, and operational strategies shaping the future.
            </p>

            <button
              onClick={() => navigate.push("/Insights")}
              className="border cursor-pointer border-[#6FDEF7]/40 text-white px-10 py-3.5 rounded-xl hover:bg-[#6FDEF7] hover:text-[#05183D] transition-all duration-300 font-bold text-[15px]"
            >
              Explore Now
            </button>
          </div>
        </div>

        {/* Insights Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {INSIGHTS_DATA?.map((insight, index) => (
            <InsightCard
              key={insight.id}
              index={index}
              image={insight.image}
              category={insight.category}
              date={insight.date}
              readTime={insight.readTime}
              title={insight.title}
              summary={insight.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
