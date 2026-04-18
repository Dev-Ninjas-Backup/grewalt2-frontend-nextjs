/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

import web3Img from "@/public/insights/web3.jpg";
import ai_team from "@/public/insights/ai-team.png";
import ai_tool from "@/public/insights/ai-tool.png";
import defi from "@/public/insights/defi.png";
import high_signal from "@/public/insights/high-signal.png";
import shifting from "@/public/insights/shifting.png";
import evloving from "./imgs/evolving.png";
import gold_vs_bitcoin from "./imgs/Gold-Vs-Bitcoin.jpg";
import in_hand_bit from "./imgs/in-hand-web3.webp";
import monitoring from "./imgs/monitoring.webp";
import stable_coin from "./imgs/stable-coin.avif";
import web3ki from "./imgs/web-ki.png";
import { FiDownload } from "react-icons/fi";

const articles = [
  {
    id: 1,
    title:
      "Why Your Company Can't Hire AI & Blockchain Talent (And What Actually Works)",
    category: "Hiring",
    publishDate: "2026",
    summary:
      "72% of employers report difficulty filling roles, with AI expertise now the #1 hardest skill to find globally.",
    image: shifting,
    readTime: "6 min read",
    tags: ["Hiring", "Market"],
  },
  {
    id: 2,
    title: "Why Firms Must Build AI Teams in 2026 — And Why Waiting Is Risky",
    category: "AI",
    publishDate: "2026",
    summary:
      "AI is no longer experimental technology. It is becoming core business infrastructure.",
    image: ai_team,
    readTime: "5 min read",
    tags: ["AI", "Strategy"],
  },
  {
    id: 3,
    title: "Web3 in 2025: From Hype to Infrastructure",
    category: "Web3",
    publishDate: "2025",
    summary:
      "Web3 is shifting toward infrastructure, compliance, and real-world use cases.",
    image: web3Img,
    readTime: "4 min read",
    tags: ["Web3", "Blockchain"],
  },
  {
    id: 4,
    title: "Banks Need AI Engineers in Risk & Compliance",
    category: "Regulation",
    publishDate: "2026",
    summary:
      "Financial crime is becoming faster and complex. Banks now need AI engineers.",
    image: high_signal,
    readTime: "7 min read",
    tags: ["AI", "Regulation"],
  },
  {
    id: 5,
    title: "Case Study: Scaling AML Infrastructure",
    category: "Market",
    publishDate: "2026",
    summary:
      "A Series A fintech tripled transaction volume. See how we deployed specialists.",
    image: ai_tool,
    readTime: "8 min read",
    tags: ["Market", "Case Study"],
  },
  {
    id: 6,
    title: "Banks Are Quietly Building on Crypto",
    category: "Web3",
    publishDate: "2026",
    summary: "Major financial institutions are exploring blockchain rails.",
    image: defi,
    readTime: "5 min read",
    tags: ["Web3", "Finance"],
  },
  {
    id: 7,
    title: "AML Is Evolving — Are You?",
    category: "Compliance & Professional Development",
    publishDate: "2026",
    summary:
      "Compliance isn't shrinking. It's evolving. As crypto adoption grows and AI becomes embedded in financial crime systems, analysts must specialize.",
    image: evloving, // placeholder use kora hoyeche, proyojon moto change kore nio
    readTime: "6 min read",
    tags: ["Compliance", "AML", "Crypto"],
  },
  {
    id: 8,
    title: "Stablecoin Adoption: Opportunity vs Risk for Fintechs",
    category: "Stablecoins & Risk Management",
    publishDate: "2026",
    summary:
      "Stablecoins are no longer fringe crypto instruments. With trillions in transaction volume, they are functioning as digital settlement rails.",
    image: stable_coin,
    readTime: "8 min read",
    tags: ["Stablecoins", "Fintech", "Risk"],
  },
  {
    id: 9,
    title: "How AI Is Reshaping Transaction Monitoring Architecture",
    category: "AI & Financial Crime Prevention",
    publishDate: "2026",
    summary:
      "Transaction monitoring is evolving from static rule systems to AI-driven risk intelligence infrastructure capable of detecting complex patterns.",
    image: monitoring,
    readTime: "7 min read",
    tags: ["AI", "Architecture", "FinCrime"],
  },
  {
    id: 10,
    title: "Gold vs Bitcoin: Store of Value or Different Assets Entirely?",
    category: "Digital Assets & Macro Finance",
    publishDate: "2026",
    summary:
      "Gold and Bitcoin are often compared as alternative stores of value, but their economic roles and institutional paths remain fundamentally different.",
    image: gold_vs_bitcoin,
    readTime: "6 min read",
    tags: ["Bitcoin", "Gold", "Macro"],
  },
  {
    id: 11,
    title: "What Is Web3 — And What Does It Mean for Businesses?",
    category: "Web3 & Business Infrastructure",
    publishDate: "2026",
    summary:
      "Web3 represents a new digital infrastructure built on blockchain networks that enables programmable assets and digital ownership for businesses.",
    image: web3ki,
    readTime: "5 min read",
    tags: ["Web3", "Business", "Blockchain"],
  },
  {
    id: 12,
    title: "Web3 Operators. Not Just Engineers.",
    category: "Web3 Industry Strategy",
    publishDate: "2026",
    summary:
      "As Web3 matures, successful organisations are prioritising operational leadership and governance expertise alongside engineering talent.",
    image: in_hand_bit,
    readTime: "4 min read",
    tags: ["Web3", "Strategy", "Operations"],
  },
];

