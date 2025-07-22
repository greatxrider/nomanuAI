"use client";

import {
  Target,
  Eye,
  Award,
  TrendingUp,
  Users2,
  Lightbulb,
} from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "5+", icon: Award },
    { label: "Automation Projects", value: "500+", icon: TrendingUp },
    { label: "Happy Clients", value: "50+", icon: Users2 },
    { label: "AI Solutions Deployed", value: "200+", icon: Lightbulb },
  ];

  const values = [
    {
      title: "Innovation First",
      description:
        "We stay at the forefront of AI technology to deliver cutting-edge solutions that give our clients a competitive advantage.",
      icon: Lightbulb,
    },
    {
      title: "Client Success",
      description:
        "Your success is our success. We work closely with each client to ensure our solutions deliver measurable results.",
      icon: Target,
    },
    {
      title: "Transparency",
      description:
        "We believe in clear communication, honest timelines, and transparent pricing with no hidden fees.",
      icon: Eye,
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-brand-orange rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            About <span className="text-gradient">NomanuAI</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We're passionate about helping businesses harness the power of AI to
            automate processes, increase efficiency, and drive growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Empowering Businesses Through Intelligent Automation
            </h3>
            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Founded with a vision to democratize AI automation, NomanuAI
                bridges the gap between complex AI technology and practical
                business solutions. We specialize in creating custom automation
                systems that solve real business challenges.
              </p>
              <p>
                Our team of AI specialists, software engineers, and business
                consultants work together to understand your unique needs and
                deliver solutions that not only automate processes but transform
                the way you do business.
              </p>
              <p>
                From small businesses looking to streamline operations to
                enterprise clients requiring complex integrations, we've helped
                organizations across industries achieve significant improvements
                in efficiency and growth.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 hover:shadow-brand-orange/10 hover:border-brand-orange/20 dark:hover:shadow-brand-orange/20 dark:hover:border-brand-orange/30 p-6 text-center hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-brand-orange/10 dark:bg-brand-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div className="text-3xl font-bold text-brand-orange mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent mb-16"></div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">Our Core Values</h3>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            These principles guide everything we do and ensure we deliver
            exceptional value to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-brand-orange/10 dark:bg-brand-orange/20 rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/20 hover:scale-110">
                  <IconComponent className="w-8 h-8 text-brand-orange" />
                </div>
                <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-4">{value.title}</h4>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
