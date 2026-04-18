/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface JobCardProps {
  id: string;
  title: string;
  location: string;
  description: string;
  type: any;
  index: number;
}

export default function JobCard({
  id,
  title,
  location,
  description,
  type,
  index,
}: JobCardProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.1,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(47,139,221,0.2)",
      }}
      className="relative bg-white p-8 rounded-2xl border border-slate-100 flex flex-col h-full transition-all"
    >
      {/* top gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6FDEF7] to-[#2F8BDD] rounded-t-2xl"></div>

      <h3 className="text-[22px] font-bold text-[#05183D] mb-2 hover:text-[#2F8BDD] transition-colors">
        {title}
      </h3>

      <div className="flex items-center gap-2 text-slate-400 text-sm mb-5 font-medium">
        <MapPin size={16} className="text-[#2F8BDD]" />
        <span>{location}</span>
      </div>

      <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-grow line-clamp-3">
        {description}
      </p>

      <div className="flex justify-between items-center mt-auto">
        <span className="px-4 py-1.5 bg-[#EEF6FF] text-[#2F8BDD] text-[12px] font-bold rounded-lg uppercase tracking-wider">
          {type}
        </span>

        <button
          onClick={() => router.push(`/jobs/details?id=${id}`)}
          className="px-6 bg-gradient-to-r from-[#6FDEF7] to-[#2F8BDD] text-white py-2 rounded-lg font-bold text-sm hover:shadow-lg transition-all"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
