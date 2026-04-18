"use client";


const StatsSection = () => {
  const stats = [
    {
      number: "500+",
      label: "Successful Placements",
    },
    {
      number: "98%",
      label: "Client Retention",
    },
    {
      number: "14",
      label: "Days Avg. Hire Time",
    },
    {
      number: "10+",
      label: "Global Markets",
    },
  ];

  return (
    <section className="bg-[#05183D] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 items-center justify-center text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col gap-2"
            >
              {/* Number with Bomstad Font */}
              <h2
                className="text-white text-5xl md:text-6xl font-bold "
                style={{ fontFamily: "var(--font-bomstad), sans-serif" }}
              >
                {stat.number}
              </h2>

              {/* Label */}
              <p className="text-slate-300 text-sm md:text-base font-medium opacity-80 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
