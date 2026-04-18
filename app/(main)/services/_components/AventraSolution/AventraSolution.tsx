import React from "react";

const AventraSolution = () => {
  const solutions = [
    {
      title: "Technical Understanding at the Core",
      desc: "We don't recruit from job descriptions alone. We understand the difference between:",
      points: [
        "Model experimentation vs production deployment",
        "Research engineers vs applied ML engineers",
        "Smart contract development vs protocol architecture",
        "Contributors vs true system builders",
      ],
      footer:
        "That technical literacy allows us to identify genuine expertise — not surface-level familiarity.",
    },
    {
      title: "Proactive Talent Mapping",
      desc: "The best candidates are rarely active applicants. We build targeted talent maps across:",
      points: [
        "AI research communities",
        "Open-source ecosystems",
        "Blockchain developer networks",
        "High-performance engineering teams",
      ],
      footer: "Access is deliberate, not reactive.",
    },
    {
      title: "Market Intelligence in Real Time",
      desc: "AI and crypto hiring markets shift quickly. We advise on:",
      points: [
        "Competitive compensation positioning",
        "Hiring sequencing",
        "Geographic strategy",
        "Talent availability insights",
      ],
      footer: "So you don't lose candidates due to misalignment or delay.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-5xl md:text-6xl font-black text-[#0D1B3E] mb-20 tracking-tight">
          The <span className="text-[#2F8BDD]">aventra3</span> solution
        </h2>

        {/* Top Grid: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {solutions.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-2xl font-black text-[#0D1B3E] mb-6 leading-tight min-h-[60px]">
                {item.title}
              </h3>
              <p className="text-[#475569] leading-relaxed mb-8">{item.desc}</p>

              <ul className="space-y-4 mb-8 flex-grow">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 group">
                    <span className="text-[#2F8BDD] font-bold mt-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L13 6M19 12L13 18"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[#475569] font-medium leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-[#475569] text-sm leading-relaxedpt-6">
                {item.footer}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Grid: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 pt-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-[#0D1B3E] tracking-tight">
              Precision Over Volume
            </h3>
            <p className="text-[#475569] text-lg leading-relaxed">
              We prioritise signal.
            </p>
            <p className="text-[#475569] text-lg leading-relaxed">
              Instead of sending large volumes of CVs, we deliver a calibrated
              shortlist of technically vetted, strategically aligned candidates.
            </p>
            <p className="text-[#475569] text-lg font-medium">
              Every introduction is intentional.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-black text-[#0D1B3E] tracking-tight">
              Built for Scale
            </h3>
            <p className="text-[#475569] text-lg leading-relaxed">
              Whether hiring a founding engineer, a Head of AI, or building an
              entire blockchain team, our approach scales with your ambition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AventraSolution;
