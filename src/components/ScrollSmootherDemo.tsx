"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollSmootherDemo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Parallax effect for the title
      gsap.to(titleRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Stagger animation for cards
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              y: 100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.2,
            }
          );
        }
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-brand-orange/20 via-orange-400/10 to-brand-orange-light/20 rounded-full blur-3xl animate-pulse opacity-60" />
        <div
          className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-brand-orange-light/20 via-brand-orange/20 to-orange-500/15 rounded-full blur-3xl animate-pulse opacity-50"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-6">
            <span className="text-brand-orange font-semibold">
              Smooth Scrolling Demo
            </span>
          </div>

          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            data-speed="0.5"
          >
            Experience{" "}
            <span className="text-brand-orange">Smooth Scrolling</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Scroll down to see the magic of GSAP ScrollSmoother in action.
            Notice how elements animate smoothly as they enter the viewport.
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Parallax Effects",
              description:
                "Elements move at different speeds creating depth and visual interest.",
              icon: "🎯",
            },
            {
              title: "Smooth Animations",
              description:
                "Professional transitions that enhance user experience without being distracting.",
              icon: "✨",
            },
            {
              title: "Performance Optimized",
              description:
                "Built with performance in mind, ensuring smooth 60fps animations.",
              icon: "⚡",
            },
            {
              title: "Cross Browser",
              description:
                "Works seamlessly across all modern browsers and devices.",
              icon: "🌐",
            },
            {
              title: "Customizable",
              description:
                "Easy to configure and customize for your specific needs.",
              icon: "🎨",
            },
            {
              title: "Mobile Friendly",
              description:
                "Optimized for touch devices with smooth scrolling behavior.",
              icon: "📱",
            },
          ].map((card, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                cardRefs.current[index] = el;
              }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-brand-orange/30"
              data-speed="0.3"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-6">
            <span className="text-brand-orange font-semibold">
              Ready to Transform Your Experience?
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the difference that smooth scrolling makes. Every
            interaction feels more polished and professional.
          </p>
          <a
            href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScrollSmootherDemo;
