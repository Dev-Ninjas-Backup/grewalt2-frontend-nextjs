"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

import { PartnerCard } from "./PartnerCard";

// Images
import imgAI from "@/public/service/scope.jpg";
import imgWeb3 from "@/public/clients/protocol.jpg";
import imgGTM from "@/public/clients/industry.jpg";
import oneCall from "@/public/clients/one-call.jpg";

export default function PartnerSection() {
  const route = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-quart",
    });
  }, []);

  const partners = [
    {
      title: "Implementation partners",
      description:
        "AI product build, MLOps foundations and tooling integration.",
      image: imgAI,
      tag: "AI & Data",
    },
    {
      title: "Protocol & app studios",
      description:
        "Smart contract development, audits, security review and launch support.",
      image: imgWeb3,
      tag: "Web3",
    },
    {
      title: "Industry specialists",
      description:
        "Marketing, partnerships, community and market entry support.",
      image: imgGTM,
      tag: "Go-to-market",
    },
    {
      title: "One call → curated introductions",
      description:
        "We understand your goals and connect you with carefully curated partners — no directories, just the right matches.",
      image: oneCall,
      tag: "Network",
    },
  ];

  return (
    <section className="bg-[#FDFDFD] py-32 px-6 md:px-12 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl" data-aos="fade-right">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-1 bg-sky-500 rounded-full"></span>
              <span className="text-sm font-bold text-sky-600 uppercase tracking-widest">
                Global Ecosystem
              </span>
            </div>
            <h2 className="text-[50px] md:text-[80px] font-bold text-[#05183D] leading-[0.9] tracking-tighter">
              The Partner <br />{" "}
              <span className="text-slate-400">Network.</span>
            </h2>
          </div>

          <div data-aos="fade-left" className="max-w-md pb-4">
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-8 font-medium">
              We connect you beyond hiring. Access our trusted ecosystem of
              specialists and delivery teams to accelerate your growth.
            </p>
            <button
              onClick={() => route.push("/contact")}
              className="group relative flex items-center gap-3 px-8 py-4 bg-[#05183D] text-white rounded-full font-bold text-sm transition-all hover:bg-sky-600 shadow-xl shadow-slate-200"
            >
              Ask for an intro
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </header>

        {/* Partner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-16">
          {partners.map((partner, idx) => (
            <PartnerCard
              key={idx}
              title={partner.title}
              description={partner.description}
              image={partner.image}
              tag={partner.tag}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
