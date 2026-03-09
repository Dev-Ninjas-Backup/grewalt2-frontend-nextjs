/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
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

const JobCard = ({
  id,
  title,
  location,
  description,
  type,
  index,
}: JobCardProps) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] flex flex-col h-full group transition-all"
    >
      <h3 className="text-[22px] font-bold text-[#05183D] mb-2 group-hover:text-[#2F8BDD] transition-colors">
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
        <span className="px-4 py-1.5 bg-slate-100 text-slate-600 text-[12px] font-bold rounded-lg uppercase tracking-wider">
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
};

export default JobCard;
