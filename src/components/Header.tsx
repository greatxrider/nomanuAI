"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun, Moon, Github } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-800"
            : "bg-gray-300/30 backdrop-blur-md shadow-lg border-b border-gray-200"
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 relative group focus-ring rounded-md px-2 py-1 text-lg ${
                  isScrolled
                    ? theme === "dark"
                      ? "text-white hover:text-brand-orange"
                      : "text-gray-800 hover:text-brand-orange"
                    : theme === "dark"
                    ? "text-white hover:text-brand-orange"
                    : "text-gray-800 hover:text-brand-orange"
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-brand-orange group-hover:w-[calc(100%-16px)] transition-all duration-300"></span>
              </Link>
            ))}

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
              href="/#contact"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Get Started
            </Link>
            <Link
              href="/#contact"
              className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle - Mobile */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 rounded-lg transition-colors focus-ring ${
                isScrolled
                  ? theme === "dark"
                    ? "hover:bg-gray-700 text-white"
                    : "hover:bg-gray-200 text-gray-800"
                  : theme === "dark"
                  ? "hover:bg-gray-800 text-white"
                  : "hover:bg-gray-200 text-gray-800"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-t backdrop-blur-md ${
              isScrolled
                ? theme === "dark"
                  ? "border-gray-800 bg-black/80"
                  : "border-gray-200 bg-gray-300/30"
                : theme === "dark"
                ? "border-gray-700 bg-black/70"
                : "border-gray-200 bg-white/70"
            }`}
          >
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 transition-colors duration-300 ${
                    theme === "dark"
                      ? "text-white hover:text-brand-orange"
                      : "text-gray-800 hover:text-brand-orange"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <a
                  href="https://github.com/nomanuai"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3 px-6 rounded-lg transition-all duration-300 text-center border border-gray-300 dark:border-gray-600 hover:border-brand-orange hover:text-brand-orange"
                >
                  <Github className="w-5 h-5 mr-2" />
                  <span className="font-medium">View Projects</span>
                </a>
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
