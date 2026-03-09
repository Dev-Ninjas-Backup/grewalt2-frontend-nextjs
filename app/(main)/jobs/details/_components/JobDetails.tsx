"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import JobForm from "./JobForm";
import { JOBS_DATA } from "./data";


/**
 * 1. Type Definitions (Matching your provided array structure)
 */
export type JobCategory = {
  category: string;
  points: string[];
};

export type JobRequirement = {
  title: string;
  points: string[];
};

/**
 * 2. Main JobDetails Component
 * This component now reads the "id" from the URL search parameters
 * and finds the matching job from your array.
 */
const JobDetails = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");

  // Find the job by ID, fallback to the first job if not found or no ID provided
  const currentJob = JOBS_DATA.find((j) => j.id === jobId) || JOBS_DATA[0];

  if (!currentJob) {
    return <div className="p-20 text-center text-xl">Job not found.</div>;
  }

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* 1. Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-[64px] font-black text-[#0D1B3E] uppercase tracking-tight leading-[1] mb-6">
            {currentJob.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-gray-500 font-medium text-sm md:text-lg">
            <span>{currentJob.company}</span>
            <span className="text-gray-300">|</span>
            <span>{currentJob.location}</span>
            <span className="text-gray-300">|</span>
            <span>{currentJob.level}</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#2F8BDD]">{currentJob.workStyle}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* 2. Left Side - Job Description & Details */}
          <div className="lg:col-span-7 space-y-12">
            {/* Intro Paragraph */}
            <div className="space-y-6 text-[#475569] text-lg leading-relaxed">
              <p>{currentJob.description}</p>
              {currentJob.additionalInfo && <p>{currentJob.additionalInfo}</p>}
            </div>

            {/* The Role Section */}
            {currentJob.roleInfo && (
              <section>
                <h2 className="text-3xl font-bold text-[#0D1B3E] mb-6">
                  {currentJob.roleInfo.title}
                </h2>
                <div className="text-[#475569] text-lg leading-relaxed">
                  <p>{currentJob.roleInfo.content}</p>
                </div>
              </section>
            )}

            {/* Key Responsibilities Section */}
            <section>
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8 uppercase tracking-tight">
                Key Responsibilities
              </h2>
              <div className="space-y-10">
                {currentJob.responsibilities.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold text-[#0D1B3E] text-xl mb-4">
                      {item.category}
                    </h3>
                    <ul className="space-y-4">
                      {item.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-3 text-[#475569] text-lg leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2F8BDD] mt-2.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements Section */}
            {currentJob.requirements?.map((req, index) => (
              <section key={index} className="pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8 tracking-tight">
                  {req.title}
                </h2>
                <ul className="space-y-4">
                  {req.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[#475569] text-lg leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F8BDD] mt-2.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            {/* Offer / Benefits Section */}
            {currentJob.offer && (
              <section className="pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8 tracking-tight">
                  {currentJob.offer.title}
                </h2>
                <ul className="space-y-4">
                  {currentJob.offer.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[#475569] text-lg leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F8BDD] mt-2.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* 3. Right Side - Sticky Application Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <JobForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
