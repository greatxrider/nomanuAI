"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun, Moon, Github, ChevronDown } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { useScrollSmoother } from "@/lib/useScrollSmoother";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const { scrollToElement } = useScrollSmoother();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "FAQs", href: "/faq" },
  ];

  const servicesNav = [
    { name: "Sales CRM Management", href: "/salescrmmanagement" },
    { name: "Client Intake & Onboarding", href: "/clientintake" },
    { name: "Project Management", href: "/projectmanagement" },
    { name: "Billing & Payment", href: "/billingpayment" },
    { name: "Social Media Content", href: "/socialmedia" },
  ];

  // Handle smooth scrolling for internal links
  const handleInternalLink = (href: string) => {
    if (href.startsWith("/#")) {
      const elementId = href.substring(2); // Remove "/#"
      scrollToElement(`#${elementId}`);
    }
  };

  // Theme Toggle Component
  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className={`p-2.5 rounded-lg transition-all duration-300 focus-ring group ${
        isScrolled
          ? theme === "dark"
            ? "hover:bg-gray-700 text-gray-300 hover:text-brand-orange"
            : "hover:bg-gray-200 text-gray-700 hover:text-brand-orange"
          : theme === "dark"
          ? "hover:bg-gray-800 text-white hover:text-brand-orange"
          : "hover:bg-gray-200 text-gray-800 hover:text-brand-orange"
      }`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  );

  return (
    <header
      className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-800"
            : "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-[100px] md:h-[100px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={
                !mounted || theme === "dark"
                  ? "/assets/nomanuai-logo-white.png"
                  : "/assets/nomanuai-logo.png"
              }
              alt="NomanuAI"
              width={140}
              height={44}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const baseClass = `font-medium transition-colors duration-300 relative group focus-ring rounded-md px-2 py-1 text-lg ${
                isScrolled
                  ? theme === "dark"
                    ? "text-white hover:text-brand-orange"
                    : "text-gray-800 hover:text-brand-orange"
                  : theme === "dark"
                  ? "text-white hover:text-brand-orange"
                  : "text-gray-900 hover:text-brand-orange"
              }`;

              if (item.name === "Services") {
                return (
                  <div key={item.name} className="relative">
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen((o) => !o)}
                      className={`${baseClass} inline-flex items-center gap-1`}
                      aria-haspopup="menu"
                      aria-expanded={isServicesOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                      <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-brand-orange group-hover:w-[calc(100%-16px)] transition-all duration-300"></span>
                    </button>

                    {isServicesOpen && (
                      <div
                        className={`absolute left-0 mt-2 w-72 rounded-xl border shadow-lg z-50 ${
                          theme === "dark"
                            ? "bg-gray-900 border-gray-700"
                            : "bg-white border-gray-200"
                        }`}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <ul className="py-2">
                          {servicesNav.map((svc) => (
                            <li key={svc.name}>
                              <Link
                                href={svc.href}
                                onClick={() => setIsServicesOpen(false)}
                                className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${
                                  theme === "dark"
                                    ? "text-gray-200 hover:bg-gray-800 hover:text-brand-orange"
                                    : "text-gray-800 hover:bg-gray-100 hover:text-brand-orange"
                                }`}
                              >
                                {svc.name}
                              </Link>
                            </li>
                          ))}
                          <li className="mt-1 px-4">
                            <button
                              onClick={() => {
                                setIsServicesOpen(false);
                                handleInternalLink("/#services");
                              }}
                              className="block w-full text-center text-sm bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-2.5 px-3 rounded-lg transition-colors"
                            >
                              View all services
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }

              // Check if it's an internal anchor link or external page link
              if (item.href.startsWith("/#")) {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleInternalLink(item.href)}
                    className={baseClass}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-brand-orange group-hover:w-[calc(100%-16px)] transition-all duration-300"></span>
                  </button>
                );
              } else {
                return (
                  <Link key={item.name} href={item.href} className={baseClass}>
                    {item.name}
                    <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-brand-orange group-hover:w-[calc(100%-16px)] transition-all duration-300"></span>
                  </Link>
                );
              }
            })}

            {/* Theme Toggle - Desktop */}
            <ThemeToggle />

            {/* GitHub Projects Link */}
            <a
              href="https://github.com/nomanuai"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-lg transition-all duration-300 focus-ring group ${
                isScrolled
                  ? theme === "dark"
                    ? "hover:bg-gray-700 text-gray-300 hover:text-brand-orange"
                    : "hover:bg-gray-200 text-gray-700 hover:text-brand-orange"
                  : theme === "dark"
                  ? "hover:bg-gray-800 text-white hover:text-brand-orange"
                  : "hover:bg-gray-200 text-gray-800 hover:text-brand-orange"
              }`}
              aria-label="View our automation projects on GitHub"
              title="View our automation projects on GitHub"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Started
            </Link>
            <Link
              href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 focus-ring ${
              isScrolled
                ? theme === "dark"
                  ? "text-white hover:text-brand-orange"
                  : "text-gray-800 hover:text-brand-orange"
                : theme === "dark"
                ? "text-white hover:text-brand-orange"
                : "text-gray-900 hover:text-brand-orange"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                if (item.href.startsWith("/#")) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleInternalLink(item.href);
                      }}
                      className="block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors"
                    >
                      {item.name}
                    </button>
                  );
                } else {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors"
                    >
                      {item.name}
                    </Link>
                  );
                }
              })}
              <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between px-3">
                  <ThemeToggle />
                  <Link
                    href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
