"use client";
import React, { useState } from "react";
import { Upload, CheckCircle2 } from "lucide-react"; // install lucide-react if needed
import { toast, ToastContainer } from "react-toastify";

export default function JobForm() {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: formData });
      if (res.ok) toast("Application sent successfully!");
    } catch (err) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F9FAFB] p-6">
      <ToastContainer />
      <div className="bg-white p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] w-full max-w-lg border border-gray-100">
        <h2 className="text-[32px] font-bold text-[#0D1B3E] tracking-tight mb-2">
          Apply For This Job
        </h2>
        <p className="text-gray-400 text-[15px] mb-10 font-medium">
          Fill up all the information to proceed
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {[
            {
              label: "Your Name",
              name: "name",
              type: "text",
              placeholder: "Enter your name",
            },
            {
              label: "Your Email",
              name: "email",
              type: "email",
              placeholder: "Enter your email",
              required: true,
            },
            {
              label: "Enter Your Location",
              name: "location",
              type: "text",
              placeholder: "Enter your location",
            },
            {
              label: "Phone Number",
              name: "phone",
              type: "tel",
              placeholder: "Enter your phone number",
            },
          ].map((field) => (
            <div key={field.name} className="group">
              <label className="block text-[13px] font-bold text-[#0D1B3E] tracking-wider mb-1">
                {field.label}{" "}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full border-b-2 border-gray-100 py-3 text-[#0D1B3E] placeholder:text-gray-300 focus:border-[#56C1ED] outline-none transition-all duration-300 bg-transparent"
              />
            </div>
          ))}

          {/* File Upload Section */}
          <div className="relative group">
            <div
              className={`flex items-center justify-between border-2 border-dashed rounded-2xl p-2 transition-all duration-300 ${fileName ? "border-green-200 bg-green-50/30" : "border-gray-100 group-hover:border-[#56C1ED]"}`}
            >
              <span className="pl-4 text-sm text-gray-500 truncate max-w-[200px]">
                {fileName || "Upload CV / Resume"}
              </span>
              <input
                name="cv"
                type="file"
                required
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="bg-[#56C1ED] text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-md shadow-blue-100 group-hover:bg-[#45b0dc] transition-colors">
                {fileName ? <CheckCircle2 size={18} /> : <Upload size={18} />}
                {fileName ? "Selected" : "Upload"}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-gradient-to-r from-[#56C1ED] to-[#2F8BDD] text-white font-bold py-5 rounded-2xl shadow-[0_10px_25px_rgba(86,193,237,0.3)] hover:shadow-[0_15px_30px_rgba(86,193,237,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 active:scale-95 uppercase tracking-widest text-sm"
          >
            {loading ? "Processing..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
