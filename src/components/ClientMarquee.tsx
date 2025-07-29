"use client";

const ClientMarquee = () => {
  // Major company names for the marquee
  const companies = [
    "Nyxpro",
    "MetaWatt",
    "BuiltFromLove",
    "Anonova",
    "Haivyne",
    "Bamboo Works",
    "Easy Outsource",
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-12 overflow-hidden border-y border-gray-700 transition-colors duration-300">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">
            Success Stories: Clients We've Served
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

          {/* Scrolling company names */}
          <div className="flex animate-marquee">
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[200px] h-12 mx-8"
              >
                <span className="text-xl font-bold text-white hover:text-brand-orange transition-colors duration-300 whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[200px] h-12 mx-8"
              >
                <span className="text-xl font-bold text-white hover:text-brand-orange transition-colors duration-300 whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-400">
            From <span className="text-brand-orange font-semibold">startups to enterprises</span> - 
            we've built <span className="text-brand-orange font-semibold">500+ automations</span> that drive real results
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
