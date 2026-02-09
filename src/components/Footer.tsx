"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { useTheme } from "@/lib/theme-context";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowUpIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  NetworkIcon,
  SparkleIcon,
  BrainIcon,
} from "@/components/icons/PremiumIcons";

const Footer = () => {
  const { theme, mounted } = useTheme();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Sales CRM Management", href: "/salescrmmanagement" },
      { name: "Client Intake & Onboarding", href: "/clientintake" },
      { name: "Project Management", href: "/projectmanagement" },
      { name: "Billing & Payment", href: "/billingpayment" },
      { name: "Social Media Content", href: "/socialmedia" },
    ],
    company: [
      { name: "About Us", href: "/aboutus" },
      { name: "Our Team", href: "/aboutus" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "#contact" },
      { name: "Security Policy", href: "/security-policy" },
    ],
    resources: [
      { name: "Case Studies", href: "/#projects" },
      { name: "Blog", href: "/blog" },
      { name: "FAQs", href: "/faq" },
      { name: "Support", href: "#contact" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/nomanuai", icon: GitHubIcon },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/107854474/", icon: LinkedInIcon },
    { name: "Twitter", href: "https://x.com/nomanuai98", icon: TwitterIcon },
    { name: "Instagram", href: "https://www.instagram.com/nomanuai/", icon: InstagramIcon },
    { name: "Facebook", href: "https://www.facebook.com/people/NomanuAi/61578373473028/", icon: FacebookIcon },
  ];

  return (
    <footer
      ref={ref}
      className="relative bg-paper dark:bg-gray-950"
    >
      {/* Honeycomb Divider */}
      <div className="divider-honeycomb" />

      {/* Main Footer Content */}
      <div
        className={`container-width py-16 md:py-20 transition-all duration-1000 ease-out-expo ${
          isIntersecting
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <Image
                src={
                  !mounted || theme === "dark"
                    ? "/assets/nomanuai-logo-white.png"
                    : "/assets/nomanuai-logo.png"
                }
                alt="NomanuAI"
                width={120}
                height={38}
                className="h-8 w-auto transition-transform duration-300 ease-out-expo group-hover:scale-105"
              />
            </Link>

            <p className="text-body text-ink-secondary dark:text-gray-400 mb-6 max-w-sm">
              Empowering businesses with{" "}
              <span className="text-brand font-medium">intelligent automation</span>.
              Transform your operations and accelerate growth with our cutting-edge
              AI technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a
                href="mailto:consulting@nomanuai.com"
                className="flex items-center gap-3 text-[14px] text-ink-secondary dark:text-gray-400
                  hover:text-brand transition-colors duration-200 group"
              >
                <div className="w-8 h-8 clip-hex bg-ink/5 dark:bg-white/5 flex items-center justify-center
                  group-hover:bg-brand/10 transition-colors duration-200">
                  <MailIcon size={16} className="text-ink-tertiary dark:text-gray-500 group-hover:text-brand" />
                </div>
                <span>consulting@nomanuai.com</span>
              </a>
              <a
                href="tel:+639759483289"
                className="flex items-center gap-3 text-[14px] text-ink-secondary dark:text-gray-400
                  hover:text-brand transition-colors duration-200 group"
              >
                <div className="w-8 h-8 clip-hex bg-ink/5 dark:bg-white/5 flex items-center justify-center
                  group-hover:bg-brand/10 transition-colors duration-200">
                  <PhoneIcon size={16} className="text-ink-tertiary dark:text-gray-500 group-hover:text-brand" />
                </div>
                <span>+63 975 948 3289</span>
              </a>
              <div className="flex items-center gap-3 text-[14px] text-ink-tertiary dark:text-gray-500">
                <div className="w-8 h-8 clip-hex bg-ink/5 dark:bg-white/5 flex items-center justify-center">
                  <MapPinIcon size={16} />
                </div>
                <span>Serving clients worldwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 clip-hex bg-ink/5 dark:bg-white/5
                      flex items-center justify-center
                      hover:bg-brand hover:text-white
                      text-ink-tertiary dark:text-gray-500
                      transition-all duration-300 ease-out-expo"
                    aria-label={social.name}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="flex items-center gap-2 text-[14px] font-semibold text-ink dark:text-white mb-5 uppercase tracking-wider">
              <NetworkIcon size={16} className="text-brand" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-ink-secondary dark:text-gray-400
                      hover:text-brand transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="flex items-center gap-2 text-[14px] font-semibold text-ink dark:text-white mb-5 uppercase tracking-wider">
              <SparkleIcon size={16} className="text-brand" />
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-ink-secondary dark:text-gray-400
                      hover:text-brand transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="flex items-center gap-2 text-[14px] font-semibold text-ink dark:text-white mb-5 uppercase tracking-wider">
              <BrainIcon size={16} className="text-brand" />
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-ink-secondary dark:text-gray-400
                      hover:text-brand transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 text-[13px] py-2.5 px-5 inline-block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="divider-honeycomb" />
      <div className="">
        <div className="container-width py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-[13px] text-ink-tertiary dark:text-gray-500">
              <span>&copy; {currentYear} NomanuAI. All rights reserved.</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline-flex items-center gap-1">
                Powered by
                <BrainIcon size={12} className="text-brand" />
                <span className="text-brand font-medium">AI</span>
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-[13px]">
              <Link
                href="/privacy"
                className="text-ink-tertiary dark:text-gray-500 hover:text-brand transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/security-policy"
                className="text-ink-tertiary dark:text-gray-500 hover:text-brand transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>

            {/* Scroll to Top - Hex shaped */}
            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 clip-hex bg-brand text-white
                flex items-center justify-center
                hover:bg-brand-orange-dark
                transition-all duration-300 ease-out-expo
                hover:-translate-y-1 hover:shadow-brand
                focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUpIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
