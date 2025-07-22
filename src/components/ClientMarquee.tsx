"use client";

const ClientMarquee = () => {
  // Major company names for the marquee
  const companies = [
    "Samsung",
    "Google",
    "Microsoft",
    "Amazon",
    "Apple",
    "Meta",
    "Netflix",
    "Spotify",
    "Adobe",
    "Salesforce",
    "Oracle",
    "IBM",
  ];

  return (
    <section className="bg-gray-800 py-12 overflow-hidden border-y border-gray-700">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-800 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-800 to-transparent z-10"></div>

          {/* Scrolling company names */}
          <div className="flex space-x-16 animate-marquee">
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[120px] h-12"
              >
                <span className="text-2xl font-bold text-gray-300 hover:text-brand-orange transition-colors duration-300 whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[120px] h-12"
              >
                <span className="text-2xl font-bold text-gray-300 hover:text-brand-orange transition-colors duration-300 whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-400">
            Join <span className="text-brand-orange font-semibold">50+</span>{" "}
            companies automating their success
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
