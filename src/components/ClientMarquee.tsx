"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

const ClientMarquee = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  // Company data with logos and placeholder info
  const companies = [
    {
      name: "Nyxpro",
      logo: "/companyLogos/nyxpro-logo.jpg",
      hasLogo: true,
      invertInDarkMode: false,
    },
    {
      name: "MetaWatt",
      logo: "/companyLogos/metawatt-logo.png",
      hasLogo: true,
      invertInDarkMode: false,
    },
    {
      name: "BuiltFromLove",
      logo: "/companyLogos/builtfromlove-logo.svg",
      hasLogo: true,
      invertInDarkMode: true,
    },
    {
      name: "Anonova",
      logo: "/companyLogos/anonova-logo.svg",
      hasLogo: true,
      invertInDarkMode: true,
    },
    {
      name: "Haivyne",
      logo: "/companyLogos/haivyne-logo.png",
      hasLogo: true,
      invertInDarkMode: false,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-paper dark:bg-gray-950 py-12 overflow-hidden transition-colors duration-300"
    >
      {/* Honeycomb dividers instead of borders */}
      <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
      <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

      {/* Hex Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hex-particle w-8 h-8 top-[20%] left-[5%]" style={{ animationDelay: '0s' }} />
        <div className="hex-particle w-6 h-6 top-[50%] right-[8%]" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-10 transition-all duration-1000 ease-out-expo ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-body text-brand font-medium">
            We've helped our clients reclaim 20+ hours weekly through automation
          </p>
        </div>

        {/* Static Logo Grid */}
        <div
          className={`flex items-center justify-center gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto
            transition-all duration-1000 ease-out-expo delay-200 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center group cursor-pointer flex-1"
            >
              {company.hasLogo ? (
                <div className="relative w-full h-12 md:h-14 lg:h-16 flex items-center justify-center">
                  <Image
                    src={company.logo!}
                    alt={company.name}
                    width={120}
                    height={60}
                    className={`h-12 md:h-14 lg:h-16 w-auto object-contain
                      grayscale hover:grayscale-0 brightness-75 hover:brightness-100
                      transition-all duration-500 hover:scale-110
                      group-hover:drop-shadow-[0_4px_12px_rgba(229,101,24,0.15)]
                      ${company.invertInDarkMode ? 'dark:invert dark:opacity-80 dark:hover:opacity-100' : ''}`}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-32 h-12 md:h-14 lg:h-16
                  bg-paper-secondary dark:bg-gray-800 backdrop-blur-sm hex-cut-sm
                  border border-ink/10 dark:border-white/10 hover:border-brand/30
                  transition-all duration-300">
                  <span className="text-lg font-semibold text-ink dark:text-white
                    group-hover:text-brand transition-colors duration-300">
                    {company.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div
          className={`text-center mt-8 transition-all duration-1000 ease-out-expo delay-300 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs text-ink-tertiary dark:text-gray-500">
            From{" "}
            <span className="text-brand font-semibold">
              startups to enterprises
            </span>{" "}
            - we've built{" "}
            <span className="text-brand font-semibold">automation</span>{" "}
            that drives real results
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
