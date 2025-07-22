"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Brain,
  Network,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "AI Lead Generation", href: "#services" },
      { name: "CRM Integration", href: "#services" },
      { name: "Process Automation", href: "#services" },
      { name: "Business Optimization", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Careers", href: "#contact" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "Case Studies", href: "#testimonials" },
      { name: "AI Blog", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      {/* AI Pattern Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-10 left-10 w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-brand-orange rounded-full animate-pulse animation-delay-200"></div>
        <div className="absolute bottom-10 left-20 w-2 h-2 bg-brand-orange rounded-full animate-pulse animation-delay-400"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container-width py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info with AI Enhancement */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6 group">
              <Image
                src="/assets/nomanuai-logo.png"
                alt="NomanuAI"
                width={120}
                height={38}
                className="h-9 w-auto group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </Link>

            <div className="flex items-center space-x-2 mb-6">
              <Brain className="w-5 h-5 text-brand-orange animate-pulse" />
              <span className="text-sm font-medium text-gray-300">
                AI-Powered Automation
              </span>
            </div>

            <p className="text-gray-400 mb-8 body-md leading-relaxed">
              Empowering businesses with{" "}
              <span className="text-brand-orange font-semibold">
                intelligent automation
              </span>
              . Transform your operations and accelerate growth with our
              cutting-edge AI technology.
            </p>

            {/* Enhanced Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-400 hover:text-brand-orange transition-colors group">
                <div className="p-2 bg-gray-900 rounded-lg mr-3 group-hover:bg-brand-orange/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">hello@nomanuai.com</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-brand-orange transition-colors group">
                <div className="p-2 bg-gray-900 rounded-lg mr-3 group-hover:bg-brand-orange/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <div className="p-2 bg-gray-900 rounded-lg mr-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Serving clients worldwide</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Network className="w-5 h-5 text-brand-orange" />
              <h3 className="text-lg font-bold text-white">AI Services</h3>
            </div>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors duration-300 text-sm flex items-center group"
                  >
                    <div className="w-1 h-1 bg-brand-orange/50 rounded-full mr-3 group-hover:bg-brand-orange transition-colors"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-5 h-5 text-brand-orange animate-pulse" />
              <h3 className="text-lg font-bold text-white">Company</h3>
            </div>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors duration-300 text-sm flex items-center group"
                  >
                    <div className="w-1 h-1 bg-brand-orange/50 rounded-full mr-3 group-hover:bg-brand-orange transition-colors"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="w-5 h-5 text-brand-orange animate-pulse animation-delay-200" />
              <h3 className="text-lg font-bold text-white">Resources</h3>
            </div>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors duration-300 text-sm flex items-center group"
                  >
                    <div className="w-1 h-1 bg-brand-orange/50 rounded-full mr-3 group-hover:bg-brand-orange transition-colors"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900/50">
        <div className="container-width py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              <span>© {currentYear} NomanuAI. All rights reserved.</span>
              <div className="ml-3 flex items-center space-x-1">
                <span className="text-xs text-gray-500">Powered by</span>
                <Brain className="w-3 h-3 text-brand-orange animate-pulse" />
                <span className="text-xs text-brand-orange font-medium">
                  AI
                </span>
              </div>
            </p>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-brand-orange transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-brand-orange transition-colors"
              >
                Terms of Service
              </Link>
            </div>

            {/* Enhanced Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="group p-3 bg-brand-orange hover:bg-brand-orange-dark rounded-full transition-all duration-300 transform hover:-translate-y-1 focus-ring mt-4 md:mt-0 relative overflow-hidden"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange-light to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
