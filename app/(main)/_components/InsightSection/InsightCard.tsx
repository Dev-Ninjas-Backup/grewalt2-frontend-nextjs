// "use client";
// import Image, { StaticImageData } from "next/image";

// interface InsightCardProps {
//   image: StaticImageData;
//   category: string;
//   date: string;
//   readTime: string;
//   title: string;
//   description: string;
//   index: number;
// }

// const InsightCard = ({
//   image,
//   category,
//   date,
//   readTime,
//   title,
//   description,
//   index,
// }: InsightCardProps) => {
//   return (
//     <div
//       // AOS attributes
//       data-aos="fade-up"
//       data-aos-delay={index * 150} // Index based delay
//       data-aos-duration="1000"
//       className="flex flex-col group cursor-pointer"
//     >
//       {/* Image Container */}
//       <div className="relative aspect-[16/10] w-full rounded-[14px] overflow-hidden mb-6">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         {/* Category Tags */}
//         <div className="absolute top-4 right-4 flex gap-2">
//           <span className="bg-white text-[#05183D] text-[12px] font-bold px-3 py-1 rounded-md">
//             {category}
//           </span>
//           <span className="bg-white text-[#05183D] text-[12px] font-bold px-3 py-1 rounded-md">
//             {category}
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="space-y-3">
//         <p className="text-white/60 text-[13px] font-medium">
//           {date} • {readTime}
//         </p>
//         <h3 className="font-bomstad text-[22px] md:text-[24px] font-bold text-white leading-tight group-hover:text-[#6FDEF7] transition-colors">
//           {title}
//         </h3>
//         <p className="text-slate-400 text-[15px] leading-relaxed line-clamp-3">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default InsightCard;
