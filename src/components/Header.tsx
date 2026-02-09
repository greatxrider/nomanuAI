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
    { name: "Sales CRM Management", href: "/salescrmmanagement", description: "Automate your sales pipeline" },
    { name: "Client Intake & Onboarding", href: "/clientintake", description: "Streamline client onboarding" },
    { name: "Project Management", href: "/projectmanagement", description: "Automate project workflows" },
    { name: "Billing & Payment", href: "/billingpayment", description: "Simplify invoicing & payments" },
    { name: "Social Media Content", href: "/socialmedia", description: "Schedule and automate content" },
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
                      className={`absolute left-0 mt-2 w-80 dropdown-hex overflow-hidden
                        bg-paper-elevated dark:bg-gray-900
                        border border-brand/10 dark:border-brand/15
                        shadow-xl dark:shadow-2xl
                        transition-all duration-300 ease-out-expo origin-top
                        ${isServicesOpen
                          ? "opacity-100 scale-100 translate-y-0"
                          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        }`}
                    >
                      <div className="p-2">
                        {servicesNav.map((svc, index) => (
                          <Link
                            key={svc.name}
                            href={svc.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex flex-col gap-0.5 px-4 py-3 hex-cut-sm
                              transition-all duration-200 ease-out-expo
                              hover:bg-brand/5 dark:hover:bg-brand/10
                              group"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <span className="text-[15px] font-medium text-ink dark:text-white
                              group-hover:text-brand transition-colors duration-200">
                              {svc.name}
                            </span>
                            <span className="text-[13px] text-ink-tertiary dark:text-gray-500">
                              {svc.description}
                            </span>
                          </Link>
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
                href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
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
            isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
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
                    <div className="pl-4 space-y-0.5">
                      {servicesNav.map((svc) => (
                        <Link
                          key={svc.name}
                          href={svc.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2.5 hex-cut-sm text-[14px]
                            text-ink-secondary dark:text-gray-400
                            hover:text-brand hover:bg-ink/5 dark:hover:bg-white/5
                            transition-all duration-200"
                        >
                          {svc.name}
                        </Link>
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
                  href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center text-[15px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
                <Link
                  href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
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
