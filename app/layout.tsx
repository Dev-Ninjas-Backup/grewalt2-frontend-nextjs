import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const bomstad = localFont({
  src: [
    {
      path: "../public/fonts/BomstadDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bomstad",
});

export const metadata: Metadata = {
  title: "aventra³",
  description: "Build World-Class AI & Blockchain Teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${jakarta.variable} 
          ${bomstad.variable} 
          ${jakarta.className}
          antialiased bg-[#FBFDFF]
        `}
      >
        <Navbar />
        <div className="min-h-[60vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
