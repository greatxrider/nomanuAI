"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  TargetIcon,
  EyeIcon,
  BrainIcon,
  ArrowRightIcon,
} from "@/components/icons/PremiumIcons";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";

const MissionVision = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
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
      <DarkHoneycombBackground patternId="mission-honeycomb" effect="current" />

      <div className="container-width relative z-10">
        {/* Main Container */}
        <div
          className={`card-glass overflow-hidden transition-all duration-1000 ease-out-expo ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Left Column - Image with hex overlay accents */}
            <div className="relative min-h-[300px] lg:min-h-full overflow-hidden">
              <Image
                src="/assets/mission-vision.jpg"
                alt="Mission and Vision"
                fill
                className="object-cover"
              />
              {/* Honey-tinted overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/5 to-paper/20 dark:to-gray-900/20" />
              {/* Floating hex accents */}
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="hex-particle w-12 h-12 bottom-[10%] right-[10%]" style={{ animationDelay: '0s' }} />
                <div className="hex-particle w-8 h-8 top-[15%] left-[15%]" style={{ animationDelay: '3s' }} />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Main Title */}
              <h2 className="heading-lg text-ink dark:text-white mb-6">
                Our{" "}
                <span className="text-gradient">
                  Mission & Vision
                </span>
              </h2>

              {/* Description */}
              <p className="text-body-lg text-ink-secondary dark:text-gray-300 mb-8">
                NomanuAI is a full-service technology company that helps
                forward-thinking businesses thrive through custom software
                development, mobile apps, AI automation, SaaS products, and
                healthcare EMR/EHR solutions. We build intelligent, scalable
                systems that streamline processes and enable your teams
                to focus on what truly matters—creativity, innovation, and
                growth.
              </p>

              {/* Vision & Mission Single Container */}
              <div className="card p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Vision */}
                  <div className="flex items-start gap-4">
                    <div className="icon-hex w-12 h-12 flex-shrink-0">
                      <EyeIcon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink dark:text-white mb-2">
                        Vision
                      </h3>
                      <p className="text-sm text-ink-secondary dark:text-gray-400 leading-relaxed">
                        To lead the future of intelligent business systems—where
                        custom software, AI, and automation drive operational
                        excellence, and individuals are free to contribute
                        their most valuable and meaningful work.
                      </p>
                    </div>
                  </div>

                  {/* Mission */}
                  <div className="flex items-start gap-4">
                    <div className="icon-hex w-12 h-12 flex-shrink-0">
                      <TargetIcon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink dark:text-white mb-2">
                        Mission
                      </h3>
                      <p className="text-sm text-ink-secondary dark:text-gray-400 leading-relaxed">
                        To empower organizations with the right technology—from
                        software development to AI automation—so their people
                        can spend less time on manual tasks and more time on
                        strategic, creative, and high-impact work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/aboutus"
                className="btn-primary inline-flex items-center gap-2 w-fit"
              >
                <span>Know More About Us</span>
                <ArrowRightIcon size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
