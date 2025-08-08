"use client";
import { useState, useEffect, useRef } from "react";
import {
  Quote,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Users,
  Star,
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
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 overflow-hidden"
    >
      {/* AI Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-orange rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-6">
            <Sparkles className="w-5 h-5 text-brand-orange mr-2 animate-pulse" />
            <span className="text-brand-orange font-semibold">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Real Stories.{" "}
            <span className="text-brand-orange">Real Impact.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how AI-powered automation is transforming businesses like
            yours.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Info & Stats */}
          <div className="space-y-8">
            {/* Main Info */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our AI automation solutions have helped businesses across
                various industries achieve remarkable results. From startups to
                enterprises, we deliver consistent value and measurable impact.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-brand-orange">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Happy Clients
                  <br />
                  <span className="text-xs">Satisfied with our services</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-brand-orange mb-2">
                  3-5 Weeks
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Average Implementation
                  <br />
                  <span className="text-xs">From concept to results</span>
                </div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-brand-orange mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Support Available
                  <br />
                  <span className="text-xs">When you need us most</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial Carousel */}
          <div className="relative">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-brand-orange/10 hover:shadow-brand-orange/20 transition-all duration-500 group">
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
