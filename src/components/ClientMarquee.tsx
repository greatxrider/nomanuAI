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

        {/* Animated Logo Marquee */}
        <div
          className={`relative overflow-hidden w-full max-w-6xl mx-auto py-8 transition-all duration-1000 ease-out-expo delay-200 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Gradient Edges to blur the ends of the marquee */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-paper dark:from-gray-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-paper dark:from-gray-950 to-transparent z-20 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex overflow-hidden group space-x-12 md:space-x-20">
            {/* First Track */}
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] shrink-0 items-center space-x-12 md:space-x-20 w-max">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`track1-${index}`}
                  className="flex items-center justify-center cursor-pointer flex-shrink-0"
                >
                  {company.hasLogo ? (
                    <div className="relative w-40 h-16 md:h-20 flex items-center justify-center px-4">
                      <Image
                        src={company.logo!}
                        alt={company.name}
                        width={160}
                        height={80}
                        className={`max-h-[3rem] md:max-h-[4rem] w-auto object-contain
                          opacity-50 grayscale hover:grayscale-0 hover:opacity-100
                          transition-all duration-500 hover:scale-110
                          hover:drop-shadow-[0_0_15px_rgba(229,101,24,0.4)]
                          ${
                            company.logo.endsWith(".jpg") || company.logo.endsWith(".jpeg")
                              ? "mix-blend-darken dark:mix-blend-screen"
                              : ""
                          }
                          ${company.invertInDarkMode ? "dark:invert" : ""}`}
                      />
                    </div>
                  ) : (
                    <div
                      className="flex items-center justify-center w-36 h-14 md:h-16
                      bg-paper-secondary/50 dark:bg-gray-800/50 backdrop-blur-sm hex-cut-sm
                      border border-ink/10 dark:border-white/10 hover:border-brand/40
                      transition-all duration-300 shadow-sm group-hover:border-brand/40"
                    >
                      <span
                        className="text-lg font-bold text-ink-secondary dark:text-gray-300
                        hover:text-brand transition-colors duration-300 tracking-wide"
                      >
                        {company.name}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Second Track (Duplicate for seamless loop) */}
            <div aria-hidden="true" className="flex animate-marquee group-hover:[animation-play-state:paused] shrink-0 items-center space-x-12 md:space-x-20 w-max">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`track2-${index}`}
                  className="flex items-center justify-center cursor-pointer flex-shrink-0"
                >
                  {company.hasLogo ? (
                    <div className="relative w-40 h-16 md:h-20 flex items-center justify-center px-4">
                      <Image
                        src={company.logo!}
                        alt={company.name}
                        width={160}
                        height={80}
                        className={`max-h-[3rem] md:max-h-[4rem] w-auto object-contain
                          opacity-50 grayscale hover:grayscale-0 hover:opacity-100
                          transition-all duration-500 hover:scale-110
                          hover:drop-shadow-[0_0_15px_rgba(229,101,24,0.4)]
                          ${
                            company.logo.endsWith(".jpg") || company.logo.endsWith(".jpeg")
                              ? "mix-blend-darken dark:mix-blend-screen"
                              : ""
                          }
                          ${company.invertInDarkMode ? "dark:invert" : ""}`}
                      />
                    </div>
                  ) : (
                    <div
                      className="flex items-center justify-center w-36 h-14 md:h-16
                      bg-paper-secondary/50 dark:bg-gray-800/50 backdrop-blur-sm hex-cut-sm
                      border border-ink/10 dark:border-white/10 hover:border-brand/40
                      transition-all duration-300 shadow-sm"
                    >
                      <span
                        className="text-lg font-bold text-ink-secondary dark:text-gray-300
                        hover:text-brand transition-colors duration-300 tracking-wide"
                      >
                        {company.name}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
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
