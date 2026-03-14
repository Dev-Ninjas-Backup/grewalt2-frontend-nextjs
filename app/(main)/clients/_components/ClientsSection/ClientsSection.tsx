"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import marketImg from "@/public/clients/marketI.jpg";
import teamImg from "@/public/clients/team.jpg";
import regImg from "@/public/clients/aware.jpg";
import deliveryImg from "@/public/clients/highSignal.jpg";

import { ClientFeatureCard } from "./ClientFeatureCard";

export default function ClientsSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const features = [
    {
      title: "Market intelligence",
      subtitle:
        "Comprehensive analysis of compensation, supply, and role scarcity in the frontier tech market.",
      image: marketImg,
    },
    {
      title: "Team design",
      subtitle:
        "Strategic hiring order and organizational shaping tailored for rapid scale-ups.",
      image: teamImg,
    },
    {
      title: "Regulation-aware",
      subtitle:
        "Navigating risk, controls, and governance within highly regulated fintech sectors.",
      image: regImg,
    },
    {
      title: "High-signal delivery",
      subtitle:
        "Focusing on curated shortlists that match your technical and cultural requirements.",
      image: deliveryImg,
    },
  ];

  return (
    <section className="bg-[#FAFBFF] py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F8BDD]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}

        <header className="mb-24 grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <div className="flex items-center gap-3 mb-6" data-aos="fade-right">
              <div className="h-[2px] w-12 bg-[#2F8BDD]" />

              <span className="text-sm text-[#2F8BDD] font-bold uppercase tracking-[0.3em]">
                Client Partnership
              </span>
            </div>

            <h1
              data-aos="fade-up"
              className="text-[52px] md:text-[80px] font-bold text-[#05183D] leading-[0.9] tracking-tight"
            >
              For Clients<span className="text-[#2F8BDD]">.</span>
            </h1>
          </div>

          <p
            data-aos="fade-left"
            className="text-slate-500 text-lg md:text-xl max-w-[420px] leading-relaxed font-medium border-l-4 border-[#2F8BDD]/20 pl-8"
          >
            Aventra³ helps organisations build and scale capability across AI,
            blockchain, crypto and regulated fintech.
          </p>
        </header>

        {/* Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {features.map((item, idx) => (
            <ClientFeatureCard
              key={idx}
              {...item}
              index={idx}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
