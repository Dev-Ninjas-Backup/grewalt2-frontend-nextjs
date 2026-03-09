// "use client";
// import React, { useState, useMemo } from "react";
// import { Search } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image, { StaticImageData } from "next/image";
// import { useRouter } from "next/navigation";

// // Import images (ensure these paths exist in your public/insights folder)
// import web3Img from "@/public/insights/web3.jpg";
// import ai_team from "@/public/insights/ai-team.png";
// import ai_tool from "@/public/insights/ai-tool.png";
// import defi from "@/public/insights/defi.png";
// import high_signal from "@/public/insights/high-signal.png";
// import shifting from "@/public/insights/shifting.png";

// const InsightCard = ({
//   id,
//   title,
//   description,
//   date,
//   readTime,
//   image,
//   tags,
//   index,
// }: any) => {
//   const router = useRouter();

//   return (
//     <motion.div
//       onClick={() => router.push(`/Insights/details?id=${id}`)}
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
//       className="flex flex-col group cursor-pointer"
//     >
//       <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-slate-200">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="absolute top-4 right-4 flex gap-2">
//           {tags.map((tag: string) => (
//             <span
//               key={tag}
//               className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[11px] font-bold text-[#05183D] rounded-md uppercase tracking-tight"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="space-y-3">
//         <div className="inline-block px-2 py-0.5 bg-slate-100 rounded text-[11px] font-semibold text-slate-500">
//           {date} • {readTime}
//         </div>
//         <h3 className="text-[20px] font-bold text-[#05183D] leading-tight group-hover:text-[#2F8BDD] transition-colors">
//           {title}
//         </h3>
//         <p className="text-slate-500 text-[14px] leading-relaxed line-clamp-3 font-sans">
//           {description}
//         </p>
//       </div>
//     </motion.div>
//   );
// };
