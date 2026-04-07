"use client";
import { useEffect } from "react"; // useEffect আনকমেন্ট করা হলো
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AOS from "aos"; // AOS ইমপোর্ট
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import BackgroundGrid from "./BackgroundGrid";
import googleImg from "@/public/images/google.svg";
import indedImg from "@/public/images/inded.svg";
import dribbleImg from "@/public/images/dribble.svg";
import linkedinImg from "@/public/images/linkedin.svg";
import peopleOne from "@/public/images/p/p1.jpg";
import peopleTwo from "@/public/images/p/p2.jpg";
import peopleThree from "@/public/images/p/p3.jpg";
import peopleFour from "@/public/images/p/p4.jpg";
import peopleFive from "@/public/images/p/p5.jpg";
import LogoMarquee from "./LogoMarquee";
import { useRouter } from "next/navigation";

const HomeBanner = () => {
  const route = useRouter()
  // AOS সেটিংস আপডেট করা হলো
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // এটি পুরো পেজের জন্য রি-অ্যানিমেশন চালু রাখবে
      easing: "ease-out-cubic",
      mirror: true,
    });
  }, []);

  const floatingIcons = [
    { src: googleImg, pos: "top-[15%] left-[10%]", speed: "7s", alt: "Google" },
    {
      src: linkedinImg,
      pos: "top-[20%] right-[12%]",
      speed: "7s",
      alt: "LinkedIn",
    },
    {
      src: dribbleImg,
      pos: "bottom-[25%] left-[12%]",
      speed: "7s",
      alt: "Dribbble",
    },
    {
      src: indedImg,
      pos: "bottom-[35%] right-[8%]",
      speed: "7s",
      alt: "Indeed",
    },
  ];

  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center pt-24 overflow-hidden bg-[#FBFDFF]">
      <BackgroundGrid />

      {/* Floating Icons */}
      {floatingIcons.map((icon, idx) => (
        <div
          key={idx}
          className={`absolute ${icon.pos} hidden lg:flex w-14 h-14 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.04)] items-center justify-center p-3.5 border border-white/50 backdrop-blur-sm transition-transform duration-500 hover:scale-110 z-10`}
          style={{
            animation: `float ${icon.speed} ease-in-out infinite`,
            animationDelay: `${idx * 0.7}s`,
          }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={42}
            height={42}
            className="drop-shadow-sm scale-170"
          />
        </div>
      ))}

      <div className="relative z-20 max-w-6xl w-full text-center px-6 pointer-events-none">
        {/* Badge */}
        <div
          data-aos="zoom-in"
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm mb-12 pointer-events-auto hover:border-[#6FDEF7] transition-colors cursor-default"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FDEF7] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6FDEF7] shadow-[0_0_12px_#6FDEF7]"></span>
          </div>
          <span className="text-[13px] font-semibold text-slate-400">
            The Only Firm at the Intersection
          </span>
        </div>

        {/* Title - */}
        <h1
          data-aos="fade-up"
          className="text-6xl md:text-[80px] font-bold text-[#05183D]  mb-8  pointer-events-auto"
          style={{ fontFamily: "var(--font-bomstad), sans-serif" }}
        >
          Building the Teams That
          <br />
          Build the Future
        </h1>

        {/* Subtext - */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-slate-500 text-lg md:text-[22px] max-w-3xl mx-auto mb-14 leading-relaxed font-medium pointer-events-auto"
        >
          The only recruitment and advisory firm that speaks AI, blockchain,
          Crypto and web3 fluently. Pre-vetted talent that ships from day one
        </p>

        {/* CTAs */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 pointer-events-auto"
        >
          <motion.button
            onClick={() => route.push("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7] text-white px-10 py-5 rounded-2xl font-bold shadow-[0_15px_30px_-5px_rgba(47,139,221,0.4)] cursor-pointer overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              Hire Specialized Talent{" "}
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
                strokeWidth={3}
              />
            </span>
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </motion.button>
          <button
            onClick={() => route.push("jobs")}
            className="px-12 py-5 rounded-2xl border-2 border-slate-100 text-[#2F8BDD] font-bold hover:bg-white hover:border-[#2F8BDD]/20 transition-all duration-300 bg-white/30 backdrop-blur-md cursor-pointer"
          >
            Explore Opportunities
          </button>
        </div>

        {/* Bottom Section - People Avatars (Fix করা হয়েছে) */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-once="true" // শুধুমাত্র এই সেকশনটির জন্য একবার অ্যানিমেশন হবে
          className="md:absolute md:bottom-[-30px] md:right-0 flex flex-col items-start gap-4 text-left max-w-[300px] mx-auto md:mx-0 pointer-events-auto group"
        >
          <div className="flex -space-x-3">
            {[peopleOne, peopleTwo, peopleThree, peopleFour, peopleFive].map(
              (img, i) => (
                <div
                  key={i}
                  className="relative w-11 h-11 rounded-full border-[3px] border-white bg-slate-100 shadow-md overflow-hidden group-hover:translate-y-[-8px] transition-transform duration-300"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <Image
                    src={img}
                    alt={`Person ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ),
            )}
          </div>

          <p className="text-[14px] leading-snug text-slate-400 font-semibold">
            We work toward{" "}
            <span className="text-[#2F8BDD] border-b-2 border-[#2F8BDD]/20 hover:border-[#2F8BDD] transition-colors cursor-pointer">
              ensuring a life
            </span>{" "}
            free from inequality
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full">
        <LogoMarquee />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(10px, -20px);
          }
          66% {
            transform: translate(-10px, -10px);
          }
        }
      `}</style>
    </section>
  );
};

export default HomeBanner;
