"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { Phone, ArrowRight } from "lucide-react";

const GetStarted = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section
      ref={ref}
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Enhanced AI Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit-getstarted"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M20,20 L80,20 L80,80 L20,80 Z"
                  fill="none"
                  stroke="#E56518"
                  strokeWidth="1"
                />
                <circle cx="20" cy="20" r="3" fill="#E56518" />
                <circle cx="80" cy="20" r="3" fill="#E56518" />
                <circle cx="80" cy="80" r="3" fill="#E56518" />
                <circle cx="20" cy="80" r="3" fill="#E56518" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-getstarted)" />
          </svg>
        </div>

        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {[
            { left: "10%", top: "15%", delay: "0s", duration: "4s" },
            { left: "90%", top: "25%", delay: "0.5s", duration: "3.5s" },
            { left: "20%", top: "75%", delay: "1s", duration: "4.5s" },
            { left: "80%", top: "65%", delay: "1.5s", duration: "3s" },
            { left: "50%", top: "10%", delay: "2s", duration: "4.2s" },
            { left: "70%", top: "85%", delay: "2.5s", duration: "3.8s" },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-brand-orange rounded-full animate-float opacity-30"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-brand-orange/8 rounded-full filter blur-3xl animate-pulse animation-delay-300" />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isIntersecting
              ? "animate-fade-in-up opacity-100"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8">
            <ArrowRight className="w-5 h-5 text-brand-orange mr-3" />
            <span className="text-brand-orange font-semibold">
              WHERE TO START
            </span>
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse ml-3" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
              Transform Your Business?
            </span>{" "}
            Here's{" "}
            <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
              How We Start
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We make getting started simple. Follow these three steps and you'll
            have automation working for your business in no time.
          </p>
        </div>

        {/* Two Separate Containers - Each with Content and Image */}
        <div className="space-y-12">
          {/* Container 01 - Book Your Free Discovery Call */}
          <div
            className={`bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 max-w-[1300px] mx-auto ${
              isIntersecting
                ? "animate-fade-in-up opacity-100"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Content */}
              <div>
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-orange text-white font-bold text-xl rounded-full mb-6">
                  01
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Book Your <span className="text-brand-orange">Free</span>{" "}
                  Discovery Call
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We start with a simple, no-pressure conversation. We learn
                  about your business goals and challenges, then show you where
                  automation can help you win faster.
                </p>

                {/* Bullet Points */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Clear action plan
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Goals that match your business
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Confidence to move forward
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Book A Call
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Right Column - Animation */}
              <div className="relative w-full max-w-full h-full bg-white rounded-2xl border border-gray-200 dark:border-gray-600 shadow-lg overflow-hidden">
                <iframe
                  src="https://lottie.host/embed/a503333d-300b-499d-bea4-16ed5735ed88/riwclcALDL.lottie"
                  title="Discovery call animation"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Container 02 - Build Your Tailored Automation System */}
          <div className="bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Image */}
              <div className="relative w-full max-w-full h-full">
                <Image
                  src="/whyChoose/automation-image-custom.png"
                  alt="Automation Workflow System"
                  width={500}
                  height={350}
                  className="w-full h-full object-cover rounded-2xl border border-gray-200 dark:border-gray-600 shadow-lg"
                />
              </div>

              {/* Right Column - Content */}
              <div>
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-orange text-white font-bold text-xl rounded-full mb-6">
                  02
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Build Your <span className="text-brand-orange">Custom</span>{" "}
                  <span className="text-brand-orange">Automation</span> System
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We create workflows that fit your business perfectly. We
                  connect your tools and build custom solutions that work with
                  your team and grow with your business.
                </p>

                {/* Bullet Points */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Workflows built for your needs
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      All your tools work together
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      We build it and support you
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Container 03 - Accelerate Growth & Lead Smarter */}
          <div className="bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Content */}
              <div>
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-orange text-white font-bold text-xl rounded-full mb-6">
                  03
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Grow Faster &{" "}
                  <span className="text-brand-orange">Lead Better</span>
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  With automation working for you, you spend less time on
                  routine tasks and more time on strategy, innovation, and
                  growing your business. We stay with you to ensure long-term
                  success.
                </p>

                {/* Bullet Points */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Save time and money you can see
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Work smarter and faster
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Build a strong foundation for growth
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - Animation */}
              <div className="relative w-full max-w-full h-full bg-white rounded-2xl border border-gray-200 dark:border-gray-600 shadow-lg overflow-hidden">
                <iframe
                  src="https://lottie.host/embed/cf5a013f-0590-4462-b7ac-a86002ac9f76/OjiADZe4jM.lottie"
                  title="Growth and leadership animation"
                  className="w-full h-full"
                  allowFullScreen
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
