"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import JobForm from "./JobForm";
import { JOBS_DATA } from "./data";

export type JobCategory = {
  category: string;
  points: string[];
};

export type JobRequirement = {
  title: string;
  points: string[];
};

const JobDetails = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");

  const currentJob = JOBS_DATA.find((j) => j.id === jobId) || JOBS_DATA[0];

  if (!currentJob) {
    return <div className="p-20 text-center text-xl">Job not found.</div>;
  }

  return (
    <div className="bg-gradient-to-b pt-40 from-[#EEF6FF] via-white to-white min-h-screen py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-[64px] font-black text-[#0D1B3E] leading-[1.05] mb-6 relative inline-block">
            {currentJob.title}
            <span className="absolute -bottom-3 left-0 w-24 h-1 bg-[#2F8BDD] rounded"></span>
          </h1>

          <div className="flex flex-wrap gap-3 text-sm md:text-base font-medium mt-6">
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
              {currentJob.company}
            </span>

            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
              {currentJob.location}
            </span>

            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
              {currentJob.level}
            </span>

            <span className="bg-[#EEF6FF] text-[#2F8BDD] px-4 py-2 rounded-lg font-semibold">
              {currentJob.workStyle}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-12">
            {/* Intro */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-[#475569] text-lg leading-relaxed">
                {currentJob.description}
              </p>

              {currentJob.additionalInfo && (
                <p className="text-[#475569] text-lg leading-relaxed mt-6">
                  {currentJob.additionalInfo}
                </p>
              )}
            </div>

            {/* Role */}
            {currentJob.roleInfo && (
              <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-[#0D1B3E] mb-4">
                  {currentJob.roleInfo.title}
                </h2>

                <p className="text-[#475569] text-lg leading-relaxed">
                  {currentJob.roleInfo.content}
                </p>
              </section>
            )}

            {/* Responsibilities */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-[#0D1B3E] mb-8">
                Key Responsibilities
              </h2>

              <div className="space-y-10">
                {currentJob.responsibilities.map((item, idx) => (
                  <div key={idx} className="pl-6 border-l-4 border-[#2F8BDD]">
                    <h3 className="font-semibold text-[#0D1B3E] text-xl mb-4">
                      {item.category}
                    </h3>

                    <ul className="space-y-4">
                      {item.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex gap-3 text-[#475569] text-lg leading-relaxed"
                        >
                          <span className="w-2 h-2 bg-[#2F8BDD] rounded-full mt-2.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            {currentJob.requirements?.map((req, index) => (
              <section
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <h2 className="text-2xl font-bold text-[#0D1B3E] mb-6">
                  {req.title}
                </h2>

                <ul className="space-y-4">
                  {req.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-[#475569] text-lg">
                      <span className="w-2 h-2 bg-[#2F8BDD] rounded-full mt-2.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            {/* Offer */}
            {currentJob.offer && (
              <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-[#0D1B3E] mb-6">
                  {currentJob.offer.title}
                </h2>

                <ul className="space-y-4">
                  {currentJob.offer.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 text-[#475569] text-lg">
                      <span className="w-2 h-2 bg-[#2F8BDD] rounded-full mt-2.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* RIGHT SIDE FORM (UNCHANGED) */}
          <div className="lg:col-span-5">
            <div className="sticky top-0 pt-8">
              <JobForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
