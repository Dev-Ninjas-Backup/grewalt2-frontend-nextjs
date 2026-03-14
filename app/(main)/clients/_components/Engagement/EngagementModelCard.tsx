"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Workflow, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  delay: number;
}

const iconMap = {
  "Talent Search": <Target className="w-8 h-8 text-[#2F8BDD]" />,
  "Embedded Hiring": <Workflow className="w-8 h-8 text-[#2F8BDD]" />,
  "Specialist Squads": <Rocket className="w-8 h-8 text-[#2F8BDD]" />,
};

export const EngagementModelCard = ({
  title,
  description,
  features,
  buttonText,
  delay,
}: ServiceCardProps) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-white rounded-[28px] p-8 border border-slate-100 hover:border-[#2F8BDD]/30 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] h-full"
    >
      {/* Top Icon */}
      <div className="mb-6 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-[#E6F0FF] transition-colors duration-500">
        {iconMap[title as keyof typeof iconMap] || (
          <Target className="w-8 h-8 text-[#2F8BDD]" />
        )}
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-[#05183D] mb-4 leading-tight group-hover:text-[#2F8BDD] transition-colors">
        {title}
      </h3>

      <p className="text-slate-500 text-[16px] leading-relaxed mb-6 min-h-[70px]">
        {description}
      </p>

      <div className="space-y-3 mb-8 flex-grow">
        {features.map((feat, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="mt-1.5 h-2 w-2 rounded-full bg-[#2F8BDD]" />
            <span className="text-slate-600 text-[15px] font-medium leading-snug">
              {feat}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => router.push("/contact")}
        className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-[#2F8BDD] text-white font-bold text-[15px] hover:bg-blue-600 shadow-lg shadow-[#2F8BDD]/20 transition-all duration-300"
      >
        <span>{buttonText}</span>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <ArrowRight className="w-4 h-4" />
        </div>
      </button>

      {/* Decorative card number */}
      <div className="absolute top-4 right-4 text-[60px] font-bold text-slate-50 opacity-0 group-hover:opacity-20 select-none pointer-events-none">
        0{Math.floor(delay * 10) + 1}
      </div>
    </motion.div>
  );
};
