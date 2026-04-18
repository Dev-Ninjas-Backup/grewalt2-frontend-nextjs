"use client";
// import React from "react";
import MarketProblemCard from "./MarketProblemCard";
import logoTalent from "@/public/solution/octicon_goal-16.svg"
import logoSpeci from "@/public/solution/raphael_users.svg"
import logoStrategy from "@/public/solution/ion_bulb.svg"
import Image from "next/image";
import iconGrp from "@/public/solution/Group 122.svg"

const MarketProblem = () => {
  const solutionData = [
    {
      title: "Scarce talent",
      description:
        "Demand for elite engineers, AI researchers, and blockchain specialists has accelerated faster than supply. The strongest candidates are already employed, contributing to open-source projects, building in stealth, or fielding multiple competing offers.",
      // points: [
      //   "14-day average placement time",
      //   "Technical screening by experts",
      //   "Cultural fit assessment",
      //   "Salary benchmarking included",
      // ],
      icon: logoTalent,
      btnText: "See Open Roles",
      delay: 0,
    },
    {
      title: "Lack of technical fluency to evaluate profiles",
      description:
        "AI and Web3 roles are technically complex. They require deep understanding of: LLM infrastructure, Model optimisation & deployment, Smart contract security, Decentralised protocol architecture and Distributed systems. Many recruiters — and even internal hiring teams — lack the technical fluency to properly evaluate these profiles. Buzzwords are common. True production-level expertise is rare.",
      // points: [
      //   "KYC/AML compliance teams",
      //   "Smart contract audit squads",
      //   "AI implementation teams",
      //   "Full-stack blockchain units",
      // ],
      icon: logoSpeci,
      btnText: "Build Your Team",
      delay: 200,
    },
    {
      title: "Top-tier talent moves quickly",
      description:
        "Demand for elite engineers, AI researchers, and blockchain specialists has accelerated faster than supply. The strongest candidates are already employed, contributing to open-source projects, building in stealth, or fielding multiple competing offers.",
      // points: [
      //   "AI fraud detection strategy",
      //   "Regulatory compliance (EU AI Act)",
      //   "Technology stack guidance",
      //   "Ongoing optimization support",
      // ],
      icon: logoStrategy,
      btnText: "Explore Advisory",
      delay: 400,
    },
  ];

  return (
    <section className="py-24  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <h1 className="text-4xl sm:text-5xl my-12">The Market Problem</h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {solutionData.map((item, index) => (
            <MarketProblemCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketProblem;
