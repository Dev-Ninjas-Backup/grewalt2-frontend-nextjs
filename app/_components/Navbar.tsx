"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; // 1. Import usePathname
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/public/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // 2. Initialize the hook
const route = useRouter()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/clients" },
    { name: "Jobs", href: "/jobs" },
    { name: "Insights", href: "/Insights" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 md:top-6 left-0 right-0 z-[70] flex justify-center px-4 pointer-events-none"
      >
        <div className="flex items-center justify-between w-full max-w-7xl h-16 md:h-20 px-4 md:px-8 bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] pointer-events-auto">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-28 h-8 md:w-36 md:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={logo}
                alt="Aventra Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              // 3. Check if current path matches link href
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[16px] font-bold transition-colors group ${
                    isActive
                      ? "text-[#2F8BDD]"
                      : "text-slate-600 hover:text-[#0F172A]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#6FDEF7] to-[#2F8BDD] transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => route.push("/contact")}
              className="hidden sm:block relative overflow-hidden bg-gradient-to-r from-[#6FDEF7] to-[#2F8BDD] text-white px-8 py-2.5 rounded-xl font-bold text-base shadow-[0_10px_20px_-5px_rgba(47,139,221,0.3)] cursor-pointer group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-[65] lg:hidden bg-white rounded-xl shadow-2xl border border-slate-100 p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href; // 4. Check for mobile as well
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold transition-colors ${
                    isActive
                      ? "text-[#2F8BDD]"
                      : "text-slate-700 hover:text-[#2F8BDD]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <button
              onClick={() => route.push("/contact")}
              className="w-full bg-gradient-to-r from-[#6FDEF7] to-[#2F8BDD] text-white py-4 rounded-2xl font-bold text-lg"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
