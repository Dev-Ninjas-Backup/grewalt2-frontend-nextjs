"use client";
import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import img1 from "@/public/newImg/service/img1.jpg"
import img2 from "@/public/newImg/service/img2.jpg"
import img3 from "@/public/newImg/service/img3.jpg"
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Talent Search",
      description:
        "Permanent, contract and executive hiring across AI, Web3, crypto and regulated fintech.",
      features: [
        "Critical hires, leadership builds, specialist roles.",
        "Small curated shortlist, structured vetting, close support.",
        "AI/ML, MLOps, Web3 engineering, security, compliance, risk.",
      ],
      buttonText: "Enquire",
    },
    {
      title: "Embedded Hiring",
      description:
        "An always-on talent engine managed by Aventra³ — ideal for multi-role scaling and pipeline building.",
      features: [
        "High-velocity multi-role hiring and sustained growth.",
        "Pipeline building, screening, scheduling, reporting, market intel.",
        "Consistency, speed and signal — without vendor chaos.",
      ],
      buttonText: "Build Your Team",
    },
    {
      title: "Specialist Squads",
      description:
        "Deploy ready-built teams to execute operational uplift or delivery under pressure.",
      features: [
        "Regulated growth, urgent execution, ops-heavy initiatives.",
        "KYC/AML deployments, compliance ops, transaction monitoring QA, AI support pods.",
        "Delivered workstreams — not just headcount.",
      ],
      buttonText: "Explore Advisory",
    },
  ];

  return (
    <main className="min-h-screen bg-white  py-20 md:py-32">
      <div className="flex flex-col gap-12">
        {/* Header Section */}
        <section className="mb-24 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            {/* Glowing Dot Section */}
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FDEF7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-[#6FDEF7] to-[#6FDEF7]"></span>
            </div>
            <span className="text-[14px] text-slate-600 font-medium tracking-wide">
              Clear services. High signal delivery
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[56px] md:text-[72px] font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-8"
          >
            Frontier Talent Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#64748B] text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Three ways to work with Aventra³ — designed for AI, blockchain, DeFi
            and Web3 teams operating at speed and (often) under regulation.
          </motion.p>
        </section>

        <section className="">
          <div className="grid grid-cols-3 ">
            <Image src={img2} alt="img" className="h-96 object-cover" />
            <Image src={img3} alt="img" className=" h-96 object-cover" />
            <Image src={img1} alt="img" className="h-96   object-cover" />
          </div>
        </section>

        {/* Middle Section */}
        <section className="mb-20 max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[52px] font-bold text-[#0F172A] mb-4 tracking-tight"
          >
            Choose a model that fits your stage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#64748B] text-lg max-w-3xl"
          >
            Recruitment only works when it’s aligned to team design, timing and
            risk. We start with clarity, then execute.
          </motion.p>
        </section>

        {/* Cards Grid */}
        <section className="mb-20 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} delay={0.1 * idx} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
