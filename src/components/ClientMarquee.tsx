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
    {
      name: "Bamboo Works",
      logo: "/companyLogos/bambooworks-logo.png",
      hasLogo: true,
    },
    {
      name: "Easy Outsource",
      logo: "/companyLogos/easyoutsource-logo.png",
      hasLogo: true,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 py-12 overflow-hidden border-y border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div className="container-width">
          {/* Section Header */}
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">
              Success Stories: Clients We've Served
            </p>
          </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}

          {/* Scrolling company logos and names */}
          <div className="flex animate-marquee">
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[200px] h-20 mx-8"
              >
                {company.hasLogo ? (
                  <Image
                    src={company.logo!}
                    alt={company.name}
                    width={160}
                    height={80}
                    className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center w-40 h-16 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-white/20 hover:border-brand-orange/50 transition-all duration-300">
                    <span className="text-xl font-bold text-gray-800 dark:text-white hover:text-brand-orange transition-colors duration-300">
                      {company.name}
                    </span>
                  </div>
                )}
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[200px] h-20 mx-8"
              >
                {company.hasLogo ? (
                  <Image
                    src={company.logo!}
                    alt={company.name}
                    width={160}
                    height={80}
                    className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center w-40 h-16 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-brand-orange/50 transition-all duration-300">
                    <span className="text-xl font-bold text-white hover:text-brand-orange transition-colors duration-300">
                      {company.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-400">
            From{" "}
            <span className="text-brand-orange font-semibold">
              startups to enterprises
            </span>{" "}
            - we've built{" "}
            <span className="text-brand-orange font-semibold">
              500+ automations
            </span>{" "}
            that drive real results
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
