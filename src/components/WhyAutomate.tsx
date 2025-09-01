"use client";

import { Zap, Clock, Users, DollarSign } from "lucide-react";

const WhyAutomate = () => {
  const perks = [
    {
      icon: Clock,
      title: "Get Your Time Back",
      description:
        "Stop spending hours on repetitive tasks. Automation handles the boring stuff while you focus on what you love about your business.",
      highlight: "Save 20-40 hours every month",
    },
    {
      icon: DollarSign,
      title: "Cut Costs, Boost Profits",
      description:
        "Reduce manual errors that cost money. Automated systems work 24/7 without overtime pay, sick days, or coffee breaks.",
      highlight: "Reduce operational costs by 30-50%",
    },
    {
      icon: Users,
      title: "Scale Without the Headache",
      description:
        "Handle 10x more customers without hiring 10x more staff. Your automation grows with your business, not against it.",
      highlight: "10x capacity without 10x complexity",
    },
  ];

  return (
    <section
      id="why-automate"
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Glowing Orange Gradient Background Effects - Services Style */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Glowing Orange Gradient Orbs - Brighter Edges */}
        <div className="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-brand-orange/70 via-orange-400/40 to-brand-orange-light/60 rounded-full blur-3xl animate-pulse opacity-90" />
        <div
          className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-brand-orange-light/60 via-brand-orange/70 to-orange-500/50 rounded-full blur-3xl animate-pulse opacity-80"
          style={{ animationDelay: "2s" }}
        />

        {/* Central Glowing Effect */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-orange/10 via-orange-400/15 to-brand-orange/10 rounded-full blur-3xl animate-pulse opacity-40"
          style={{ animationDelay: "4s" }}
        />

        {/* Additional Floating Orange Particles - Brighter */}
        <div className="absolute inset-0 opacity-80">
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-6">
            <Zap className="w-5 h-5 text-brand-orange mr-2 animate-pulse" />
            <span className="text-brand-orange font-semibold">
              The Perks of Automation
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Here's What Happens When You{" "}
            <span className="text-brand-orange">Automate Your Workflow</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Think of automation as your business's personal assistant that never
            sleeps, never complains, and never asks for a raise. Here are the
            real perks you'll experience when you let technology handle the
            heavy lifting.
          </p>
        </div>

        {/* Perks - Three Column Layout */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => {
              const IconComponent = perk.icon;
              return (
                <div key={index} className="group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-brand-orange/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/30 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                        {perk.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {perk.description}
                      </p>
                      <div className="text-brand-orange font-semibold text-sm bg-brand-orange/10 px-3 py-1 rounded-full inline-block">
                        {perk.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAutomate;
