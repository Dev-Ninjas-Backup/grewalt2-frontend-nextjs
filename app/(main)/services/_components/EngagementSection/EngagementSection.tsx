"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { EngagementCard } from "./EngagementCard";

import img1 from "@/public/service/scope.jpg";
import img2 from "@/public/service/signal.png";
import img3 from "@/public/service/execute.png";
import bgLogo from "@/public/service/bgserv.svg";


export default function EngagementSection() {

  const models = [
    {
      title: "Scope",
      description:
        "We define outcomes, risk constraints, hiring order, timeline, and interview loop.",
      image: img1,
      isHighlighted: false,
    },
    {
      title: "Signal",
      description:
        "Curated candidates and/or squad structure. No spam. No inflated longlists.",
      image: img2,
      isHighlighted: true,
    },
    {
      title: "Execute",
      description:
        "Close support through offer, onboarding, and early-stage performance alignment.",
      image: img3,
      isHighlighted: false,
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#05183D] py-24 px-6 overflow-hidden flex items-center">
      {/* Background Watermark Image - 85% Opacity and Scaled */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.85, scale: 1.5 }} // Set exactly to 0.85 opacity
          transition={{ duration: 2 }}
          className="relative w-full max-w-[800px] aspect-square"
        >
          <Image
            src={bgLogo}
            alt="background logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <header className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight"
          >
            Engagement models
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium"
          >
            Three clear ways to work with us. We&apos;ll recommend the right
            model based on urgency, stage and scope.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-stretch">
          {models.map((model, idx) => (
            <EngagementCard
              key={idx}
              {...model}
              // Stagger effect: each card starts 0.2s after the previous one
              delay={idx * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
