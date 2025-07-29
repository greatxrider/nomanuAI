"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
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
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // Theme Toggle Component
  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-all duration-300 focus-ring group ${
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
            : "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-16 md:h-20">
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
              className="h-8 md:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 relative group focus-ring rounded-md px-2 py-1 ${
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

            <Link 
              href="#contact" 
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle - Mobile */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus-ring ${
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
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
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
                  : "border-gray-200 bg-white/90"
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
              <div className="px-4 pt-4">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Get Started
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
