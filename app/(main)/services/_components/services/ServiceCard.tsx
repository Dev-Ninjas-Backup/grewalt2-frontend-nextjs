/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  delay: number;
  index: number
}

export const ServiceCard = ({
  title,
  description,
  features,
  buttonText,
  delay,
  index,
}: ServiceCardProps) => {
  const route = useRouter();
  // Container for the list to control the staggering of children
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Gap between each point's animation
        delayChildren: delay + 0.4, // Starts after the card itself lands
      },
    },
  };

  // Individual point animation (Left to Right)
  const itemVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="flex flex-col"
    >
      <h3 className="text-[22px] md:text-[24px] font-bold text-[#0F172A] mb-4">
        {title}
      </h3>
      <p className="text-[#475569] text-[15px] md:text-[16px] leading-relaxed mb-8 min-h-[60px]">
        {description}
      </p>

      {/* Feature List with sliding points */}
      <motion.ul
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-5 mb-10 flex-grow"
      >
        {features.map((feature, index) => (
          <motion.li
            key={index}
            variants={itemVariants as any}
            className="flex items-start gap-3 group"
          >
            <ArrowRight className="w-5 h-5 text-[#3B82F6] mt-0.5 shrink-0 transition-transform group-hover:translate-x-1" />
            <span className="text-[#475569] text-[15px] leading-snug">
              {feature}
            </span>
          </motion.li>
        ))}
      </motion.ul>

      <button
        onClick={() => route.push(`${index === 0 ? "contact" : index === 1 ? "contact" : "clients"}`)}
        className="inline-flex cursor-pointer items-center justify-center gap-2 w-fit px-8 py-3 border border-[#CBD5E1] rounded-lg text-[#3B82F6] font-semibold text-[15px] hover:bg-slate-50 transition-all active:scale-95 group"
      >
        {buttonText}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
};
