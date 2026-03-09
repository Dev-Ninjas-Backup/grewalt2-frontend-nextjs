// "use client";

// import React from "react";


// const InsightDetailsContent = () => {
//   const { meta, title, intro, sections, whatActuallyWorks, bottomLine, cta } =
//     insightDetailsData;

//   return (
//     <section className="w-full bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 pb-12">
//         {/* Meta */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex gap-2">
//             <span className="text-xs font-medium text-slate-500 border border-slate-200 px-2 py-1 rounded-full">
//               {meta.category}
//             </span>
//             <span className="text-xs font-medium text-slate-500 border border-slate-200 px-2 py-1 rounded-full">
//               {meta.category}
//             </span>
//           </div>
//           <span className="text-xs text-slate-500">{meta.readTime}</span>
//         </div>

//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight mb-8">
//           {title}
//         </h1>

//         {/* Intro */}
//         <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-16">
//           {intro.map((line, i) => (
//             <p key={i}>{line}</p>
//           ))}
//         </div>

//         {/* Sections */}
//         <div className="space-y-16">
//           {sections.map((section) => (
//             <div key={section.id}>
//               <h2 className="text-2xl font-semibold text-slate-900 mb-4">
//                 {section.id}. {section.title}
//               </h2>

//               {section.subtitle && (
//                 <p className="text-slate-600 mb-3">{section.subtitle}</p>
//               )}

//               {section.bullets && (
//                 <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-4">
//                   {section.bullets.map((bullet, i) => (
//                     <li key={i}>{bullet}</li>
//                   ))}
//                 </ul>
//               )}

//               {section.content && (
//                 <div className="space-y-3 text-slate-600 leading-relaxed">
//                   {section.content.map((line, i) => (
//                     <p key={i}>{line}</p>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* What Actually Works */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-semibold text-slate-900 mb-4">
//             {whatActuallyWorks.title}
//           </h2>
//           <p className="text-slate-600 mb-6">{whatActuallyWorks.intro}</p>

//           <div className="space-y-4 text-slate-600">
//             {whatActuallyWorks.points.map((point, i) => (
//               <div key={i}>
//                 <p>
//                   <span className="font-medium text-slate-900">
//                     {i + 1}. {point.title}
//                   </span>
//                   <br />
//                   {point.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Line */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-semibold text-slate-900 mb-4">
//             {bottomLine.title}
//           </h2>
//           <p className="text-slate-600 mb-4">{bottomLine.intro}</p>

//           <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-4">
//             {bottomLine.bullets.map((bullet, i) => (
//               <li key={i}>{bullet}</li>
//             ))}
//           </ul>

//           <p className="text-slate-600">{bottomLine.closing}</p>
//         </div>

//         {/* CTA */}
//         <div className="mt-20">
//           <h2 className="text-2xl font-semibold text-slate-900 mb-4">
//             {cta.title}
//           </h2>

//           <div className="space-y-3 text-slate-600">
//             {cta.content.map((line, i) => (
//               <p key={i}>{line}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InsightDetailsContent;
