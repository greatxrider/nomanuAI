"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  QuoteIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
  CalendarIcon,
  CheckIcon,
  HexagonIcon,
} from "@/components/icons/PremiumIcons";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";

const testimonials = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=12",
    content:
      "NomanuAI made automation easy and effective for our business. The team delivered exactly what we needed.",
    name: "Michael",
    company: "MDS Manufacturing",
    rating: 5,
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=47",
    content:
      "Their AI solutions are top-notch and the team is very responsive. Highly recommended!",
    name: "Diane",
    company: "ABC Rentals",
    rating: 5,
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=32",
    content:
      "We saw real results in just weeks. The automation has transformed our workflow completely.",
    name: "Allison",
    company: "Grand Party Rental",
    rating: 5,
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=67",
    content:
      "Exceptional service and results. Our productivity increased by 300% after implementation.",
    name: "Robert",
    company: "Tech Solutions Inc",
    rating: 5,
  },
  {
    id: 5,
    avatar: "/testimonialsPicture/derick-photo.jpg",
    content:
      "NomanuAI transformed our manual processes into efficient automated workflows. The results exceeded our expectations.",
    name: "Derick",
    company: "MetaWatt",
    rating: 5,
  },
  {
    id: 6,
    avatar: "/testimonialsPicture/raymond-photo.jpg",
    content:
      "Outstanding automation solutions that streamlined our operations. The team's expertise is unmatched.",
    name: "Raymond",
    company: "BuiltFromLove",
    rating: 5,
  },
  {
    id: 7,
    avatar: "/testimonialsPicture/yvonne-photo.jpg",
    content:
      "Professional, reliable, and results-driven. NomanuAI delivered automation that truly made a difference.",
    name: "Yvonne",
    company: "Haivyne",
    rating: 5,
  },
  {
    id: 8,
    avatar: "/testimonialsPicture/paul-photo.jpg",
    content:
      "Exceptional quality and service. The automation solutions have significantly improved our efficiency.",
    name: "Paul",
    company: "Nyxpro",
    rating: 5,
  },
];

const AUTO_SCROLL_INTERVAL = 10000;

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  useEffect((): (() => void) => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, AUTO_SCROLL_INTERVAL);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const goTo = (idx: number) => {
    setActive(idx);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, AUTO_SCROLL_INTERVAL);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <StarIcon key={i} size={16} className="text-amber-400 fill-current" />
    ));
  };

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/assets/beeInspiration/5303586.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.25] dark:opacity-15"
      />
      <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
      <DarkHoneycombBackground patternId="testimonials-honeycomb" />

      <div className="container-width relative z-10">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Info & Stats */}
          <div
            className={`flex flex-col transition-all duration-1000 ease-out-expo ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-8">
              <div className="badge mb-4">
                <HexagonIcon size={14} className="mr-2 text-brand" />
                <span>Client Success Stories</span>
              </div>
              <h2 className="heading-lg text-ink dark:text-white mb-6 text-balance">
                <span className="text-gradient">Half the Workload,</span>
                <br />
                Full Speed Ahead
              </h2>

              <p className="text-body-lg text-ink-secondary dark:text-gray-400 mb-8 max-w-lg">
                Nomanu AI designs, builds, and runs automation workflows that
                remove the repetitive clicks, manual updates, and constant
                follow-ups slowing your team down.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 clip-hex bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors duration-300">
                  <CheckIcon size={18} className="text-success" />
                </div>
                <span className="text-lg text-ink dark:text-gray-200 font-medium">
                  20+ hours reclaimed every week
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 clip-hex bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors duration-300">
                  <CheckIcon size={18} className="text-success" />
                </div>
                <span className="text-lg text-ink dark:text-gray-200 font-medium">
                  Instant process improvements from day one
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 clip-hex bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors duration-300">
                  <CheckIcon size={18} className="text-success" />
                </div>
                <span className="text-lg text-ink dark:text-gray-200 font-medium">
                  No extra hires. No extra tools. Just results.
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-brand hover:shadow-brand-lg"
              >
                <CalendarIcon size={20} />
                <span>Book Free Consultation</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Testimonial Carousel */}
          <div
            className={`flex flex-col transition-all duration-1000 ease-out-expo delay-200 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative mt-8">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand/10 clip-hex animate-float pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-honey/10 clip-hex animate-float animation-delay-500 pointer-events-none" />
              
              <div className="card-honeycomb group p-8 md:p-12 w-full flex flex-col justify-center relative z-10 bg-white dark:bg-gray-800 border border-ink/5 dark:border-white/5 shadow-xl">
                {/* Floating Quote Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 icon-hex w-12 h-12 shadow-lg">
                  <QuoteIcon size={20} className="text-white" />
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10 text-center pt-6">
                  {/* Avatar */}
                  <div className="w-24 h-24 clip-hex bg-gradient-to-br from-brand to-honey p-[3px] mx-auto mb-6 shadow-md">
                    <div className="w-full h-full clip-hex overflow-hidden bg-white">
                      <Image
                        src={testimonials[active].avatar}
                        alt={testimonials[active].name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1.5 mb-6">
                    {renderStars(testimonials[active].rating)}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-ink dark:text-white mb-8 leading-relaxed font-medium">
                    "{testimonials[active].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="text-center border-t border-ink/5 dark:border-white/10 pt-6">
                    <div className="font-bold text-brand text-lg mb-1">
                      {testimonials[active].name}
                    </div>
                    <div className="text-sm font-medium text-ink-tertiary dark:text-gray-400 uppercase tracking-wide">
                      {testimonials[active].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col items-center mt-8 gap-6">
              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  className="w-12 h-12 clip-hex bg-white dark:bg-gray-800 border border-ink/10 dark:border-white/10
                    flex items-center justify-center
                    hover:bg-brand hover:text-white hover:border-brand
                    text-ink-secondary dark:text-gray-400
                    transition-all duration-300 ease-out-expo shadow-sm hover:shadow-md"
                  onClick={() =>
                    goTo((active - 1 + testimonials.length) % testimonials.length)
                  }
                  aria-label="Previous testimonial"
                >
                  <ChevronLeftIcon size={20} />
                </button>
                <button
                  type="button"
                  className="w-12 h-12 clip-hex bg-white dark:bg-gray-800 border border-ink/10 dark:border-white/10
                    flex items-center justify-center
                    hover:bg-brand hover:text-white hover:border-brand
                    text-ink-secondary dark:text-gray-400
                    transition-all duration-300 ease-out-expo shadow-sm hover:shadow-md"
                  onClick={() => goTo((active + 1) % testimonials.length)}
                  aria-label="Next testimonial"
                >
                  <ChevronRightIcon size={20} />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`w-3 h-3 clip-hex transition-all duration-300 ease-out-expo ${
                      i === active
                        ? "bg-brand scale-125"
                        : "bg-ink/20 dark:bg-white/20 hover:bg-ink/40 dark:hover:bg-white/40"
                    }`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
