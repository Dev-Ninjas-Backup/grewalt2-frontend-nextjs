"use client";

import { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import JobCard from "./JobCard";
import { JOBS_DATA } from "../../details/_components/data";
// import { jobs as JOBS_DATA } from "./data"; // Data file theke import

const CATEGORIES = [
  "All Categories",
  "Compliance",
  "Engineering",
  "Leadership",
];
const TYPES = ["All Types", "Hybrid", "On-Site", "Fully Remote"];

export default function LiveJobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedType, setSearchType] = useState("All Types");

  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase());

      // Category mapping logic (যেহেতু data-তে সরাসরি category নেই, title বা id থেকে infer করা)
      const jobCategory =
        job.id.includes("engineer") || job.id.includes("developer")
          ? "Engineering"
          : job.id.includes("head")
            ? "Leadership"
            : "Compliance";

      const matchesCategory =
        selectedCategory === "All Categories" ||
        jobCategory === selectedCategory;
      const matchesType =
        selectedType === "All Types" || job.workStyle === selectedType;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedType]);

  return (
    <main className="min-h-screen bg-[#F9FAFB] pt-32 pb-32 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-[80px] font-bold text-[#05183D] mb-8 leading-none">
            Live Jobs
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            These are roles we&apos;re actively working on across AI, Web3,
            crypto, DeFi and regulated fintech.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="space-y-10 mb-20">
          <div className="relative group max-w-5xl">
            <Search
              className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#2F8BDD] transition-colors"
              size={24}
            />
            <input
              type="text"
              placeholder="Search by title, company, keyword..."
              className="w-full pl-10 pr-4 py-5 bg-transparent border-b border-slate-200 focus:border-[#2F8BDD] focus:outline-none transition-all text-slate-700 placeholder:text-slate-300 text-lg font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-12 items-center">
            <div className="relative min-w-[160px]">
              <select
                className="w-full appearance-none bg-transparent pr-8 py-2 text-slate-700 font-bold focus:outline-none cursor-pointer border-b border-slate-200"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                size={16}
              />
            </div>

            <div className="relative min-w-[160px]">
              <select
                className="w-full appearance-none bg-transparent pr-8 py-2 text-slate-700 font-bold focus:outline-none cursor-pointer border-b border-slate-200"
                onChange={(e) => setSearchType(e.target.value)}
              >
                {TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                size={16}
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <p className="text-[#05183D] font-bold text-xl tracking-tight">
            {filteredJobs.length} roles available
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, idx) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                location={job.location}
                description={job.description}
                type={job.workStyle}
                index={idx}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
