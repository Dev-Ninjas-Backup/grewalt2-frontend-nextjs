"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Users, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

interface SupportCardProps {
  icon: "zap" | "users" | "sparkles";
  title: string;
  description: string;
  buttonText: string;
  delay: number;
}

const icons = {
  zap: <Zap className="w-10 h-10 text-sky-500 fill-sky-500/20" />,
  users: <Users className="w-10 h-10 text-sky-500 fill-sky-500/20" />,
  sparkles: <Sparkles className="w-10 h-10 text-sky-500 fill-sky-500/20" />,
};

export const SupportCard = ({
  icon,
  title,
  description,
  buttonText,
  delay,
}: SupportCardProps) => {
  const route = useRouter();

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group relative flex flex-col items-center text-center px-10 py-16 border-slate-200 transition-all duration-300 hover:bg-slate-50/50 
      md:border-r last:md:border-r-0 border-b last:border-b-0 md:border-b-0 h-full"
    >
      {/* Decorative Background Element for Proportion */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-sky-100/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative mb-10 p-5 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] group-hover:shadow-sky-200/40 group-hover:-translate-y-2 transition-all duration-300">
        {icons[icon]}
      </div>

      <h3 className="text-[26px] font-bold text-[#05183D] mb-5 tracking-tight leading-tight">
        {title}
      </h3>

      <p className="text-slate-500 text-[16px] leading-[1.6] mb-12 flex-grow max-w-[300px]">
        {description}
      </p>

      <button
        onClick={() => route.push("/jobs")}
        className="flex cursor-pointer items-center gap-3 px-8 py-3.5 rounded-full border border-slate-200 bg-white text-[#05183D] font-bold text-sm shadow-sm hover:border-sky-400 hover:shadow-md transition-all group/btn"
      >
        {buttonText}
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
      </button>
    </div>
  );
};
