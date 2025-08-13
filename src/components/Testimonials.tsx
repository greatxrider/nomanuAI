"use client";
import { useState, useEffect, useRef } from "react";
import {
  Quote,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Users,
  Star,
  Calendar,
} from "lucide-react";

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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, AUTO_SCROLL_INTERVAL);
    return () => intervalRef.current && clearInterval(intervalRef.current);
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
      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Enhanced AI Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit-testimonials"
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
            <rect
              width="100%"
              height="100%"
              fill="url(#circuit-testimonials)"
            />
          </svg>
        </div>

        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {[
            { left: "15%", top: "20%", delay: "0s", duration: "4s" },
            { left: "85%", top: "30%", delay: "0.5s", duration: "3.5s" },
            { left: "25%", top: "70%", delay: "1s", duration: "4.5s" },
            { left: "75%", top: "60%", delay: "1.5s", duration: "3s" },
            { left: "45%", top: "15%", delay: "2s", duration: "4.2s" },
            { left: "65%", top: "80%", delay: "2.5s", duration: "3.8s" },
            { left: "10%", top: "50%", delay: "3s", duration: "4.1s" },
            { left: "90%", top: "45%", delay: "3.5s", duration: "3.7s" },
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
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-brand-orange/8 rounded-full filter blur-3xl animate-pulse animation-delay-300" />
      </div>

      <div className="container-width relative z-10">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column - Info & Stats */}
          <div className="flex">
            {/* Main Info */}
            <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 w-full flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span
                  className="text-brand-orange"
                  style={{
                    textShadow:
                      "0 0 8px rgba(229, 101, 24, 0.4), 0 0 15px rgba(229, 101, 24, 0.2)",
                  }}
                >
                  Half the Workload, Full Speed Ahead
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Nomanu AI designs, builds, and runs automation workflows that
                remove the repetitive clicks, manual updates, and constant
                follow-ups slowing your team down.
              </p>

              {/* Key Benefits */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    20+ hours reclaimed every week
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Instant process improvements from day one
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    No extra hires. No extra tools. Just results.
                  </span>
                </div>
              </div>

              {/* Book Free Consultation Button */}
              <div className="mt-6">
                <button className="group relative bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base flex items-center justify-center overflow-hidden border-2 border-transparent hover:border-transparent">
                  {/* AI Colored Border Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-105" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm scale-110" />

                  {/* Multi-colored Glowing Border Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/60 via-pink-500/70 to-blue-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg scale-110" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/40 via-purple-500/50 to-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl scale-125" />

                  {/* Inner Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 via-pink-500/30 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />

                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/5 via-pink-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Glowing Shadow Effect */}
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl scale-110 -z-10" />
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-blue-400/30 via-green-400/30 to-yellow-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl scale-125 -z-20" />

                  {/* Button Content */}
                  <span className="relative z-10 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Consultation
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial Carousel */}
          <div className="flex flex-col">
            <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-brand-orange/10 hover:shadow-brand-orange/20 transition-all duration-500 group w-full flex flex-col justify-center relative flex-1">
              {/* AI Glow Effect */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-brand-orange/10 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Floating Quote Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/20">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10 text-center">
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-brand-orange shadow-lg mx-auto mb-6"
                />

                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[active].rating)}
                </div>

                <p className="text-lg text-gray-800 dark:text-gray-100 mb-6 leading-relaxed">
                  "{testimonials[active].content}"
                </p>

                <div className="text-center">
                  <div className="font-bold text-brand-orange text-lg">
                    {testimonials[active].name}
                  </div>
                  <div className="text-brand-orange/80 text-sm italic">
                    {testimonials[active].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-110 shadow"
                onClick={() =>
                  goTo((active - 1 + testimonials.length) % testimonials.length)
                }
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-110 shadow"
                onClick={() => goTo((active + 1) % testimonials.length)}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === active
                      ? "bg-brand-orange"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
