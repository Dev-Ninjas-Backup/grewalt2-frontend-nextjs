"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

// Assets
import logo from "@/public/images/logof.png";
import bgShape from "@/public/teamSection/Svg file 2.svg";

type FooterLink = {
  name: string;
  href: string;
};

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const footerLinks: Record<string, FooterLink[]> = {
    Company: [
      { name: "About", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Industries", href: "/services" },
      { name: "Team", href: "/" },
      { name: "Contact", href: "/contact" },
    ],
    Services: [
      { name: "Executive Search", href: "/services" },
      { name: "Technical Recruitment", href: "/services" },
      { name: "Talent Advisory", href: "/services" },
    ],
    Industries: [
      { name: "AI & Machine Learning", href: "/services" },
      { name: "Blockchain", href: "/services" },
      { name: "Web3 & DeFi", href: "/services" },
      { name: "Crypto", href: "/services" },
    ],
  };

  return (
    <footer className="bg-[#05183D] pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Right Side Background Shape - Exactly as Screenhost */}
      <div className="absolute bottom-0 right-0 opacity-90 pointer-events-none select-none z-0 translate-x-1/10 translate-y-1/4">
        <Image
          src={bgShape}
          alt="footer-bg-shape"
          width={800}
          height={800}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-24">
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={title} data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="font-bomstad text-[#2F8BDD] text-[18px] md:text-[20px] font-bold mb-8 uppercase tracking-wide">
                {title}
              </h3>
              <ul className="space-y-5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-[#6FDEF7] transition-all duration-300 text-[16px] font-normal"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section Divider */}
        <div className="w-full h-[1px] bg-slate-100/10 mb-12" />

        {/* Bottom Bar: Logo, Copyright, Policies */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={logo} alt="Aventra3 Logo" width={160} height={45} />
          </div>

          {/* Social Links (NEW ADD) */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/aventra3/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            >
              <Image src="/image/x.svg" alt="X" width={32} height={32} />
            </a>

            <a
              href="https://www.instagram.com/aventra3_/"
              target="_blank"
              rel="noopener noreferrer"
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

          {/* Copyright */}
          <p className="text-slate-400 text-[15px] font-light">
            © 2025 Aventra3. All rights reserved.
          </p>

          {/* Policies */}
          <div className="flex items-center gap-10">
            <Link
              href="/privacy-policy"
              className="text-slate-400 hover:text-white text-[15px] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-slate-400 hover:text-white text-[15px] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
