"use client";

import Link from "next/link";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import TeamCards from "./TeamCards";
import {
  ProcessorIcon,
  UsersIcon,
  LightbulbIcon,
  ZapIcon,
  SparkleIcon,
  BrainIcon,
  CircuitIcon,
  NetworkIcon,
  ArrowRightIcon,
} from "@/components/icons/PremiumIcons";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";

const About = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const stats = [
    { label: "Automation Projects", value: "50+", icon: ZapIcon },
    { label: "Happy Clients", value: "5+", icon: UsersIcon },
    { label: "AI Solutions Solved", value: "50+", icon: LightbulbIcon },
  ];

  const team = [
    {
      title: "AI Specialists",
      icon: BrainIcon,
      description: "Expert in machine learning and AI algorithms",
    },
    {
      title: "AI Engineers",
      icon: ProcessorIcon,
      description: "Building robust AI-powered automation systems",
    },
    {
      title: "Automation Specialists",
      icon: CircuitIcon,
      description: "Creating intelligent business solutions",
    },
  ];

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
        className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-20"
      />
      <div className="absolute inset-0 bg-paper/80 dark:bg-gray-950/75" />
      <DarkHoneycombBackground patternId="about-honeycomb" />

      {/* Premium Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient mesh */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03]
          bg-gradient-radial from-brand to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.02]
          bg-gradient-radial from-accent to-transparent blur-3xl" />

        {/* Premium grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out-expo ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="badge mb-6 mx-auto">
            <BrainIcon size={16} className="mr-2" />
            <span>Meet Our Team</span>
          </div>

          <h2 className="heading-lg text-ink dark:text-white mb-4 text-balance">
            About <span className="text-gradient">NomanuAI</span>
          </h2>

          <p className="text-body-lg max-w-3xl mx-auto">
            We're an AI Automation Agency that transforms how businesses
            operate. We help startups and growing companies eliminate manual
            work by building intelligent automation systems that handle
            repetitive tasks, streamline workflows, and free up your team to
            focus on what truly matters—growing your business.
          </p>
        </div>

        {/* Two Column Layout */}
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ease-out-expo delay-200 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="card-glass group p-5 text-center transition-all duration-500 ease-out-expo"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="icon-container w-12 h-12 mx-auto mb-4">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-ink dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[13px] text-ink-tertiary dark:text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Team Roles */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-ink dark:text-white mb-5">
                Our Expertise
              </h3>
              {team.map((member, index) => {
                const IconComponent = member.icon;
                return (
                  <div
                    key={member.title}
                    className="card group p-4 flex items-center gap-4 transition-all duration-500 ease-out-expo"
                    style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className="icon-container w-10 h-10 flex-shrink-0">
                      <IconComponent size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink dark:text-white text-[15px]
                        group-hover:text-brand transition-colors duration-300">
                        {member.title}
                      </h4>
                      <p className="text-[13px] text-ink-tertiary dark:text-gray-500">
                        {member.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Visual Design */}
          <div className="relative">
            <div className="card-glass group p-8 md:p-10">
              <div className="text-center">
                <div className="icon-container w-20 h-20 mx-auto mb-6">
                  <NetworkIcon size={36} className="text-white" />
                </div>

                <h3 className="text-xl font-semibold text-ink dark:text-white mb-4
                  group-hover:text-brand transition-colors duration-300">
                  AI-Powered Solutions
                </h3>

                <p className="text-body text-ink-secondary dark:text-gray-400 mb-8">
                  We transform complex business processes into intelligent,
                  automated workflows. Our solutions adapt and learn, becoming
                  more efficient over time.
                </p>

                <div className="space-y-3">
                  {[
                    "Intelligent Automation",
                    "Custom AI Solutions",
                    "Process Optimization",
                    "Data Intelligence",
                  ].map((solution, idx) => (
                    <div
                      key={solution}
                      className="flex items-center gap-3 p-3 hex-cut-sm bg-ink/5 dark:bg-white/5
                        border border-ink/5 dark:border-white/5
                        hover:border-brand/30 transition-all duration-300 group/item"
                    >
                      <SparkleIcon size={16} className="text-brand flex-shrink-0" />
                      <span className="text-[14px] text-ink dark:text-white font-medium">
                        {solution}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div
          className={`mt-20 transition-all duration-1000 ease-out-expo delay-300 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="heading-md text-ink dark:text-white mb-4">
              Meet the <span className="text-gradient">Minds Behind NomanuAI</span>
            </h3>
            <p className="text-body-lg max-w-3xl mx-auto">
              NomanuAI is built by a team of developers and innovators working
              together to design smart automation and AI solutions. We
              collaborate as equals, combining our skills to create practical
              systems that help businesses scale with confidence.
            </p>
          </div>

          <TeamCards />
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ease-out-expo delay-400 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="card-branded p-10 md:p-12 max-w-3xl mx-auto">
            <h3 className="heading-sm text-ink dark:text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-body text-ink-secondary dark:text-gray-400 mb-8 max-w-xl mx-auto">
              Let's discuss how automation can transform your business processes
            </p>
            <Link
              href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
