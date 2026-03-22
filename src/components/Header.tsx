"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/lib/theme-context";
import { useScrollSmoother } from "@/lib/useScrollSmoother";
import {
  SunIcon,
  MoonIcon,
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
  GitHubIcon,
} from "@/components/icons/PremiumIcons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const { scrollToElement } = useScrollSmoother();

  // Optimized scroll handler with requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigation = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "FAQs", href: "/faq" },
  ];

  const servicesNav = [
    // Automation
    { name: "Sales CRM Management", href: "/salescrmmanagement", description: "Automate your sales pipeline", category: "Automation" },
    { name: "Client Intake & Onboarding", href: "/clientintake", description: "Streamline client onboarding", category: "Automation" },
    { name: "Project Management", href: "/projectmanagement", description: "Automate project workflows", category: "Automation" },
    { name: "Billing & Payment", href: "/billingpayment", description: "Simplify invoicing & payments", category: "Automation" },
    { name: "Social Media Content", href: "/socialmedia", description: "Schedule and automate content", category: "Automation" },
    // Web / Software
    { name: "Web Applications", href: "/webapplications", description: "Custom web app development", category: "Web / Software" },
    { name: "SaaS Development", href: "/saasdevelopment", description: "End-to-end SaaS products", category: "Web / Software" },
    { name: "Custom Software", href: "/customsoftware", description: "Tailor-made business software", category: "Web / Software" },
    { name: "E-Commerce Solutions", href: "/ecommercesolutions", description: "Online stores & marketplaces", category: "Web / Software" },
    { name: "API Development", href: "/apidevelopment", description: "Robust APIs & integrations", category: "Web / Software" },
    // Mobile Apps
    { name: "iOS Development", href: "/iosdevelopment", description: "Native iPhone & iPad apps", category: "Mobile Apps" },
    { name: "Android Development", href: "/androiddevelopment", description: "Native Android apps", category: "Mobile Apps" },
    { name: "Cross-Platform Apps", href: "/crossplatformapps", description: "React Native & Flutter", category: "Mobile Apps" },
    { name: "App Maintenance", href: "/appmaintenance", description: "Ongoing updates & support", category: "Mobile Apps" },
    { name: "UI/UX Design", href: "/uiuxdesign", description: "Research-backed interfaces", category: "Mobile Apps" },
    // AI Receptionists
    { name: "AI Virtual Receptionist", href: "/virtualreceptionist", description: "24/7 AI-powered reception", category: "AI Receptionists" },
    { name: "Intelligent Call Routing", href: "/callrouting", description: "Smart call distribution", category: "AI Receptionists" },
    { name: "AI Appointment Scheduling", href: "/appointmentscheduling", description: "AI-powered booking", category: "AI Receptionists" },
    { name: "AI Lead Qualification", href: "/leadqualification", description: "Automated lead scoring", category: "AI Receptionists" },
    { name: "24/7 Customer Support", href: "/customersupport247", description: "AI support across channels", category: "AI Receptionists" },
  ];

  const handleInternalLink = useCallback((href: string) => {
    if (href.startsWith("/#")) {
      const elementId = href.substring(2);
      scrollToElement(`#${elementId}`);
    }
  }, [scrollToElement]);

  // Premium Theme Toggle Button
  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 hex-cut-sm transition-all duration-300 ease-out-expo group
        hover:bg-ink/5 dark:hover:bg-white/10
        focus:outline-none focus:ring-2 focus:ring-brand/30 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5">
        {theme === "dark" ? (
          <SunIcon
            size={20}
            className="text-gray-300 group-hover:text-brand transition-colors duration-300
              group-hover:rotate-90 transform"
          />
        ) : (
          <MoonIcon
            size={20}
            className="text-ink-secondary group-hover:text-brand transition-colors duration-300
              group-hover:-rotate-12 transform"
          />
        )}
      </div>
    </button>
  );

  return (
    <header
      className={`fixed top-0 w-full z-[9999] transition-all duration-500 ease-out-expo ${
        isScrolled
          ? "bg-paper/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-ink/5 dark:border-white/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-brand/30 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            <div className="relative overflow-hidden">
              <Image
                src={
                  !mounted || theme === "dark"
                    ? "/assets/nomanuai-logo-white.png"
                    : "/assets/nomanuai-logo.png"
                }
                alt="NomanuAI"
                width={140}
                height={44}
                className="h-8 md:h-9 w-auto transition-transform duration-300 ease-out-expo group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Apple-style centered nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const isServices = item.name === "Services";

              if (isServices) {
                return (
                  <div key={item.name} className="relative">
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen((o) => !o)}
                      onBlur={() => setTimeout(() => setIsServicesOpen(false), 200)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[15px] font-medium
                        transition-all duration-300 ease-out-expo
                        ${isScrolled
                          ? "text-ink-secondary hover:text-ink dark:text-gray-300 dark:hover:text-white"
                          : "text-ink-secondary hover:text-ink dark:text-gray-300 dark:hover:text-white"
                        }
                        hover:bg-ink/5 dark:hover:bg-white/10
                        focus:outline-none focus:ring-2 focus:ring-brand/30`}
                      aria-haspopup="menu"
                      aria-expanded={isServicesOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon
                        size={16}
                        className={`transition-transform duration-300 ease-out-expo ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Hex Dropdown Menu */}
                    <div
                      className={`fixed left-1/2 -translate-x-1/2 top-16 mt-2 dropdown-hex overflow-hidden
                        bg-paper-elevated dark:bg-gray-900
                        border border-brand/10 dark:border-brand/15
                        shadow-xl dark:shadow-2xl
                        transition-all duration-300 ease-out-expo origin-top z-50
                        ${isServicesOpen
                          ? "opacity-100 scale-100 translate-y-0"
                          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        }`}
                      style={{ width: 'min(720px, 95vw)' }}
                    >
                      <div className="p-4 grid grid-cols-4 gap-4">
                        {(["Automation", "Web / Software", "Mobile Apps", "AI Receptionists"] as const).map((category) => (
                          <div key={category}>
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand mb-2 px-2">
                              {category}
                            </h4>
                            {servicesNav
                              .filter((svc) => svc.category === category)
                              .map((svc) => (
                              <Link
                                key={svc.name}
                                href={svc.href}
                                onClick={() => setIsServicesOpen(false)}
                                className="flex flex-col gap-0.5 px-2 py-2 hex-cut-sm
                                  transition-all duration-200 ease-out-expo
                                  hover:bg-brand/5 dark:hover:bg-brand/10
                                  group"
                              >
                                <span className="text-[13px] font-medium text-ink dark:text-white
                                  group-hover:text-brand transition-colors duration-200 leading-tight">
                                  {svc.name}
                                </span>
                                <span className="text-[11px] text-ink-tertiary dark:text-gray-500 leading-tight">
                                  {svc.description}
                                </span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="divider-honeycomb" />
                      <div className="p-2">
                        <button
                          onClick={() => {
                            setIsServicesOpen(false);
                            handleInternalLink("/#services");
                          }}
                          className="w-full px-4 py-2.5 hex-cut-sm text-center text-[14px] font-semibold
                            bg-brand text-white
                            hover:bg-brand-orange-dark
                            transition-all duration-200 ease-out-expo
                            shadow-brand hover:shadow-brand-lg"
                        >
                          View All Services
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }

              // Regular navigation items
              if (item.href.startsWith("/#")) {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleInternalLink(item.href)}
                    className={`px-4 py-2 hex-cut-sm text-[15px] font-medium
                      transition-all duration-300 ease-out-expo
                      ${isScrolled
                        ? "text-ink-secondary hover:text-ink dark:text-gray-300 dark:hover:text-white"
                        : "text-ink-secondary hover:text-ink dark:text-gray-300 dark:hover:text-white"
                      }
                      hover:bg-ink/5 dark:hover:bg-white/10
                      focus:outline-none focus:ring-2 focus:ring-brand/30`}
                  >
                    {item.name}
                  </button>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-[15px] font-medium
                    transition-all duration-300 ease-out-expo
                    ${isScrolled
                      ? "text-ink-secondary hover:text-ink dark:text-gray-300 dark:hover:text-white"
                      : "text-ink-secondary hover:text-ink dark:text-gray-300 dark:hover:text-white"
                    }
                    hover:bg-ink/5 dark:hover:bg-white/10
                    focus:outline-none focus:ring-2 focus:ring-brand/30`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />

              <a
                href="https://github.com/nomanuai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 hex-cut-sm transition-all duration-300 ease-out-expo
                  hover:bg-ink/5 dark:hover:bg-white/10
                  focus:outline-none focus:ring-2 focus:ring-brand/30 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                  group"
                aria-label="View our GitHub"
              >
                <GitHubIcon
                  size={20}
                  className="text-ink-secondary dark:text-gray-300 group-hover:text-ink dark:group-hover:text-white
                    transition-colors duration-300"
                />
              </a>

              <div className="w-1.5 h-6 clip-hex bg-brand/20 mx-2" />

              <Link
                href="https://calendar.app.google/ydhNfzf6HS7uVcUp7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-[14px] py-2.5 px-5"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 hex-cut-sm transition-all duration-300 ease-out-expo
                hover:bg-ink/5 dark:hover:bg-white/10
                focus:outline-none focus:ring-2 focus:ring-brand/30"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <CloseIcon size={24} className="text-ink dark:text-white" />
              ) : (
                <MenuIcon size={24} className="text-ink dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Premium slide-down animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out-expo ${
            isMobileMenuOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 border-t border-ink/5 dark:border-white/5">
            {navigation.map((item, index) => {
              if (item.name === "Services") {
                return (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleInternalLink("/#services");
                      }}
                      className="w-full text-left px-4 py-3 hex-cut-sm text-[16px] font-medium
                        text-ink dark:text-white
                        hover:bg-ink/5 dark:hover:bg-white/5
                        transition-all duration-200"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      Services
                    </button>
                    <div className="pl-4 space-y-2">
                      {(["Automation", "Web / Software", "Mobile Apps", "AI Receptionists"] as const).map((category) => (
                        <div key={category}>
                          <p className="px-4 pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-brand">
                            {category}
                          </p>
                          {servicesNav
                            .filter((svc) => svc.category === category)
                            .map((svc) => (
                            <Link
                              key={svc.name}
                              href={svc.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2 hex-cut-sm text-[14px]
                                text-ink-secondary dark:text-gray-400
                                hover:text-brand hover:bg-ink/5 dark:hover:bg-white/5
                                transition-all duration-200"
                            >
                              {svc.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              if (item.href.startsWith("/#")) {
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleInternalLink(item.href);
                    }}
                    className="w-full text-left px-4 py-3 hex-cut-sm text-[16px] font-medium
                      text-ink dark:text-white
                      hover:bg-ink/5 dark:hover:bg-white/5
                      transition-all duration-200"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </button>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 hex-cut-sm text-[16px] font-medium
                    text-ink dark:text-white
                    hover:bg-ink/5 dark:hover:bg-white/5
                    transition-all duration-200"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Action Buttons */}
            <div className="pt-4 mt-4 border-t border-ink/5 dark:border-white/5 space-y-3">
              <div className="flex items-center justify-between px-4">
                <span className="text-[14px] font-medium text-ink-secondary dark:text-gray-400">
                  Theme
                </span>
                <ThemeToggle />
              </div>
              <div className="px-4 space-y-2">
                <Link
                  href="https://calendar.app.google/ydhNfzf6HS7uVcUp7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center text-[15px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
                <Link
                  href="https://calendar.app.google/ydhNfzf6HS7uVcUp7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center text-[15px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