const CATEGORIES = ["All", "Market", "Hiring", "Regulation", "AI", "Web3"];

export default function InsightsPage() {

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/whitepaper.pdf"; // correct path
  link.download = "Aventra3-Whitepaper-2026.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights = useMemo(() => {
    return articles.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.summary.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory ||
        item.tags.includes(activeCategory);

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="bg-gradient-to-b from-[#EEF6FF] via-white to-white min-h-screen pt-40 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between mr-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="flex items-center gap-2 text-[#2F8BDD] text-[11px] font-extrabold mb-4 tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#2F8BDD]" />
              MARKET NOTES • HIRING SIGNALS • REGULATION • EXECUTION
            </div>

            <h1 className="text-[48px] md:text-[64px] font-bold text-[#05183D] mb-6 tracking-tight relative inline-block">
              Insights
              <span className="absolute -bottom-3 left-0 w-24 h-1 bg-[#2F8BDD] rounded" />
            </h1>

            <p className="max-w-2xl text-slate-500 text-lg leading-relaxed">
              A single place for market updates across AI, blockchain, DeFi and
              Web3 — plus the hiring signals that matter.
            </p>
          </motion.div>
          <a
            href="/whitepaper.pdf"
            download
            className="
    relative flex items-center justify-center gap-2 cursor-pointer
    h-12 px-6 w-fit /* 2. Logic: Fixed width bad diye content onujayi padding deya hoyeche */
    rounded-2xl
    font-semibold text-white text-lg
    bg-gradient-to-r from-[#6FDEF7] to-[#2F8BDD]
    overflow-hidden
    whitespace-nowrap /* 3. Logic: Text wrap bondho korar jonno */

    transition-all duration-300 ease-in-out
    hover:scale-105
    hover:shadow-[0_0_25px_rgba(47,139,221,0.6)]
    active:scale-95

    before:absolute before:inset-0
    before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
    before:translate-x-[-100%]
    hover:before:translate-x-[100%]
    before:transition-transform before:duration-700
  "
          >
            <FiDownload className="text-xl transition-transform duration-300 group-hover:translate-y-1" />
            <span>Download Our {new Date().getFullYear()} Whitepaper</span>
          </a>
        </div>

        {/* SEARCH */}
        <div className="space-y-10 mb-20">
          <div className="relative max-w-2xl">
            <Search
              className="absolute left-4 top-4 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search insights..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white focus:border-[#2F8BDD] outline-none text-lg shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#2F8BDD] text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredInsights.map((insight, idx) => (
              <InsightCard key={insight.id} {...insight} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
export const InsightCard = ({
  id,
  title,
  summary,
  publishDate,
  readTime,
  image,
  tags,
  index,
}: any) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="absolute top-4 right-4 flex gap-2">
          {tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-[11px] bg-white/90 backdrop-blur-sm rounded-md font-semibold text-[#05183D]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="text-xs text-slate-400 font-medium mb-2">
          {publishDate} • {readTime}
        </div>

        <h3 className="text-lg font-bold text-[#05183D] group-hover:text-[#2F8BDD] transition-colors">
          {title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mt-2">
          {summary}
        </p>

        {/* Read More Button */}
        <button
          onClick={() => router.push(`/Insights/details?id=${id}`)}
          className="mt-5 cursor-pointer w-fit text-sm font-semibold text-[#2F8BDD] border border-[#2F8BDD] px-4 py-2 rounded-lg hover:bg-[#2F8BDD] hover:text-white transition"
        >
          Read more
        </button>
      </div>
    </motion.div>
  );
};
