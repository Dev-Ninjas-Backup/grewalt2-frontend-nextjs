"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { EngagementModelCard } from "./EngagementModelCard";

export default function EngagementModel() {
  const services = [
    {
      title: "Talent Search",
      description:
        "Critical hires and leadership builds. Curated shortlists with structured vetting and close support.",
      features: [
        "Hard-to-fill roles & leaders",
        "Small shortlist + guidance",
        "Confidential searches",
      ],
      buttonText: "Enquire Now",
    },
    {
      title: "Embedded Hiring",
      description:
        "An always-on talent engine managed by Aventra³ — ideal for multi-role scaling.",
      features: [
        "Scale-ups & high velocity",
        "Pipeline & market intel",
        "Managed screening",
      ],
      buttonText: "Build Your Team",
    },
    {
      title: "Specialist Squads",
      description:
        "Outcome-driven delivery teams — built to execute under pressure in regulated settings.",
      features: [
        "Operational uplift",
        "Control frameworks",
        "Defined workstreams",
      ],
      buttonText: "Explore Advisory",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFBFF] px-6 md:px-12 py-24 md:py-40 relative overflow-hidden">
      {/* Background decorative orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F8BDD]/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/40 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-28">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-1 w-12 bg-[#2F8BDD] rounded-full" />
              <span className="text-sm text-[#2F8BDD] font-bold uppercase tracking-widest">
                Our Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[52px] md:text-[64px] font-bold text-[#05183D] leading-[1] tracking-tight"
            >
              How we support{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F8BDD] to-blue-500">
                clients
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
              Three ways to work with Aventra³ — designed for AI, blockchain,
              and Web3 teams operating at speed.
            </p>
            <div className="h-px w-full bg-slate-200" />
            <p className="text-[#05183D] font-bold">
              Clear services. High signal delivery.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, idx) => (
            <EngagementModelCard key={idx} {...service} delay={idx * 0.15} />
          ))}
        </div>
      </div>
    </main>
  );
}
