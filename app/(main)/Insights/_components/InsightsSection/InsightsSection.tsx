/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Import images (ensure these paths exist in your public/insights folder)
import web3Img from "@/public/insights/web3.jpg";
import ai_team from "@/public/insights/ai-team.png";
import ai_tool from "@/public/insights/ai-tool.png";
import defi from "@/public/insights/defi.png";
import high_signal from "@/public/insights/high-signal.png";
import shifting from "@/public/insights/shifting.png";

/**
 * 1. Data Integration
 * Articles array map kore UI-er jonno data structure ready kora hoyeche.
 */
const articles = [
  {
    id: 1,
    title:
      "Why Your Company Can't Hire AI & Blockchain Talent (And What Actually Works)",
    category: "Hiring",
    publishDate: "2026",
    summary:
      "72% of employers report difficulty filling roles, with AI expertise now the #1 hardest skill to find globally.",
    image: shifting, // mapped image
    readTime: "6 min read",
    tags: ["Hiring", "Market"],
  },
  {
    id: 2,
    title: "Why Firms Must Build AI Teams in 2026 — And Why Waiting Is Risky",
    category: "AI",
    publishDate: "2026",
    summary:
      "AI is no longer experimental technology. It is becoming core business infrastructure. Waiting is no longer an option.",
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
      "Web3 is shifting toward infrastructure, compliance, and real-world use cases. Institutional participation is key.",
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
      "Financial crime is becoming faster and complex. Banks now need AI engineers embedded within risk teams.",
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
      "A Series A fintech tripled transaction volume. See how we deployed a specialist squad to fix their AML stack.",
    image: ai_tool,
    readTime: "8 min read",
    tags: ["Market", "Case Study"],
  },
  {
    id: 6,
    title: "Banks Are Quietly Building on Crypto",
    category: "Web3",
    publishDate: "2026",
    summary:
      "Major financial institutions are exploring how blockchain rails can improve settlement and liquidity.",
    image: defi,
    readTime: "5 min read",
    tags: ["Web3", "Finance"],
  },
];

const CATEGORIES = ["All", "Market", "Hiring", "Regulation", "AI", "Web3"];

/**
 * 2. Main Page Component
 */
export default function InsightsPage() {
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
    <div className="bg-[#FBFDFF] min-h-screen py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 text-[#2F8BDD] text-[11px] font-extrabold mb-4 tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#2F8BDD]"></span>
          MARKET NOTES • HIRING SIGNALS • REGULATION • EXECUTION
        </div>
        <h1 className="text-[48px] md:text-[64px] font-bold text-[#05183D] mb-6 tracking-tight">
          Insights
        </h1>
        <p className="max-w-2xl text-slate-500 text-lg font-sans leading-relaxed">
          A single place for market updates across AI, blockchain, DeFi and Web3
          — plus the hiring signals that matter.
        </p>
      </motion.div>

      {/* Search & Filter Bar */}
      <div className="space-y-10 mb-16">
        <div className="relative group">
          <Search
            className="absolute left-0 top-5 text-slate-400 group-focus-within:text-[#2F8BDD] transition-colors"
            size={22}
          />
          <input
            type="text"
            placeholder="Search insights..."
            className="w-full pl-10 pb-4 bg-transparent border-b border-slate-200 outline-none text-xl font-sans placeholder:text-slate-300 focus:border-[#2F8BDD] transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg text-sm cursor-pointer font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#2F8BDD] text-white shadow-lg shadow-blue-200"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
      >
        <AnimatePresence mode="popLayout">
          {filteredInsights.map((insight, idx) => (
            <InsightCard
              key={insight.id}
              id={insight.id}
              title={insight.title}
              description={insight.summary}
              date={insight.publishDate}
              readTime={insight.readTime}
              image={insight.image}
              tags={insight.tags}
              index={idx}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/**
 * 3. InsightCard Component
 */
const InsightCard = ({
  id,
  title,
  description,
  date,
  readTime,
  image,
  tags,
  index,
}: any) => {
  const router = useRouter();

  return (
    <motion.div
      onClick={() => router.push(`/Insights/details?id=${id}`)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="flex flex-col group cursor-pointer"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-slate-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[11px] font-bold text-[#05183D] rounded-md uppercase tracking-tight"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="inline-block px-2 py-0.5 bg-slate-100 rounded text-[11px] font-semibold text-slate-500">
          {date} • {readTime}
        </div>
        <h3 className="text-[20px] font-bold text-[#05183D] leading-tight group-hover:text-[#2F8BDD] transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-[14px] leading-relaxed line-clamp-3 font-sans">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
