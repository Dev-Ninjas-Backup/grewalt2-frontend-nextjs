"use client";
// import React from "react";
import SolutionCard from "./SolutionCard";
import logoTalent from "@/public/solution/octicon_goal-16.svg"
import logoSpeci from "@/public/solution/raphael_users.svg"
import logoStrategy from "@/public/solution/ion_bulb.svg"
import Image from "next/image";
import iconGrp from "@/public/solution/Group 122.svg"

const Solutions = () => {
  const solutionData = [
    {
      title: "Elite Talent Recruitment",
      description:
        "Pre-vetted specialists who understand your technical requirements and cultural fit. From Solidity developers to AI compliance officers.",
      points: [
        "14-day average placement time",
        "Technical screening by experts",
        "Cultural fit assessment",
        "Salary benchmarking included",
      ],
      icon: logoTalent,
      btnText: "See Open Roles",
      delay: 0,
    },
    {
      title: "Specialist Teams",
      description:
        "Need a complete KYC team? DeFi protocol squad? We build and deliver ready-to-deploy specialist teams in 30-60 days.",
      points: [
        "KYC/AML compliance teams",
        "Smart contract audit squads",
        "AI implementation teams",
        "Full-stack blockchain units",
      ],
      icon: logoSpeci,
      btnText: "Build Your Team",
      delay: 200,
    },
    {
      title: "Strategic Advisory",
      description:
        "AI banking strategy. Blockchain compliance navigation. Managed services. We ensure your initiatives succeed beyond the hire.",
      points: [
        "AI fraud detection strategy",
        "Regulatory compliance (EU AI Act)",
        "Technology stack guidance",
        "Ongoing optimization support",
      ],
      icon: logoStrategy,
      btnText: "Explore Advisory",
      delay: 400,
    },
  ];

  return (
    <section className="py-24 bg-[#FBFDFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">

          <div className="flex flex-col gap-4">
            {/* Left Side: Badge and Title */}
            <div className="flex justify-between items-center">
              <div className="max-w-2xl">
                <div
                  data-aos="fade-right"
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FDEF7] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6FDEF7]"></span>
                  </div>
                  <span className="text-[12px] uppercase tracking-[0.2em] font-black text-slate-400">
                    What we do
                  </span>
                </div>
              </div>
              <h2
                data-aos="fade-up"
                className="text-4xl md:text-[56px] font-bold text-[#05183D] leading-[1.1]"
                style={{ fontFamily: "var(--font-bomstad), sans-serif" }}
              >
                Beyond Recruitment. <br className="hidden md:block" /> Complete
                Solutions.
              </h2>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex items-start gap-5 max-w-xl lg:mb-2"
            >
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                <Image
                  src={iconGrp}
                  alt="icon group"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              <p className="text-slate-500 text-lg md:text-[19px] leading-relaxed font-medium">
                We don&apos;t just place people—we build teams, provide strategic
                guidance, and ensure your AI and blockchain initiatives succeed
                at scale.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {solutionData.map((item, index) => (
            <SolutionCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
