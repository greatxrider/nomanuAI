"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  PhoneIcon,
  ArrowRightIcon,
  BrainIcon,
  CheckIcon,
} from "@/components/icons/PremiumIcons";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";

const GetStarted = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/assets/beeInspiration/5303586.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08] dark:opacity-15"
      />
      <div className="absolute inset-0 bg-paper/85 dark:bg-gray-950/80" />
      <DarkHoneycombBackground patternId="getstarted-honeycomb" />

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
                  href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <PhoneIcon size={18} />
                  <span>Book A Call</span>
                  <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Right Column - Animation */}
              <div className="relative w-full h-72 bg-paper-secondary dark:bg-gray-800 hex-cut border border-ink/10 dark:border-white/10 overflow-hidden">
                <iframe
                  src="https://lottie.host/embed/a503333d-300b-499d-bea4-16ed5735ed88/riwclcALDL.lottie"
                  title="Discovery call animation"
                  className="w-full h-full"
                  loading="lazy"
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

              {/* Right Column - Animation */}
              <div className="relative w-full h-72 bg-paper-secondary dark:bg-gray-800 hex-cut border border-ink/10 dark:border-white/10 overflow-hidden">
                <iframe
                  src="https://lottie.host/embed/cf5a013f-0590-4462-b7ac-a86002ac9f76/OjiADZe4jM.lottie"
                  title="Growth and leadership animation"
                  className="w-full h-full"
                  loading="lazy"
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
