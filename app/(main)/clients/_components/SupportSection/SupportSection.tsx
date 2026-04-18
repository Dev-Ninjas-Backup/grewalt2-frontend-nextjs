"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SupportCard } from "./SupportCard";

export default function SupportSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const supportOptions = [
    {
      icon: "zap" as const,
      title: "Build high-performance teams",
      description:
        "Permanent, contract and executive hiring across AI, data, Web3 engineering, product, risk and compliance.",
      buttonText: "See engagement models",
    },
    {
      icon: "users" as const,
      title: "Deploy specialist squads",
      description:
        "Outcome-driven teams for KYC/AML, compliance operations, transaction monitoring QA, and AI support pods.",
      buttonText: "Explore use cases",
    },
    {
      icon: "sparkles" as const,
      title: "AI systems advisory",
      description:
        "Practical guidance on AI opportunities, vendor selection, operating model, and safe deployment in regulated environments.",
      buttonText: "AI consulting overview",
    },
  ];

  return (
    <section className="bg-white py-32 px-6 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-xl" data-aos="fade-right">
            <h2 className="text-[40px] md:text-[60px] font-bold text-[#05183D] tracking-tighter leading-[1] mb-6">
              How we support <br />
              <span className="text-sky-500">our clients.</span>
            </h2>
            <div className="h-1.5 w-24 bg-sky-500 rounded-full"></div>
          </div>

          <p
            data-aos="fade-left"
            className="text-slate-500 text-lg md:text-xl max-w-[500px] leading-relaxed font-medium"
          >
            Use Aventra³ for hiring, managed delivery, or advisory. We guide the
            approach and connect you to the right specialists.
          </p>
        </div>

        {/* Support Grid with Better Proportions */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-slate-200 bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
          {supportOptions.map((option, idx) => (
            <SupportCard key={idx} {...option} delay={idx * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
