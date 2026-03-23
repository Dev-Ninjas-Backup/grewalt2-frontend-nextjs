"use client";
import React, { useEffect } from "react";
import ExpertiseCard from "./ExpertiseCard";
import AOS from "aos";
import "aos/dist/aos.css";

// SVG Icons import
import IconBlockchain from "@/public/expertiseVideo/blockchain.svg";
import IconAiBank from "@/public/expertiseVideo/mingcute_ai-fill.svg";
import IconIntersection from "@/public/expertiseVideo/crypto.svg";
import Image from "next/image";

const Expertise = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-out-cubic",
      mirror: true,
    });
  }, []);

  const expertiseData = [
    {
      id: 1,
      title: "AI",
      description:
        "AI-driven talent for secure, compliant, and intelligent financial systems.",
      icon: <Image src={IconAiBank} alt="AI Bank" width={32} height={32} />,
      video: "/expertiseVideo/ai.mp4", 
      delay: 0,
    },
    {
      id: 2,
      title: "Blockchain & Web3",
      description:
        "Expert engineers powering decentralized infrastructure and innovation.",
      icon: (
        <Image src={IconBlockchain} alt="Blockchain" width={32} height={32} />
      ),
      video: "/expertiseVideo/blockchain.mp4",
      delay: 200,
    },
    {
      id: 3,
      title: "The Intersection",
      description:
        "Bridging traditional finance and blockchain with secure, AI-powered solutions.",
      icon: (
        <Image
          src={IconIntersection}
          alt="Intersection"
          width={32}
          height={32}
        />
      ),
      video: "/expertiseVideo/intersection.mp4",
      delay: 400,
    },
  ];

  return (
    <section className="py-24 bg-[#FBFDFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <div data-aos="fade-right" className="flex items-center gap-3 mb-4">
              {/* Twinkling Star Indicator */}
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FDEF7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6FDEF7] shadow-[0_0_12px_#6FDEF7]"></span>
              </div>
              <span className="text-[12px] uppercase tracking-[0.2em] font-black text-slate-400">
                Our Expertise
              </span>
            </div>

            <h2
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-4xl md:text-[56px] font-bold text-[#05183D] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-bomstad), sans-serif" }}
            >
              We Speak Three <br /> Languages Fluently
            </h2>
          </div>
          <p
            data-aos="fade-left"
            className="max-w-md text-slate-500 text-lg md:text-[19px] leading-relaxed font-medium"
          >
            AI. Blockchain. Banking. The only firm operating at this
            intersection with deep expertise in all three domains.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseData.map((item) => (
            <ExpertiseCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              video={item.video}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
