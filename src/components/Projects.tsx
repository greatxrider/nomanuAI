"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  Zap,
  Users,
  TrendingUp,
  Shield,
  MessageCircle,
} from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "LeadGen AI Platform",
      description:
        "Automated lead generation system that captures and qualifies leads 24/7 using AI algorithms",
      category: "ai-automation",
      image: "/assets/project-leadgen.jpg",
      technologies: ["Python", "OpenAI API", "Zapier", "HubSpot"],
      results: [
        "300% increase in lead capture",
        "95% qualification accuracy",
        "24/7 automation",
      ],
      icon: Zap,
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "CRM Integration Hub",
      description:
        "Seamless integration between multiple CRM systems with automated data synchronization",
      category: "integrations",
      image: "/assets/project-crm.jpg",
      technologies: ["Node.js", "Salesforce API", "Pipedrive", "Webhooks"],
      results: [
        "100% data accuracy",
        "Real-time sync",
        "Reduced manual work by 80%",
      ],
      icon: Users,
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Client Onboarding System",
      description:
        "Automated client onboarding workflow with document processing and progress tracking",
      category: "workflow",
      image: "/assets/project-onboarding.jpg",
      technologies: ["React", "AWS Lambda", "Document AI", "Stripe"],
      results: [
        "50% faster onboarding",
        "Zero manual errors",
        "100% compliance",
      ],
      icon: TrendingUp,
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "AI Chatbot Platform",
      description:
        "Intelligent customer service chatbot with natural language processing capabilities",
      category: "ai-automation",
      image: "/assets/project-chatbot.jpg",
      technologies: ["Python", "NLP", "Dialogflow", "React"],
      results: [
        "90% customer satisfaction",
        "24/7 support",
        "60% cost reduction",
      ],
      icon: MessageCircle,
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Security Compliance Bot",
      description:
        "Automated compliance monitoring and security alert system for financial institutions",
      category: "security",
      image: "/assets/project-security.jpg",
      technologies: ["Python", "AWS", "SOC2", "Machine Learning"],
      results: [
        "100% compliance rate",
        "Real-time alerts",
        "Zero security breaches",
      ],
      icon: Shield,
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Process Optimization Suite",
      description:
        "Comprehensive business process automation with analytics and performance tracking",
      category: "workflow",
      image: "/assets/project-process.jpg",
      technologies: ["Node.js", "MongoDB", "Analytics", "Dashboard"],
      results: [
        "40% efficiency increase",
        "Real-time insights",
        "Scalable automation",
      ],
      icon: TrendingUp,
      link: "#",
      github: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ai-automation", label: "AI Automation" },
    { id: "integrations", label: "Integrations" },
    { id: "workflow", label: "Workflow" },
    { id: "security", label: "Security" },
  ];

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.category === activeFilter
  );

  return (
    <section
      id="projects"
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
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse mr-3" />
            <span className="text-sm font-medium text-brand-orange">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects We've{" "}
            <span className="text-brand-orange">Built</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of AI automation solutions that have
            transformed businesses across industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/25"
                  : "bg-gray-100 dark:bg-white/10 backdrop-blur-sm text-gray-700 dark:text-white hover:text-brand-orange border border-gray-200 dark:border-white/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-white/20 hover:border-brand-orange/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/10 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image Placeholder */}
                                 <div className="h-48 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center relative overflow-hidden">
                   <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center">
                     <IconComponent className="w-8 h-8 text-white" />
                   </div>
                  {/* Hover Overlay */}
                                     <div className="absolute inset-0 bg-brand-orange/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.link}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                                     <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                     {project.title}
                   </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                                                 <span
                           key={tech}
                           className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs rounded-full font-medium"
                         >
                           {tech}
                         </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Results
                    </h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                                                 <li
                           key={idx}
                           className="flex items-center text-xs text-gray-600 dark:text-gray-300"
                         >
                           <div className="w-2 h-2 bg-brand-orange rounded-full mr-2 flex-shrink-0" />
                           {result}
                         </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
                     <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-white/20 shadow-lg">
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
               Ready to Build Something Amazing?
             </h3>
             <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
               Let's discuss your project requirements and create a custom AI
               automation solution for your business.
             </p>
             <a
               href="#contact"
               className="inline-flex items-center bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
             >
               Start Your Project
               <ExternalLink className="w-4 h-4 ml-2" />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
