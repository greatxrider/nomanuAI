"use client";

import {
  Zap,
  Users,
  CheckCircle,
  MessageCircle,
  TrendingUp,
  Shield,
  Sparkles,
  Cpu,
  Brain,
  Network,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "AI Lead Generation",
      description:
        "Automated lead capture and qualification systems that work 24/7",
      icon: Zap,
      features: [
        "Smart lead scoring",
        "Multi-channel capture",
        "Real-time notifications",
      ],
      gradient: "from-brand-orange to-brand-orange-light",
      glow: "shadow-brand-orange/25",
    },
    {
      id: 2,
      title: "CRM Integration & Automation",
      description:
        "Seamless integration with your existing CRM and workflow automation",
      icon: Users,
      features: [
        "Custom integrations",
        "Workflow automation",
        "Data synchronization",
      ],
      gradient: "from-brand-orange to-brand-orange-light",
      glow: "shadow-brand-orange/25",
    },
    {
      id: 3,
      title: "Client Onboarding Automation",
      description:
        "Streamlined client onboarding processes that reduce manual work",
      icon: CheckCircle,
      features: [
        "Automated welcome sequences",
        "Document processing",
        "Progress tracking",
      ],
      gradient: "from-brand-orange to-brand-orange-light",
      glow: "shadow-brand-orange/25",
    },
    {
      id: 4,
      title: "AI Communication Systems",
      description:
        "Intelligent communication platforms that engage customers automatically",
      icon: MessageCircle,
      features: ["Chatbot integration", "Email automation", "Smart responses"],
      gradient: "from-brand-orange to-brand-orange-light",
      glow: "shadow-brand-orange/25",
    },
    {
      id: 5,
      title: "Business Process Optimization",
      description: "Identify and automate repetitive tasks to boost efficiency",
      icon: TrendingUp,
      features: [
        "Process analysis",
        "Automation mapping",
        "Performance tracking",
      ],
      gradient: "from-brand-orange to-brand-orange-light",
      glow: "shadow-brand-orange/25",
    },
    {
      id: 6,
      title: "Compliance & Security Automation",
      description: "Automated compliance checks and security protocols",
      icon: Shield,
      features: ["Compliance monitoring", "Security alerts", "Audit trails"],
      gradient: "from-brand-orange to-brand-orange-light",
      glow: "shadow-brand-orange/25",
    },
  ];

  return (
    <section
      id="services"
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Enhanced AI Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit-services"
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
            <rect width="100%" height="100%" fill="url(#circuit-services)" />
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
        {/* AI-Inspired Header */}
        <div className="text-center mb-16">
          {/* AI Processing Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8 shadow-lg shadow-brand-orange/10">
            <Cpu className="w-5 h-5 text-brand-orange mr-3 animate-pulse" />
            <span className="text-brand-orange font-medium">
              AI-Powered Solutions
            </span>
            <div className="w-2 h-2 bg-brand-orange rounded-full ml-3 animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-brand-orange">AI Services</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Streamline your business with cutting-edge AI automation solutions
          </p>

          {/* AI Flow Indicator */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-200/50 dark:bg-gray-800/50 rounded-full border border-gray-300/50 dark:border-gray-700/50 backdrop-blur-sm">
              <Brain className="w-4 h-4 text-brand-orange" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Input
              </span>
            </div>
            <div className="w-5 h-5 text-brand-orange animate-pulse">→</div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-brand-orange/20 rounded-full border border-brand-orange/50 backdrop-blur-sm shadow-lg shadow-brand-orange/20">
              <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
              <span className="text-sm text-gray-900 dark:text-white font-medium">
                AI Processing
              </span>
            </div>
            <div className="w-5 h-5 text-brand-orange animate-pulse">→</div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-200/50 dark:bg-gray-800/50 rounded-full border border-gray-300/50 dark:border-gray-700/50 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-brand-orange" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Output
              </span>
            </div>
          </div>
        </div>

        {/* AI-Inspired Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/10 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* AI Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-brand-orange/40 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-brand-orange/30 rounded-full animate-pulse animation-delay-300" />
                  <div className="absolute top-1/2 right-2 w-1 h-1 bg-brand-orange/50 rounded-full animate-pulse animation-delay-600" />
                </div>

                {/* Icon with Brand Orange Background */}
                <div
                  className={`w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-brand-orange/25 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Title with Brand Orange Text */}
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features with Brand Orange Styling */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <div className="w-3 h-3 bg-brand-orange rounded-full mr-2 flex-shrink-0 shadow-sm shadow-brand-orange/25" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-orange/20 transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Tools & Apps Marquee */}
        <div className="mb-16">
          {/* Marquee Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-6">
              <Network className="w-5 h-5 text-brand-orange mr-3 animate-pulse" />
              <span className="text-brand-orange font-semibold">
                Integration Ecosystem
              </span>
              <div className="w-2 h-2 bg-brand-orange rounded-full ml-3 animate-pulse" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Plug AI into your{" "}
              <span className="text-brand-orange">existing data</span>
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We integrate AI automation with your current platforms and
              workflows
            </p>
          </div>

          {/* Marquee Container with Shadow Fade */}
          <div className="relative overflow-hidden bg-gray-900/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-200/20 dark:border-gray-700/20">
            {/* Left Shadow Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900/20 via-gray-900/10 to-transparent dark:from-gray-800/20 dark:via-gray-800/10 z-10 pointer-events-none" />

            {/* Right Shadow Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900/20 via-gray-900/10 to-transparent dark:from-gray-800/20 dark:via-gray-800/10 z-10 pointer-events-none" />

            {/* Marquee Track */}
            <div className="flex animate-marquee">
              {/* First Row */}
              <div className="flex items-center space-x-6 py-8 px-8 min-w-max">
                {/* Data Integration & Automation Tools */}
                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-brand-orange/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 text-brand-orange" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors">
                    Client Data
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
                    Data APIs
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-500 transition-colors">
                    CRM Data
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-red-500 transition-colors">
                    Sales Data
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-500 transition-colors">
                    Marketing Data
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-yellow-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-yellow-500 transition-colors">
                    Analytics Data
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-indigo-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 transition-colors">
                    Cloud Storage
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-teal-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-teal-500 transition-colors">
                    Database
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <Network className="w-4 h-4 text-pink-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors">
                    Webhooks
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition-colors">
                    AI Models
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 text-cyan-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-cyan-500 transition-colors">
                    Automation
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 transition-colors">
                    Workflows
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-violet-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-violet-500 transition-colors">
                    Real-time
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-rose-500 transition-colors">
                    Integration
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-sky-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-sky-500 transition-colors">
                    Results
                  </span>
                </div>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="flex items-center space-x-6 py-8 px-8 min-w-max">
                {/* Data Integration & Automation Tools */}
                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-brand-orange/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 text-brand-orange" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors">
                    Client Data
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
                    Data APIs
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-500 transition-colors">
                    CRM Data
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-red-500 transition-colors">
                    Sales Data
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-500 transition-colors">
                    Marketing Data
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-yellow-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-yellow-500 transition-colors">
                    Analytics Data
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-indigo-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 transition-colors">
                    Cloud Storage
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-teal-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-teal-500 transition-colors">
                    Database
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <Network className="w-4 h-4 text-pink-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors">
                    Webhooks
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition-colors">
                    AI Models
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 text-cyan-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-cyan-500 transition-colors">
                    Automation
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 transition-colors">
                    Workflows
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-violet-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-violet-500 transition-colors">
                    Real-time
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-rose-500 transition-colors">
                    Integration
                  </span>
                </div>

                <div className="flex items-center space-x-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-sky-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-sky-500 transition-colors">
                    Results
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Browse All Integrations Button */}
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm inline-flex items-center space-x-2">
              <Network className="w-4 h-4" />
              <span>Start Data Integration</span>
            </button>
          </div>
        </div>

        {/* AI-Inspired CTA */}
        <div className="text-center">
          <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-brand-orange/10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

            {/* Floating AI Elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-brand-orange/30 rounded-full animate-pulse" />
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-brand-orange/40 rounded-full animate-pulse animation-delay-300" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-orange/20">
                <Brain className="w-10 h-10 text-brand-orange animate-pulse" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Ready to <span className="text-brand-orange">Automate</span>?
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                Let's design a custom AI automation strategy for your business.
              </p>

              <button className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-opacity-50 text-sm inline-block">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
