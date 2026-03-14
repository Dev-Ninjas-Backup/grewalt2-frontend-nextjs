"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import TeamCard from "./TeamCard";

import img4 from "@/public/newImg/img1.jpg";
import img1 from "@/public/newImg/img2.jpg";
import img3 from "@/public/newImg/img3.jpg";
import img2 from "@/public/newImg/img4.jpg";
import bgImg from "@/public/teamSection/Svg file 2.svg";

const TEAM_DATA = [
  {
    id: 1,
    name: "Terath Grewal",
    role: "Co-Founder / Managing Partner",
    image: img1,
    imageClassName: "!scale-130 object-top",
  },
  {
    id: 2,
    name: "Manj Singh",
    role: "Co-Founder, Network Strategy",
    image: img2,
  },
  {
    id: 3,
    name: "Zhang Wei",
    role: "Web3 Ecosystem Lead",
    image: img3,
  },
  {
    id: 4,
    name: "Sam Hirsch",
    role: "Blockchain Infrastructure Specialist",
    image: img4,
  },
];

const TeamSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-[#05183D] py-20 px-6 overflow-hidden relative">
      {/* Background Shape */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/10 opacity-90 pointer-events-none select-none z-0">
        <Image src={bgImg} alt="bg" width={800} height={800} priority />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div data-aos="fade-right" className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FDEF7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6FDEF7] shadow-[0_0_15px_#6FDEF7]"></span>
              </div>

              <p className="text-[#6FDEF7] text-[14px] font-medium uppercase tracking-wider">
                Leadership
              </p>
            </div>

            <h2 className="font-bomstad text-[42px] md:text-[50px] font-bold text-white">
              The Leadership Team
            </h2>
          </div>

          <div data-aos="fade-left" className="max-w-md">
            <p className="text-slate-300 text-[16px] mb-8 leading-relaxed">
              Operators, strategists, and talent specialists scaling AI, Web3,
              and decentralized innovation.
            </p>

            <button className="border border-[#6FDEF7]/30 cursor-pointer text-white px-8 py-3 rounded-xl hover:bg-[#6FDEF7] hover:text-[#05183D] transition-all duration-300 font-bold shadow-lg hover:shadow-[#6FDEF7]/20">
              Let&apos;s Collaborate
            </button>
          </div>
        </div>

        {/* Team Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_DATA.map((member, index) => (
            <TeamCard
              key={member.id}
              index={index}
              name={member.name}
              role={member.role}
              image={member.image}
              // imageClassName={member.imageClassName}
              isCEO={member.name === "Terath Grewal"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
