"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import ContactFormCard from "../_components/contactUs/ContactFormCard";
import Image from "next/image";
import bgImage from "@/public/contact/bgOne.png";

const ContactPage = () => {
  // Fix: Access the .src property of the imported static image
  const bgStyle = {
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main className="min-h-screen w-full bg-white flex flex-col ">
      {/* 1. Independent Header Section with Background Image */}
      <section
        className="relative w-full pt-32 pb-48 px-6 md:px-12 overflow-hidden "
        style={bgStyle}
      >
        {/* Gradient Overlay: Dark Navy to semi-transparent to allow the SVG to show through */}
        <div className="absolute inset-0 h-[100%]  z-0 bg-gradient-to-b from-[#021335] via-[#021335]/10  to-white" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-sky-400" />
            <span className="text-sky-400 text-sm font-semibold tracking-wide uppercase">
              Talk to Aventra³
            </span>
          </div>
          <h1 className="text-white text-6xl md:text-8xl font-bold  mb-6">
            Contact
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Reach out for talent search, embedded hiring, specialist squads, AI
            systems consulting, or partner introductions.
          </p>
        </div>
      </section>

      {/* 2. Content Section: Sidebar Info + Form Card */}
      <section className="relative w-full px-6 md:px-12 pb-24 -mt-24 z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start justify-between">
          {/* Left Side: Contact Information Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col lg:sticky lg:top-24">
            <div className="space-y-8 mb-12">
              {/* Email */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#2F8BDD] blur-[15px] opacity-25 rounded-full group-hover:opacity-40 transition-opacity" />
                  <div className="relative w-12 h-12 rounded-full bg-[#E0F7FC] flex items-center justify-center text-[#2F8BDD] border border-white shadow-[0_4px_12px_rgba(47,139,221,0.15)] transition-transform group-hover:scale-110">
                    <Mail size={18} fill="currentColor" fillOpacity={0.2} />
                  </div>
                </div>
                <span className="text-[17px] font-medium text-slate-600 group-hover:text-[#2F8BDD] transition-colors">
                  info@aventra3.com
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#2F8BDD] blur-[15px] opacity-25 rounded-full group-hover:opacity-40 transition-opacity" />
                  <div className="relative w-12 h-12 rounded-full bg-[#E0F7FC] flex items-center justify-center text-[#2F8BDD] border border-white shadow-[0_4px_12px_rgba(47,139,221,0.15)] transition-transform group-hover:scale-110">
                    <Phone size={18} fill="currentColor" fillOpacity={0.2} />
                  </div>
                </div>
                <span className="text-[17px] font-medium text-slate-600 group-hover:text-[#2F8BDD] transition-colors">
                  +44 7784677243
                </span>
              </div>

              {/* Address */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#2F8BDD] blur-[15px] opacity-25 rounded-full group-hover:opacity-40 transition-opacity" />
                  <div className="relative w-12 h-12 rounded-full bg-[#E0F7FC] flex items-center justify-center text-[#2F8BDD] border border-white shadow-[0_4px_12px_rgba(47,139,221,0.15)] transition-transform group-hover:scale-110">
                    <MapPin size={18} fill="currentColor" fillOpacity={0.2} />
                  </div>
                </div>
                <span className="text-[17px] font-medium text-slate-600 group-hover:text-[#2F8BDD] transition-colors">
                  Studio 9 50-54 St. Pauls Square, Birmingham, United Kingdom,
                  B3 1QS
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 ml-1">
              <a
                href="https://www.linkedin.com/company/aventra3/?viewAsMember=true"
                className="hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src="/image/linkedin.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://x.com/aventra3_"
                className="hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src="/image/x.svg"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://www.instagram.com/aventra3_/"
                className="hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src="/image/instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>

          {/* Right Side: The Form Card */}
          <div className="w-full lg:w-2/3 flex justify-center lg:justify-end">
            <ContactFormCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
