"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface EngagementCardProps {
  title: string;
  description: string;
  image: StaticImageData; // Changed to accept the imported image object
  isHighlighted?: boolean;
  delay?: number;
}

export const EngagementCard = ({
  title,
  description,
  image,
  isHighlighted,
  delay = 0,
}: EngagementCardProps) => {
          useEffect(() => {
            AOS.init({
              duration: 1000,
              once: false,
              mirror: true,
            });
          }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={` overflow-hidden flex flex-col h-full transition-all duration-300 bg-transparent`}
    >
      {/* Image Container */}
      <div className="relative h-56 md:h-64 w-full rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
          placeholder="blur"
        />
      </div>

      {/* Text Content */}
      <div className="p-8 flex flex-col gap-4">
        <h3
          className={`text-2xl font-bold tracking-tight text-white ${
            isHighlighted ? "" : "text-white"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-[16px] leading-relaxed font-medium text-white ${
            isHighlighted ? "" : ""
          }`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};
