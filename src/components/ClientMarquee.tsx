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
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-12 overflow-hidden border-y border-gray-200 dark:border-gray-700 transition-colors duration-300">
      {/* Glowing Orange Gradient Background Effects - Same as Services section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Glowing Orange Gradient Orbs - Brighter Edges */}
        <div className="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-brand-orange/50 via-orange-400/25 to-brand-orange-light/40 rounded-full blur-3xl animate-pulse opacity-75" />
        <div
          className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-brand-orange-light/40 via-brand-orange/50 to-orange-500/35 rounded-full blur-3xl animate-pulse opacity-65"
          style={{ animationDelay: "2s" }}
        />

        {/* Central Glowing Effect */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-orange/10 via-orange-400/15 to-brand-orange/10 rounded-full blur-3xl animate-pulse opacity-40"
          style={{ animationDelay: "4s" }}
        />

        {/* Additional Floating Orange Particles - Brighter */}
        <div className="absolute inset-0 opacity-50">
          {[
            { left: "15%", top: "20%", delay: "0s", size: "w-4 h-4" },
            { left: "85%", top: "30%", delay: "1s", size: "w-3 h-3" },
            { left: "25%", top: "70%", delay: "2s", size: "w-5 h-5" },
            { left: "75%", top: "60%", delay: "3s", size: "w-3 h-3" },
            { left: "45%", top: "15%", delay: "4s", size: "w-4 h-4" },
            { left: "65%", top: "80%", delay: "5s", size: "w-3 h-3" },
          ].map((particle, i) => (
            <div
              key={i}
              className={`absolute ${particle.size} bg-gradient-to-r from-brand-orange to-orange-400 rounded-full animate-pulse`}
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: "3s",
                filter: "blur(1px)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-width relative z-10">
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
