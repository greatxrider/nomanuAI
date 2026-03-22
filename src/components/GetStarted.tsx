"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  PhoneIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@/components/icons/PremiumIcons";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";
const GetStarted = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Pattern A - Gradient with texture */}
      <img
        src="/assets/beeInspiration/5303586.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/70 to-gray-100/80 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70" />
      <DarkHoneycombBackground patternId="get-started-honeycomb" effect="current" />

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
            Ready to <span className="text-gradient">Transform Your Business?</span>
          </h2>

          <p className="text-body-lg max-w-3xl mx-auto">
            We make getting started simple. Follow these three steps and you'll
            have automation working for your business in no time.
          </p>
        </div>

        {/* Three Steps */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Step 01 - Book Your Free Discovery Call */}
          <div
            className={`card-glass group p-8 transition-all duration-700 ease-out-expo ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Content */}
              <div>
                {/* Number Badge */}
                <div className="hex-number w-12 h-12 mb-6">
                  <span className="text-white font-bold text-lg">01</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-ink dark:text-white mb-4
                  group-hover:text-brand transition-colors duration-300">
                  Book Your <span className="text-brand">Free</span> Discovery Call
                </h3>

                {/* Description */}
                <p className="text-body text-ink-secondary dark:text-gray-400 mb-6">
                  We start with a simple, no-pressure conversation. We learn
                  about your business goals and challenges, then show you where
                  automation can help you win faster.
                </p>

                {/* Bullet Points */}
                <div className="space-y-3 mb-8">
                  {["Clear action plan", "Goals that match your business", "Confidence to move forward"].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckIcon size={18} className="text-brand mr-3 flex-shrink-0" />
                      <span className="text-[15px] text-ink-secondary dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="https://calendar.app.google/ydhNfzf6HS7uVcUp7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <PhoneIcon size={18} />
                  <span>Book A Call</span>
                  <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Right Column - Image */}
              <div className="relative w-full h-72 bg-paper-secondary dark:bg-gray-800 hex-cut border border-ink/10 dark:border-white/10 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                  alt="Discovery call"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Step 02 - Build Your Custom Automation System */}
          <div
            className={`card-glass group p-8 transition-all duration-700 ease-out-expo ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Image */}
              <div className="relative w-full h-72 hex-cut overflow-hidden order-2 lg:order-1">
                <Image
                  src="/whyChoose/automation-image-custom.png"
                  alt="Automation Workflow System"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Column - Content */}
              <div className="order-1 lg:order-2">
                {/* Number Badge */}
                <div className="hex-number w-12 h-12 mb-6">
                  <span className="text-white font-bold text-lg">02</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-ink dark:text-white mb-4
                  group-hover:text-brand transition-colors duration-300">
                  Build Your <span className="text-brand">Custom Automation</span> System
                </h3>

                {/* Description */}
                <p className="text-body text-ink-secondary dark:text-gray-400 mb-6">
                  We create workflows that fit your business perfectly. We
                  connect your tools and build custom solutions that work with
                  your team and grow with your business.
                </p>

                {/* Bullet Points */}
                <div className="space-y-3">
                  {["Workflows built for your needs", "All your tools work together", "We build it and support you"].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckIcon size={18} className="text-brand mr-3 flex-shrink-0" />
                      <span className="text-[15px] text-ink-secondary dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 03 - Grow Faster & Lead Better */}
          <div
            className={`card-glass group p-8 transition-all duration-700 ease-out-expo ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Content */}
              <div>
                {/* Number Badge */}
                <div className="hex-number w-12 h-12 mb-6">
                  <span className="text-white font-bold text-lg">03</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-ink dark:text-white mb-4
                  group-hover:text-brand transition-colors duration-300">
                  Grow Faster & <span className="text-brand">Lead Better</span>
                </h3>

                {/* Description */}
                <p className="text-body text-ink-secondary dark:text-gray-400 mb-6">
                  With automation working for you, you spend less time on
                  routine tasks and more time on strategy, innovation, and
                  growing your business. We stay with you to ensure long-term
                  success.
                </p>

                {/* Bullet Points */}
                <div className="space-y-3">
                  {["Save time and money you can see", "Work smarter and faster", "Build a strong foundation for growth"].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckIcon size={18} className="text-brand mr-3 flex-shrink-0" />
                      <span className="text-[15px] text-ink-secondary dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative w-full h-72 bg-paper-secondary dark:bg-gray-800 hex-cut border border-ink/10 dark:border-white/10 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Growth and leadership"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
