"use client";

import {
  Bot,
  Users,
  Zap,
  BarChart3,
  MessageSquare,
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Brain,
  Network,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "lead-generation",
      title: "AI Lead Generation",
      description:
        "Automate lead qualification, scoring, and nurturing with intelligent AI systems that work 24/7.",
      icon: Users,
      gradient: "from-blue-500 to-cyan-400",
      features: [
        "Automated lead scoring",
        "Smart qualification flows",
        "Multi-channel nurturing",
        "Real-time analytics",
      ],
      price: "Starting at $2,500/month",
    },
    {
      id: "crm-integration",
      title: "CRM Integration & Automation",
      description:
        "Seamlessly connect and automate your CRM workflows to eliminate manual data entry and improve efficiency.",
      icon: BarChart3,
      gradient: "from-purple-500 to-pink-400",
      features: [
        "Data sync automation",
        "Pipeline management",
        "Follow-up automation",
        "Custom integrations",
      ],
      price: "Starting at $1,800/month",
    },
    {
      id: "client-onboarding",
      title: "Client Onboarding Automation",
      description:
        "Streamline your client onboarding process with intelligent workflows and automated communications.",
      icon: Bot,
      gradient: "from-green-500 to-emerald-400",
      features: [
        "Automated welcome sequences",
        "Document collection",
        "Progress tracking",
        "Personalized experiences",
      ],
      price: "Starting at $2,000/month",
    },
    {
      id: "communication",
      title: "AI Communication Systems",
      description:
        "Implement intelligent chatbots and automated communication systems for instant customer support.",
      icon: MessageSquare,
      gradient: "from-orange-500 to-red-400",
      features: [
        "24/7 AI chatbots",
        "Multi-language support",
        "Intent recognition",
        "Human handoff protocols",
      ],
      price: "Starting at $1,500/month",
    },
    {
      id: "process-optimization",
      title: "Business Process Optimization",
      description:
        "Analyze and optimize your business processes with AI-driven insights and automation recommendations.",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-400",
      features: [
        "Process analysis",
        "Bottleneck identification",
        "Automation recommendations",
        "Performance monitoring",
      ],
      price: "Starting at $3,000/month",
    },
    {
      id: "compliance",
      title: "Compliance & Security Automation",
      description:
        "Ensure regulatory compliance and data security with automated monitoring and reporting systems.",
      icon: Shield,
      gradient: "from-indigo-500 to-purple-400",
      features: [
        "Compliance monitoring",
        "Automated reporting",
        "Security protocols",
        "Risk assessment",
      ],
      price: "Starting at $2,200/month",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-800">
      <div className="container-width">
        {/* AI-Inspired Section Header */}
        <div className="text-center mb-20">
          {/* AI Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-full backdrop-blur-sm mb-6">
            <Brain className="w-4 h-4 text-brand-orange mr-2 animate-pulse" />
            <span className="text-sm font-medium text-gray-200">
              AI-Powered Solutions
            </span>
            <Sparkles className="w-4 h-4 text-brand-orange ml-2 animate-pulse animation-delay-200" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="block">Intelligent</span>
            <span className="block bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
              Automation Services
            </span>
          </h2>

          <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Transform your business operations with our comprehensive suite of
            <span className="text-brand-orange font-semibold">
              {" "}
              AI automation solutions
            </span>{" "}
            designed for modern enterprises.
          </p>

          {/* Neural Network Divider */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent"></div>
              <Network className="w-4 h-4 text-brand-orange animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent"></div>
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse animation-delay-200"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-gray-700/30 backdrop-blur-sm border border-gray-600 hover:border-brand-orange/50 rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Background Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* AI Node Decoration */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-brand-orange/30 rounded-full group-hover:bg-brand-orange group-hover:animate-pulse transition-all duration-300"></div>
                <div className="absolute top-6 right-8 w-1 h-1 bg-brand-orange/20 rounded-full group-hover:bg-brand-orange/60 group-hover:animate-pulse transition-all duration-300 animation-delay-200"></div>

                {/* Enhanced Icon Container */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gray-700/50 border border-gray-600 rounded-2xl flex items-center justify-center group-hover:border-brand-orange/50 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-10 h-10 text-brand-orange group-hover:animate-pulse transition-all duration-300" />
                  </div>
                  {/* Neural connection */}
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border border-brand-orange/30 rounded-full group-hover:border-brand-orange group-hover:animate-pulse transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-brand-orange transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-base md:text-lg mb-6 text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Enhanced Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-200 group-hover:text-gray-100 transition-colors duration-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center mr-3 group-hover:bg-brand-orange/30 group-hover:border-brand-orange transition-all duration-300">
                          <CheckCircle className="w-3 h-3 text-brand-orange" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing with AI Enhancement */}
                  <div className="mb-6 p-4 bg-gray-700/20 rounded-lg border border-gray-600/30 group-hover:border-brand-orange/30 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-brand-orange font-bold text-lg">
                        {service.price}
                      </span>
                      <Sparkles className="w-4 h-4 text-brand-orange/60 group-hover:text-brand-orange group-hover:animate-pulse transition-all duration-300" />
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <button className="w-full group/btn relative overflow-hidden border-2 border-gray-600 text-gray-200 hover:border-brand-orange hover:text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-opacity-50 backdrop-blur-sm">
                    <span className="relative z-10 flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-brand-orange/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI-Enhanced Section Divider */}
        <div className="flex justify-center items-center space-x-4 mb-16">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-brand-orange/50"></div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
            <Brain className="w-6 h-6 text-brand-orange animate-pulse animation-delay-200" />
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse animation-delay-400"></div>
          </div>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-brand-orange/50"></div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-gray-700/20 rounded-2xl p-12 border border-gray-600/30 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gray-700/50 rounded-full border border-gray-600">
                <Network className="w-8 h-8 text-brand-orange animate-pulse" />
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Need a{" "}
              <span className="text-brand-orange">Custom AI Solution</span>?
            </h3>

            <p className="text-lg md:text-xl mb-10 text-gray-200 leading-relaxed">
              Every business is unique. Let's discuss your specific needs and
              create a tailored{" "}
              <span className="text-brand-orange font-semibold">
                AI automation strategy
              </span>{" "}
              that perfectly fits your goals and workflow.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-opacity-50 text-lg group"
            >
              <Brain className="w-5 h-5 mr-3 group-hover:animate-pulse" />
              Schedule AI Consultation
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
