"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface PartnerCardProps {
  title: string;
  description: string;
  image?: StaticImageData;
  tag?: string;
  delay?: number;
  offset?: boolean; // optional vertical offset for asymmetry
}

export const PartnerCard = ({
  title,
  description,
  image,
  tag,
  delay = 0,
  offset = false,
}: PartnerCardProps) => {
  const route = useRouter()
  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={delay}
      whileHover={{ y: -10 }}
      className={`group relative flex flex-col bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-md transition-shadow duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] ${
        offset ? "md:mt-12" : ""
      }`}
    >
      {/* Image Container */}
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05183D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {tag && (
            <span className="absolute top-6 right-6 bg-white/20 backdrop-blur-xl border border-white/30 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-2xl">
              {tag}
            </span>
          )}
        </div>
      )}

      {/* Text Content */}
      <div className="p-10">
        <h3 className="text-2xl md:text-3xl font-bold text-[#05183D] mb-4 tracking-tight leading-tight">
          {title}
        </h3>
        <p className="text-slate-500 text-[16px] leading-relaxed font-medium">
          {description}
        </p>

        {/* Hover CTA */}
        <button
          onClick={() => route.push("Insights")}
          className="mt-8  cursor-pointer flex items-center gap-2 text-sky-500 font-bold text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300"
        >
          <span>Learn more</span>
          <span>→</span>
        </button>
      </div>
    </motion.div>
  );
};
