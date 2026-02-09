"use client";

import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  ZapIcon,
  ClockIcon,
  UsersIcon,
  DollarIcon,
} from "@/components/icons/PremiumIcons";

const WhyAutomate = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const perks = [
    {
      icon: ClockIcon,
      title: "Get Your Time Back",
      description:
        "Stop spending hours on repetitive tasks. Automation handles the boring stuff while you focus on what you love about your business.",
      highlight: "Save 20-40 hours every month",
      lottie:
        "https://lottie.host/embed/e478e371-131d-40cb-8294-8ce5bb298e91/nQGZg9aKBO.lottie",
    },
    {
      icon: DollarIcon,
      title: "Cut Costs, Boost Profits",
      description:
        "Reduce manual errors that cost money. Automated systems work 24/7 without overtime pay, sick days, or coffee breaks.",
      highlight: "Reduce operational costs by 30-50%",
      lottie:
        "https://lottie.host/embed/d5420ca1-a787-4c8d-b669-0d032fb6ba8d/6r8EP8ECsP.lottie",
    },
    {
      icon: UsersIcon,
      title: "Scale Without the Headache",
      description:
        "Handle 10x more customers without hiring 10x more staff. Your automation grows with your business, not against it.",
      highlight: "10x capacity without 10x complexity",
      lottie:
        "https://lottie.host/embed/28071aae-ce02-4bf2-bd38-f4d1ff4c0a08/Zw80FqSTKF.lottie",
    },
  ];

  return (
    <section
      ref={ref}
      id="why-automate"
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/assets/beeInspiration/5303586.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-15 dark:opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/85 via-white/75 to-gray-100/85 dark:from-gray-950/75 dark:via-gray-900/65 dark:to-gray-950/75" />

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out-expo ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="heading-lg text-ink dark:text-white mb-4 text-balance">
            Here's What Happens When You{" "}
            <span className="text-gradient">
              Automate Your Workflow
            </span>
          </h2>

          <p className="text-body-lg max-w-3xl mx-auto">
            Think of automation as your business's personal assistant that never
            sleeps, never complains, and never asks for a raise. Here are the
            real perks you'll experience when you let technology handle the
            heavy lifting.
          </p>
        </div>

        {/* Perks - Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {perks.map((perk, index) => (
              <div
                key={index}
                className={`card-glass group p-8 transition-all duration-700 ease-out-expo ${
                  isIntersecting
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-5">
                  {/* Lottie Animation Container */}
                  <div className="relative w-24 h-24 bg-paper dark:bg-gray-800 hex-cut-sm
                    border border-ink/10 dark:border-white/10 overflow-hidden
                    group-hover:scale-105 transition-transform duration-500">
                    <iframe
                      src={perk.lottie}
                      className="w-full h-full"
                      title={perk.title}
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-ink dark:text-white mb-3
                      group-hover:text-brand transition-colors duration-300">
                      {perk.title}
                    </h3>
                    <p className="text-body text-ink-secondary dark:text-gray-400 mb-4">
                      {perk.description}
                    </p>
                    <div className="inline-flex items-center px-5 py-2 bg-brand/10 text-brand
                      font-medium text-sm border border-brand/20"
                      style={{ clipPath: 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)' }}>
                      {perk.highlight}
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAutomate;
