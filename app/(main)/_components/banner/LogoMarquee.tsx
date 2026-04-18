"use client";
import logo1 from "@/public/brandLogo/Company logo (1).svg"
import logo2 from "@/public/brandLogo/Company logo (2).svg"
import logo3 from "@/public/brandLogo/Company logo (3).svg"
import logo4 from "@/public/brandLogo/Company logo (4).svg"
import logo5 from "@/public/brandLogo/Company logo (5).svg"
import logo6 from "@/public/brandLogo/Company logo (6).svg"
import logo7 from "@/public/brandLogo/Company logo (7).svg"
import logo8 from "@/public/brandLogo/Company logo (8).svg"
import logo9 from "@/public/brandLogo/Company logo.svg"
import Image from "next/image";
const LogoMarquee = () => {
  const logos = [logo1, logo2 , logo3 , logo4 , logo5 , logo6 , logo7 , logo8 , logo9];

  return (
    <div className="w-full bg-[#05183D] py-10 mt-20 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-slate-400 text-sm font-medium tracking-wide">
          Trusted by 100+ Companies Worldwide
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {logos.map((l, i) => (
            <div
              key={i}
              className="mx-12 flex items-center justify-center transition-opacity duration-300"
            >
              <div className="h-8 w-32  rounded-md flex items-center justify-center text-white font-bold tracking-widest text-xl italic">
                <Image src={l} alt="logo" height={250} width={350} />
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate for Seamless Loop */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap items-center">
          {logos.map((l, i) => (
            <div
              key={i}
              className="mx-12 flex items-center justify-center transition-opacity duration-300"
            >
              <div className="h-8 w-32  rounded-md flex items-center justify-center text-white font-bold tracking-widest text-xl italic">
                <Image src={l} alt="logo" height={250} width={350} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
