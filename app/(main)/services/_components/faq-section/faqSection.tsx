"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What industries does Aventra3 specialise in?",
    answer: (
      <div className="space-y-4">
        <p>
          We focus exclusively on emerging and frontier technologies, including:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Artificial Intelligence (AI)</li>
          <li>Machine Learning</li>
          <li>Web3</li>
          <li>Blockchain</li>
          <li>Crypto infrastructure</li>
          <li>Decentralized Finance (DeFi)</li>
        </ul>
        <p>
          This specialization allows us to outperform generalist recruiters.
        </p>
      </div>
    ),
  },
  {
    question:
      "What makes Aventra3 different from traditional recruitment agencies?",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Deep domain expertise in frontier tech</li>
        <li>Access to passive, hard-to-reach talent</li>
        <li>Global talent network</li>
        <li>Strategic advisory beyond hiring</li>
        <li>Data-driven talent mapping</li>
      </ul>
    ),
  },
  {
    question: "Do you offer retained search or contingency recruitment?",
    answer:
      "We offer both models depending on the complexity and urgency of the role. For highly technical or leadership roles, we typically recommend retained search.",
  },
  {
    question: "Can you help us build an entire AI or Web3 team?",
    answer:
      "Yes. We support full team builds — from founding engineers to executive leadership — including compensation benchmarking and workforce planning.",
  },
  {
    question: "Is your talent network global?",
    answer:
      "Yes. We source talent across North America, Europe, the Middle East, and Asia.",
  },
  {
    question: "How long does it take to fill a role?",
    answer:
      "Time-to-fill depends on role complexity. Niche AI research roles may take longer, while engineering hires typically range between 3–8 weeks.",
  },
  {
    question: "Do you guarantee placements?",
    answer:
      "We offer replacement guarantees depending on the engagement model.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F8FAFC] py-20 px-6 min-h-screen flex flex-col items-center">
      <div className="max-w-3xl w-full mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-[48px] md:text-[64px] font-black text-[#0F172A] mb-4 tracking-tighter uppercase">
            FAQ
          </h2>
          <p className="text-slate-500 text-lg">
            Short answers to common questions.
          </p>
        </header>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full cursor-pointer px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-slate-50"
              >
                <span className="text-[18px] md:text-[20px] font-bold text-[#0F172A] tracking-tight pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0F172A] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-500 text-[16px] leading-relaxed">
                      <div className="h-[1px] w-full bg-slate-100 mb-6" />
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
