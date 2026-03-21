"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  UsersIcon,
  ShieldIcon,
  BrainIcon,
  ZapIcon,
  RocketIcon,
  TrendingUpIcon,
  EyeIcon,
  TargetIcon,
} from "@/components/icons/PremiumIcons";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";

const WhyChooseUs = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const features = [
    {
      icon: UsersIcon,
      title: "Dedicated Support: Your DevMate & ClientMate",
      description:
        "You get two dedicated experts: a DevMate who builds your automation and a ClientMate who ensures everything runs smoothly. No waiting, no confusion - just results.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=face",
      lottie: "https://lottie.host/a759ce86-f329-4b6d-b1c0-862b85f9ea83/o10oovBv2W.lottie",
      useLottie: true,
    },
    {
      icon: ShieldIcon,
      title: "Customer Service is Our Strength",
      description:
        "We answer your calls, respond to your emails, and solve your problems quickly. You're not just another client - you're our priority.",
      image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=600&h=400&fit=crop",
      useLottie: false,
    },
    {
      icon: BrainIcon,
      title: "AI + Automation Expertise",
      description:
        "We know how to make AI work for your business. Our systems learn from your data and make smart decisions that save you time and money.",
      image: "/automations/automation-image.png",
      useLottie: false,
    },
    {
      icon: ZapIcon,
      title: "Process-Driven, Tool-Agnostic",
      description:
        "We focus on what you want to achieve, not what tools we prefer. We'll use whatever works best to get you the results you need.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      useLottie: false,
    },
    {
      icon: RocketIcon,
      title: "Scalable & Sustainable Architecture",
      description:
        "Your automation grows with your business. We build it right the first time so you don't have to rebuild it later. That means more money in your pocket.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      useLottie: false,
    },
    {
      icon: TrendingUpIcon,
      title: "No-Code/Low-Code Implementation",
      description:
        "We use the best automation tools available. This means faster results, lower costs, and solutions that work immediately without months of development.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      useLottie: false,
    },
    {
      icon: EyeIcon,
      title: "People-First Impact",
      description:
        "We don't replace your team - we make them better. Your people focus on what they do best while our automation handles the boring stuff.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      useLottie: false,
    },
    {
      icon: TargetIcon,
      title: "Transparent Collaboration",
      description:
        "You see everything we do. We keep you updated, share our progress, and work together to make sure you get exactly what you want.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      useLottie: false,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden"
    >
      {/* Background Pattern */}
      <DarkHoneycombBackground patternId="why-choose-us-honeycomb" />
      
      {/* Top/Bottom Dividers */}
      <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
      <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

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
            Why Businesses <span className="text-gradient">Choose NomanuAI?</span>
          </h2>

          <p className="text-body-lg max-w-2xl mx-auto">
            Intelligent automation solutions that adapt, learn, and scale with
            your business goals
          </p>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`card-glass group p-6 md:p-8 transition-all duration-700 ease-out-expo ${
                  isIntersecting
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {isEven ? (
                  // Layout: Icon, Title, Description, then Image
                  <>
                    {/* Icon */}
                    <div className="icon-hex w-14 h-14 mb-5">
                      <IconComponent size={24} className="text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-semibold text-ink dark:text-white mb-3
                      group-hover:text-brand transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-body text-ink-secondary dark:text-gray-400 mb-6">
                      {feature.description}
                    </p>

                    {/* Image/Lottie */}
                    <div className="relative h-48 md:h-56 overflow-hidden hex-cut-sm bg-paper dark:bg-gray-800">
                      {feature.useLottie && feature.lottie ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `<dotlottie-wc src="${feature.lottie}" autoplay loop style="width:100%;height:100%;display:block;" renderer="svg"></dotlottie-wc>`,
                          }}
                          className="w-full h-full [&_dotlottie-wc]:block [&_dotlottie-wc]:w-full [&_dotlottie-wc]:h-full [&_canvas]:!w-full [&_canvas]:!h-full [&_canvas]:!rounded-none [&_svg]:!w-full [&_svg]:!h-full"
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  // Layout: Image first, then Icon, Title, Description
                  <>
                    {/* Image/Lottie */}
                    <div className="relative h-48 md:h-56 overflow-hidden hex-cut-sm bg-paper dark:bg-gray-800 mb-6">
                      {feature.useLottie && feature.lottie ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `<dotlottie-wc src="${feature.lottie}" autoplay loop style="width:100%;height:100%;display:block;" renderer="svg"></dotlottie-wc>`,
                          }}
                          className="w-full h-full [&_dotlottie-wc]:block [&_dotlottie-wc]:w-full [&_dotlottie-wc]:h-full [&_canvas]:!w-full [&_canvas]:!h-full [&_canvas]:!rounded-none [&_svg]:!w-full [&_svg]:!h-full"
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      )}
                    </div>

                    {/* Icon */}
                    <div className="icon-hex w-14 h-14 mb-5">
                      <IconComponent size={24} className="text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-semibold text-ink dark:text-white mb-3
                      group-hover:text-brand transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-body text-ink-secondary dark:text-gray-400">
                      {feature.description}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
