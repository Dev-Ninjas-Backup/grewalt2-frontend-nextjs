"use client";

import Image, { StaticImageData } from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string | StaticImageData;
  index: number;
  isCEO?: boolean;
}

const TeamCard = ({ name, role, image, index, isCEO }: TeamMemberProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className={`
        relative overflow-hidden group transition-transform duration-500
        rounded-[18px] 
        ${isCEO ? "shadow-[0_30px_60px_rgba(111,222,247,0.4)] scale-105 lg:scale-110 ring-4 ring-sky-400 z-10" : "shadow-md"}
        ${isCEO ? "lg:aspect-[5/6]" : "aspect-[4/5]"}
      `}
    >
      {/* Image */}
      <Image
        src={image}
        alt={name}
        fill
        className={`
          object-cover transition-transform duration-700
        
          ${(index === 1 || index === 3)? "scale-110" : ""}
        `}
      />

      {/* CEO Halo Glow */}
      {isCEO && (
        <div className="absolute inset-0 rounded-[18px] bg-gradient-to-t from-sky-500/30 via-transparent to-transparent opacity-30 pointer-events-none animate-pulse" />
      )}

      {/* Text Overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,24,61,0) 40%, rgba(111,222,247,0.6) 85%, rgba(47,139,221,0.95) 100%)",
        }}
      >
        <h3
          className={`
            font-bomstad leading-tight text-white font-bold
            ${isCEO ? "text-[26px] md:text-[28px]" : "text-[24px]"}
          `}
        >
          {name}
        </h3>
        <p
          className={`
            mt-1 font-medium text-white/90
            ${isCEO ? "text-[16px]" : "text-[14px]"}
          `}
        >
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
