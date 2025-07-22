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
  ArrowDown,
  Workflow,
  Target,
  TrendingUp,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "lead-generation",
      title: "AI Lead Generation",
      description:
        "Transform prospects into qualified leads with intelligent automation that works around the clock.",
      icon: Users,
      gradient: "from-blue-500 to-cyan-400",
      features: [
        "Automated lead scoring",
        "Smart qualification flows",
        "Multi-channel nurturing",
        "Real-time analytics",
      ],
      category: "Acquisition",
      flow: "Input → AI Analysis → Qualified Leads",
    },
    {
      id: "crm-integration",
      title: "CRM Integration & Automation",
      description:
        "Seamlessly sync and automate your customer data across all platforms without manual intervention.",
      icon: BarChart3,
      gradient: "from-purple-500 to-pink-400",
      features: [
        "Data sync automation",
        "Pipeline management",
        "Follow-up automation",
        "Custom integrations",
      ],
      category: "Management",
      flow: "Data → AI Processing → Synchronized CRM",
    },
    {
      id: "client-onboarding",
      title: "Client Onboarding Automation",
      description:
        "Create seamless onboarding experiences that guide clients from signup to success automatically.",
      icon: Bot,
      gradient: "from-green-500 to-emerald-400",
      features: [
        "Automated welcome sequences",
        "Document collection",
        "Progress tracking",
        "Personalized experiences",
      ],
      category: "Experience",
      flow: "New Client → AI Workflow → Onboarded",
    },
    {
      id: "communication",
      title: "AI Communication Systems",
      description:
        "Deploy intelligent chatbots and communication systems that provide instant, human-like customer support.",
      icon: MessageSquare,
      gradient: "from-orange-500 to-red-400",
      features: [
        "24/7 AI chatbots",
        "Multi-language support",
        "Intent recognition",
        "Human handoff protocols",
      ],
      category: "Support",
      flow: "Query → AI Understanding → Instant Response",
    },
    {
      id: "process-optimization",
      title: "Business Process Optimization",
      description:
        "Analyze, optimize, and automate your business processes with AI-driven insights and recommendations.",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-400",
      features: [
        "Process analysis",
        "Bottleneck identification",
        "Automation recommendations",
        "Performance monitoring",
      ],
      category: "Optimization",
      flow: "Current Process → AI Analysis → Optimized Workflow",
    },
    {
      id: "compliance",
      title: "Compliance & Security Automation",
      description:
        "Ensure regulatory compliance and data security with automated monitoring and intelligent reporting systems.",
      icon: Shield,
      gradient: "from-indigo-500 to-purple-400",
      features: [
        "Compliance monitoring",
        "Automated reporting",
        "Security protocols",
        "Risk assessment",
      ],
      category: "Security",
      flow: "Data → AI Monitoring → Compliant Operations",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-gray-100 dark:bg-gray-900"
    >
      <div className="container-width">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          {/* AI Processing Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8">
            <Workflow className="w-5 h-5 text-brand-orange mr-3 animate-pulse" />
            <span className="text-brand-orange font-medium">
              AI Automation Pipeline
            </span>
            <div className="w-2 h-2 bg-brand-orange rounded-full ml-3 animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block text-gray-900 dark:text-white">
              Transform Your
            </span>
            <span className="block bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
              Business Operations
            </span>
          </h2>

          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
            Streamline every aspect of your business with our comprehensive
            <span className="text-brand-orange font-semibold">
              {" "}
              AI automation solutions
            </span>
          </p>

          {/* AI Flow Visualization */}
          <div className="flex justify-center items-center space-x-4 mb-16">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-800/50 rounded-full border border-gray-300 dark:border-gray-700">
              <Target className="w-4 h-4 text-brand-orange" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Input
              </span>
            </div>
            <ArrowRight className="w-6 h-6 text-brand-orange animate-pulse" />
            <div className="flex items-center space-x-2 px-4 py-2 bg-brand-orange/20 rounded-full border border-brand-orange/50">
              <Brain className="w-4 h-4 text-brand-orange animate-pulse" />
              <span className="text-sm text-gray-900 dark:text-white font-medium">
                AI Processing
              </span>
            </div>
            <ArrowRight className="w-6 h-6 text-brand-orange animate-pulse animation-delay-200" />
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-800/50 rounded-full border border-gray-300 dark:border-gray-700">
              <TrendingUp className="w-4 h-4 text-brand-orange" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Automated Output
              </span>
            </div>
          </div>
        </div>

        {/* Services Flow Layout */}
        <div className="relative">
          {/* Central AI Hub */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 rounded-full border-2 border-brand-orange/30 backdrop-blur-sm flex items-center justify-center">
              <div className="relative">
                <Brain className="w-12 h-12 text-brand-orange animate-pulse" />
                <div className="absolute inset-0 bg-brand-orange/20 rounded-full filter blur-xl animate-ping" />
              </div>
            </div>
          </div>

          {/* Services Grid with Alternating Layout */}
          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Service Content */}
                  <div className="flex-1 max-w-2xl">
                    <div className="group relative bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-brand-orange/50 rounded-3xl p-8 lg:p-12 transition-all duration-500 hover:scale-105">
                      {/* Category Badge */}
                      <div className="inline-flex items-center px-3 py-1 bg-brand-orange/10 border border-brand-orange/30 rounded-full mb-6">
                        <span className="text-xs font-medium text-brand-orange uppercase tracking-wide">
                          {service.category}
                        </span>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-brand-orange transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                        {service.description}
                      </p>

                      {/* Process Flow */}
                      <div className="bg-gray-100 dark:bg-gray-900/50 rounded-xl p-4 mb-6 border border-gray-200 dark:border-gray-600/30">
                        <div className="flex items-center justify-center text-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            Process Flow:
                          </span>
                          <span className="ml-2 text-brand-orange font-medium">
                            {service.flow}
                          </span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors"
                          >
                            <CheckCircle className="w-4 h-4 text-brand-orange mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <button className="group/btn w-full lg:w-auto inline-flex items-center justify-center bg-brand-orange/10 hover:bg-brand-orange text-brand-orange hover:text-white border border-brand-orange rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:scale-105">
                        <span>Explore {service.category}</span>
                        <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Main Icon Circle */}
                      <div
                        className={`w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-500 group`}
                      >
                        <IconComponent className="w-16 h-16 lg:w-20 lg:h-20 text-white group-hover:animate-pulse" />
                      </div>

                      {/* Orbiting Elements */}
                      <div className="absolute inset-0">
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-brand-orange/30 rounded-full animate-pulse" />
                        <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-brand-orange/20 rounded-full animate-pulse animation-delay-300" />
                        <div className="absolute top-1/2 -left-6 w-3 h-3 bg-brand-orange/40 rounded-full animate-pulse animation-delay-600" />
                      </div>

                      {/* Connection Lines to Center (Desktop only) */}
                      <div className="hidden lg:block absolute inset-0">
                        <svg className="w-full h-full opacity-20">
                          <line
                            x1={isEven ? "100%" : "0%"}
                            y1="50%"
                            x2={isEven ? "200%" : "-100%"}
                            y2="50%"
                            stroke="#E56518"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            className="animate-pulse"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Flow Arrow (Mobile) */}
                  {index < services.length - 1 && (
                    <div className="lg:hidden flex justify-center">
                      <ArrowDown className="w-8 h-8 text-brand-orange/50 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-20 text-center">
          {/* Divider */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-brand-orange/50" />
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-brand-orange animate-pulse" />
              <Network className="w-6 h-6 text-brand-orange animate-pulse animation-delay-200" />
              <Sparkles className="w-5 h-5 text-brand-orange animate-pulse animation-delay-400" />
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-brand-orange/50" />
          </div>

          {/* Custom Solution CTA */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-200/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-3xl p-12 border border-gray-300/30 dark:border-gray-600/30 backdrop-blur-sm">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-brand-orange/20 rounded-full border-2 border-brand-orange/30 flex items-center justify-center">
                <Brain className="w-10 h-10 text-brand-orange animate-pulse" />
              </div>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to{" "}
              <span className="text-brand-orange">Automate Everything</span>?
            </h3>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              Let's design a custom AI automation strategy that transforms your
              unique business processes into efficient, intelligent workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg group"
              >
                <Workflow className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                Start AI Transformation
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button className="inline-flex items-center border-2 border-brand-orange/30 bg-brand-orange/5 hover:bg-brand-orange/10 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm">
                <MessageSquare className="w-5 h-5 mr-3" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
