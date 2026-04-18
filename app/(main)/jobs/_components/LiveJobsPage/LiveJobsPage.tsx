"use client";

import { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import JobCard from "./JobCard";
import { JOBS_DATA } from "../../details/_components/data";

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
  const [selectedType, setSelectedType] = useState("All Types");

  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase());

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
    <main className="min-h-screen bg-gradient-to-b from-[#EEF6FF] via-white to-white pt-32 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-[80px] font-bold text-[#05183D] relative inline-block">
            Live Jobs
            <span className="absolute -bottom-3 left-0 w-28 h-1 bg-[#2F8BDD] rounded"></span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed font-medium mt-8">
            These are roles we&apos;re actively working on across AI, Web3, crypto,
            DeFi and regulated fintech.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="space-y-10 mb-20">
          {/* Search */}
          <div className="relative group max-w-5xl">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={22}
            />

            <input
              type="text"
              placeholder="Search by title, company, keyword..."
              className="w-full pl-12 pr-4 py-5 bg-white rounded-xl border border-slate-200 focus:border-[#2F8BDD] focus:outline-none transition-all text-slate-700 placeholder:text-slate-400 text-lg shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter dropdowns */}
          <div className="flex flex-wrap gap-6 items-center">
            {/* Category */}
            <div className="relative">
              <select
                className="appearance-none bg-[#EEF6FF] px-5 py-3 rounded-lg text-[#05183D] font-semibold focus:outline-none cursor-pointer"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                size={16}
              />
            </div>

            {/* Type */}
            <div className="relative">
              <select
                className="appearance-none bg-[#EEF6FF] px-5 py-3 rounded-lg text-[#05183D] font-semibold focus:outline-none cursor-pointer"
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                size={16}
              />
            </div>
          </div>
        </div>

        {/* Role count */}
        <div className="mb-16">
          <p className="inline-block bg-[#EEF6FF] text-[#2F8BDD] px-5 py-2 rounded-lg font-bold text-lg">
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
