"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
  delay: number;
  index: number;
}

export const ClientFeatureCard = ({
  title,
  subtitle,
  image,
  delay,
  index,
}: FeatureCardProps) => {
  const route = useRouter()
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col bg-white rounded-[28px] p-5 pb-10 border border-slate-100 hover:border-[#2F8BDD]/30 transition-all duration-500 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)]"
    >
      {/* Card Number */}

      <div className="absolute top-6 right-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
        <span className="text-[110px] font-black select-none">
          0{index + 1}
        </span>
      </div>

      {/* Image */}

      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[20px] mb-8">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center grayscale group-hover:grayscale-0 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#05183D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>

      {/* Content */}

      <div className="px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-10 bg-[#2F8BDD] group-hover:w-16 transition-all duration-500"></div>

          <span className="text-[#2F8BDD] text-xs font-bold uppercase tracking-[0.2em]">
            Strategy
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-[#05183D] mb-4 leading-tight group-hover:text-[#2F8BDD] transition-colors">
          {title}
        </h3>

        <p className="text-slate-500 font-medium text-[16px] leading-relaxed">
          {subtitle}
        </p>

        {/* Read More */}

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
