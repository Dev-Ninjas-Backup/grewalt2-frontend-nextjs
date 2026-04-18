"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactFormCard = () => {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
  const [timeline, setTimeline] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 🔒 prevents double submit (React StrictMode fix)
    if (loading) return;

    if (!service || !timeline) {
      toast.error("Please select all required fields", {
        position: "top-right",
      });
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast.success("Enquiry sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });

      e.currentTarget.reset();
      setService("");
      setTimeline("");
    } catch {
      // toast.error("Failed to send message. Please try again.", {
      //   position: "top-right",
      // });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] w-full max-w-[750px]">
      <ToastContainer />

      <h2 className="text-[32px] md:text-[36px] font-bold text-[#05183D] mb-3 leading-tight tracking-tight">
        Tell us what you&apos;re building
      </h2>

      <p className="text-slate-500 text-[16px] mb-12">
        We&apos;ll connect you with the right specialist. All enquiries are
        confidential.
      </p>

      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
          {/* Company Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#05183D]">
              Company name
            </label>
            <input
              name="company"
              type="text"
              placeholder="Enter your company name"
              className="border-b-[1.5px] border-slate-200 py-3 outline-none focus:border-[#2F8BDD] transition-colors placeholder:text-slate-300 text-slate-700 bg-transparent"
            />
          </div>

          {/* Your Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#05183D]">
              Your name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="border-b-[1.5px] border-slate-200 py-3 outline-none focus:border-[#2F8BDD] transition-colors placeholder:text-slate-300 text-slate-700 bg-transparent"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#05183D]">
              Your email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="border-b-[1.5px] border-slate-200 py-3 outline-none focus:border-[#2F8BDD] transition-colors placeholder:text-slate-300 text-slate-700 bg-transparent"
            />
          </div>

          {/* Service Select */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#05183D]">
              What support are you looking for?{" "}
              <span className="text-red-500">*</span>
            </label>

            <input type="hidden" name="service" value={service} />

            <Select value={service} onValueChange={setService}>
              <SelectTrigger className="w-full border-0  py-3 px-0 rounded-none outline-none focus:border-[#2F8BDD] transition-colors text-slate-700 bg-transparent">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Executive Search">
                  Executive & Leadership Search
                </SelectItem>
                <SelectItem value="AI Talent">
                  AI / Machine Learning Talent
                </SelectItem>
                <SelectItem value="Web3 Engineering">
                  Web3 / Blockchain Engineering
                </SelectItem>
                <SelectItem value="Technical Specialists">
                  Hard-to-Find Technical Specialists
                </SelectItem>
                <SelectItem value="Fractional Talent">
                  Fractional / Embedded Talent
                </SelectItem>
                <SelectItem value="Managed Solutions">
                  Managed Talent Solutions
                </SelectItem>
                <SelectItem value="Talent Advisory">
                  Talent Strategy & Advisory
                </SelectItem>
                <SelectItem value="Need Guidance">
                  Not sure yet — need guidance
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Timeline Select */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#05183D]">
              Hiring / Project Timeline <span className="text-red-500">*</span>
            </label>

            <input type="hidden" name="timeline" value={timeline} />

            <Select value={timeline} onValueChange={setTimeline}>
              <SelectTrigger className="w-full border-0 py-3 px-0 rounded-none outline-none focus:border-[#2F8BDD] transition-colors text-slate-700 bg-transparent">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Immediate (0-30 days)">
                  Immediate (0–30 days)
                </SelectItem>
                <SelectItem value="1-3 months">1–3 months</SelectItem>
                <SelectItem value="3-6 months">3–6 months</SelectItem>
                <SelectItem value="6+ months">6+ months</SelectItem>
                <SelectItem value="Exploring">Exploring options</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-bold text-[#05183D]">
            Tell us about your requirement{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            rows={2}
            required
            placeholder="Briefly describe what you are looking for..."
            className="border-b-[1.5px] border-slate-200 py-3 outline-none focus:border-[#2F8BDD] transition-colors placeholder:text-slate-300 text-slate-700 bg-transparent resize-none"
          />
        </div>

        {/* Submit */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-[12px] text-white font-bold text-[18px] transition-all duration-300 shadow-[0_15px_35px_rgba(47,139,221,0.35)] hover:shadow-[0_20px_45px_rgba(47,139,221,0.45)] active:scale-[0.98] disabled:opacity-70"
            style={{
              background: "linear-gradient(90deg, #2F8BDD 0%, #6FDEF7 100%)",
            }}
          >
            {loading ? "Sending Enquiry..." : "Submit Enquiry"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormCard;
