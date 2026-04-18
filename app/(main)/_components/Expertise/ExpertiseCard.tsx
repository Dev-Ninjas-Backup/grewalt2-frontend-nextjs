"use client";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  video: string;
  delay: number;
}

const ExpertiseCard = ({
  title,
  description,
  icon,
  video,
  delay,
}: CardProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group relative bg-white rounded-lg p-8 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(111,222,247,0.12)] transition-all duration-500 hover:-translate-y-3 overflow-hidden flex flex-col h-full"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 hover:-top-10 right-[20%]  hover:right-[20%] w-60 h-48 bg-[#6FDEF7]/30 blur-[80px] rounded-full group-hover:bg-[#6FDEF7]/60 transition-all duration-700" />

      {/* Icon Area */}
      <div className="mb-8 w-14 h-14   flex items-center justify-center  group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 overflow-hidden">
        <div className="relative z-10 w-8 h-8">{icon}</div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-[#05183D] mb-4 group-hover:text-[#2F8BDD] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-500 text-[16px] leading-relaxed mb-8 font-medium">
          {description}
        </p>
      </div>

      {/* Visual Video Area */}
      <div className="relative h-[220px] w-full rounded-lg overflow-hidden mt-auto bg-slate-100">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {/* Dark Gradient Overlay on Video */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default ExpertiseCard;
