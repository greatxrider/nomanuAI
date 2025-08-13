"use client";

import Image from "next/image";

const ClientMarquee = () => {
  // Company data with logos and placeholder info
  const companies = [
    {
      name: "Nyxpro",
      logo: "/companyLogos/nyxpro-logo.jpg",
      hasLogo: true,
    },
    {
      name: "MetaWatt",
      logo: "/companyLogos/metawatt-logo.png",
      hasLogo: true,
    },
    {
      name: "BuiltFromLove",
      logo: "/companyLogos/builtfromlove-logo.svg",
      hasLogo: true,
    },
    {
      name: "Anonova",
      logo: "/companyLogos/anonova-logo.svg",
      hasLogo: true,
    },
    {
      name: "Haivyne",
      logo: "/companyLogos/haivyne-logo.png",
      hasLogo: true,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 py-12 overflow-hidden border-y border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-lg font-medium text-brand-orange">
            We've helped our clients reclaim 20+ hours weekly through automation
          </p>
        </div>

        {/* Static Logo Grid */}
        <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center group cursor-pointer flex-1"
            >
              {company.hasLogo ? (
                <Image
                  src={company.logo!}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="h-12 md:h-14 lg:h-16 w-auto object-contain grayscale hover:grayscale-0 hover:brightness-100 brightness-75 transition-all duration-500 hover:scale-110 group-hover:drop-shadow-lg"
                  style={{
                    filter: "grayscale(100%) contrast(1.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter =
                      "grayscale(0%) contrast(1) brightness(1) drop-shadow(0 4px 6px rgba(229, 101, 24, 0.2))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "grayscale(100%) contrast(1.2)";
                  }}
                />
              ) : (
                <div className="flex items-center justify-center w-32 h-12 md:h-14 lg:h-16 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-white/20 hover:border-brand-orange/50 transition-all duration-300">
                  <span className="text-lg font-bold text-gray-800 dark:text-white hover:text-brand-orange transition-colors duration-300">
                    {company.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-400">
            From{" "}
            <span className="text-brand-orange font-semibold">
              startups to enterprises
            </span>{" "}
            - we've built{" "}
            <span className="text-brand-orange font-semibold">automation</span>{" "}
            that drives real results
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
