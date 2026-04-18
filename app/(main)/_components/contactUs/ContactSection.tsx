import Image from "next/image";
import ContactFormCard from "./ContactFormCard";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-[#FBFDFF] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Side Content */}
        <div className="lg:w-[42%] mt-6">
          {/* Pulsing Badge */}
          <div className="flex items-center gap-3 mb-5">
            <div className="relative flex h-2.5 w-2.5">
              {/* Jol-jol kora animation (Ping effect) */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FDEF7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6FDEF7]"></span>
            </div>
            <span className="text-[12px] uppercase tracking-[0.2em] font-black text-slate-400">
              Contact us
            </span>
          </div>

          <h1 className="text-[40px] md:text-[54px] font-bold text-[#05183D] leading-[1.1] mb-12 tracking-tight">
            Start Your <span className="text-[#2F8BDD]">Talent Strategy</span>
          </h1>

          {/* Contact Info List - Figma Accurate Glow */}
          <div className="space-y-8 mb-16">
            <div className="flex items-center gap-5 group">
              <div className="relative">
                {/* Soft blue glow background behind icon */}
                <div className="absolute inset-0 bg-[#2F8BDD] blur-[15px] opacity-25 rounded-full group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-12 h-12 rounded-full bg-[#E0F7FC] flex items-center justify-center text-[#2F8BDD] border border-white/60 shadow-[0_4px_12px_rgba(47,139,221,0.15)]">
                  <Mail size={18} fill="currentColor" fillOpacity={0.2} />
                </div>
              </div>
              <span className="text-[17px] font-medium text-slate-600 group-hover:text-[#2F8BDD] transition-colors">
                info@aventra3.com
              </span>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#2F8BDD] blur-[15px] opacity-25 rounded-full group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-12 h-12 rounded-full bg-[#E0F7FC] flex items-center justify-center text-[#2F8BDD] border border-white/60 shadow-[0_4px_12px_rgba(47,139,221,0.15)]">
                  <Phone size={18} fill="currentColor" fillOpacity={0.2} />
                </div>
              </div>
              <span className="text-[17px] font-medium text-slate-600 group-hover:text-[#2F8BDD] transition-colors">
                +44 7784677243
              </span>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#2F8BDD] blur-[15px] opacity-25 rounded-full group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-12 h-12 rounded-full bg-[#E0F7FC] flex items-center justify-center text-[#2F8BDD] border border-white/60 shadow-[0_4px_12px_rgba(47,139,221,0.15)]">
                  <MapPin size={18} fill="currentColor" fillOpacity={0.2} />
                </div>
              </div>
              <span className="text-[17px] font-medium text-slate-600 group-hover:text-[#2F8BDD] transition-colors">
                Studio 9 50-54 St. Pauls Square, Birmingham, United Kingdom, B3
                1QS
              </span>
            </div>
          </div>

          {/* Social Icons - Balanced Figma Layout */}
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
              <Image src="/image/x.svg" alt="Facebook" width={32} height={32} />
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

        {/* Right Side: Reusable Form Card */}
        <div className="lg:w-[58%] w-full flex justify-center lg:justify-end">
          <ContactFormCard />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
