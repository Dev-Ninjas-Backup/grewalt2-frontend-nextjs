"use client";
// import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SolutionCardProps {
  title: string;
  description: string;
  points: string[];
  icon: string; // Image path
  btnText: string;
  index: number
  delay: number;
}

const SolutionCard = ({
  title,
  description,
  points,
  icon,
  btnText,
  delay,
  index,
}: SolutionCardProps) => {
  const route = useRouter()
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className={`group relative bg-white p-6   ${index == 0 ? "border-t-2  border-l-2 rounded-tl-lg" : index == 1 ? " border-b-2 border-r-2 border-l-2" : "border-t-2  border-r-2 rounded-tr-lg"} border-slate-100  transition-all duration-500 flex flex-col h-full overflow-hidden`}
    >
      {/* Background Subtle Gradient Glow */}
      <div
        className={`absolute   w-60 h-48 bg-[#6FDEF7]/30 blur-[80px] rounded-full group-hover:bg-[#6FDEF7]/60 transition-all duration-700 pointer-events-none ${index == 1 ? "-bottom-24 hover:-bottom-10 -right-[10%]  hover:-right-[10%]" : "-top-24 hover:-top-10 right-[20%]  hover:right-[20%]"}`}
      />

      {/* Icon Section (Image based) */}
      <div className="mb-8 w-16 h-16 rounded-lg flex items-center justify-center p-3.5 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Content Area */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-[#05183D] mb-4 group-hover:text-[#2F8BDD] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-500 text-[16px] leading-relaxed mb-8 font-medium">
          {description}
        </p>

        {/* Feature Points */}
        <ul className="space-y-4 mb-10">
          {points.map((point, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-slate-600 font-medium group/item"
            >
              <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2F8BDD"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover/item:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <span className="text-[15px]">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => route.push(`${index === 0 ? "/jobs" : index ===  1? "contact" : "clients"}`)}
        className="w-fit flex items-center gap-2 cursor-pointer px-6 py-3.5 rounded-lg border border-[#2F8BDD]/20 text-[#2F8BDD] font-bold bg-[#F0F9FF] hover:bg-[#2F8BDD] hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#2F8BDD]/20"
      >
        {btnText}
        <span className="text-xl">→</span>
      </button>
    </div>
  );
};

export default SolutionCard;
