"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
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
              src="/assets/nomanuai-logo.png"
              alt="NomanuAI"
              width={140}
              height={44}
              className="h-8 md:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 relative group focus-ring rounded-md px-2 py-1 ${
                  isScrolled
                    ? "text-gray-700 hover:text-brand-orange"
                    : "text-white hover:text-brand-orange"
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-brand-orange group-hover:w-[calc(100%-16px)] transition-all duration-300"></span>
              </Link>
            ))}
            <Link href="#contact" className="btn-primary ml-6">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors focus-ring ${
              isScrolled
                ? "hover:bg-gray-100 text-gray-700"
                : "hover:bg-gray-800 text-white"
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
          <div
            className={`md:hidden border-t backdrop-blur-md ${
              isScrolled
                ? "border-gray-200 bg-white/95"
                : "border-gray-600 bg-gray-800/95"
            }`}
          >
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 font-medium transition-colors duration-300 rounded-lg mx-2 ${
                    isScrolled
                      ? "text-gray-700 hover:text-brand-orange hover:bg-gray-50"
                      : "text-white hover:text-brand-orange hover:bg-gray-700/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-2 pt-2">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full text-center"
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
