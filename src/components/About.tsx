"use client";

import {
  Cpu,
  Users2,
  Lightbulb,
  Zap,
  Sparkles,
  Brain,
  CircuitBoard,
  Network,
} from "lucide-react";

const About = () => {
  const stats = [
    { label: "Automation Projects", value: "50+", icon: Zap },
    { label: "Happy Clients", value: "20+", icon: Users2 },
    { label: "AI Solutions Deployed", value: "50+", icon: Lightbulb },
  ];

  const team = [
    { title: "AI Specialists", icon: Brain, description: "Expert in machine learning and AI algorithms" },
    { title: "Software Engineers", icon: Cpu, description: "Building robust automation systems" },
    { title: "AI Professionals", icon: CircuitBoard, description: "Creating intelligent business solutions" },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* AI Background Effects - Same as About section */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-orange rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8">
            <Brain className="w-5 h-5 text-brand-orange mr-3 animate-pulse" />
            <span className="text-brand-orange font-semibold">Meet Our Team</span>
            <div className="w-2 h-2 bg-brand-orange rounded-full ml-3 animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-brand-orange">NomanuAI</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of Filipino AI specialists, software engineers, and automation professionals. 
            Together, we transform complex business challenges into elegant AI-powered solutions that drive real results.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Team Introduction */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Filipino Excellence in AI
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our diverse team combines deep technical expertise with innovative problem-solving approaches. 
                We specialize in creating custom automation solutions that adapt to your unique business needs.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                From intelligent process automation to predictive analytics, we help businesses thrive in the digital age 
                with solutions that are both powerful and practical.
              </p>
            </div>

            {/* Team Roles */}
            <div className="space-y-4">
              {team.map((member, idx) => (
                <div
                  key={member.title}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-orange/10"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <member.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand-orange transition-colors duration-300">
                        {member.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="group text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-brand-orange mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Design */}
          <div className="relative">
            {/* AI Processing Visualization */}
            <div className="group relative bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-brand-orange/10 overflow-hidden">
              {/* Neural Network Pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 300 300">
                  <defs>
                    <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E56518" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#E56518" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="3" fill="url(#neuralGradient)" />
                  <circle cx="150" cy="50" r="3" fill="url(#neuralGradient)" />
                  <circle cx="250" cy="50" r="3" fill="url(#neuralGradient)" />
                  <circle cx="50" cy="150" r="3" fill="url(#neuralGradient)" />
                  <circle cx="150" cy="150" r="3" fill="url(#neuralGradient)" />
                  <circle cx="250" cy="150" r="3" fill="url(#neuralGradient)" />
                  <circle cx="50" cy="250" r="3" fill="url(#neuralGradient)" />
                  <circle cx="150" cy="250" r="3" fill="url(#neuralGradient)" />
                  <circle cx="250" cy="250" r="3" fill="url(#neuralGradient)" />
                  <path d="M50,50 L150,50 L250,50" stroke="url(#neuralGradient)" strokeWidth="1" fill="none" />
                  <path d="M50,150 L150,150 L250,150" stroke="url(#neuralGradient)" strokeWidth="1" fill="none" />
                  <path d="M50,250 L150,250 L250,250" stroke="url(#neuralGradient)" strokeWidth="1" fill="none" />
                  <path d="M50,50 L50,150 L50,250" stroke="url(#neuralGradient)" strokeWidth="1" fill="none" />
                  <path d="M150,50 L150,150 L150,250" stroke="url(#neuralGradient)" strokeWidth="1" fill="none" />
                  <path d="M250,50 L250,150 L250,250" stroke="url(#neuralGradient)" strokeWidth="1" fill="none" />
                </svg>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-orange/25 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  AI-Powered Solutions
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  We transform complex business processes into intelligent, automated workflows. 
                  Our solutions adapt and learn, becoming more efficient over time.
                </p>

                <div className="space-y-3">
                  {["Intelligent Automation", "Custom AI Solutions", "Process Optimization", "Data Intelligence"].map((solution, idx) => (
                    <div
                      key={solution}
                      className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-600/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <Sparkles className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating AI Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-brand-orange/40 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-brand-orange/40 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 right-2 w-1 h-1 bg-brand-orange/50 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Sparkles className="w-5 h-5 mr-2" />
            Ready to Transform Your Business?
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
