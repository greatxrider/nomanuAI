"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Sparkles,
  Brain,
  Zap,
  Users,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const services = [
    "AI Lead Generation",
    "CRM Integration & Automation",
    "Client Onboarding Automation",
    "AI Communication Systems",
    "Business Process Optimization",
    "Compliance & Security Automation",
    "Custom AI Solution",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
  ];

  const timelines = [
    "ASAP",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Just exploring",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("idle");

    try {
      const { error } = await supabase.from("service_inquiries").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          service_type: formData.serviceType,
          budget_range: formData.budget || null,
          timeline: formData.timeline || null,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmissionStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Enhanced AI Background - Same as Home section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit-contact"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M20,20 L80,20 L80,80 L20,80 Z"
                  fill="none"
                  stroke="#E56518"
                  strokeWidth="1"
                />
                <circle cx="20" cy="20" r="3" fill="#E56518" />
                <circle cx="80" cy="20" r="3" fill="#E56518" />
                <circle cx="80" cy="80" r="3" fill="#E56518" />
                <circle cx="20" cy="80" r="3" fill="#E56518" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-contact)" />
          </svg>
        </div>

        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {[
            { left: "15%", top: "20%", delay: "0s", duration: "4s" },
            { left: "85%", top: "30%", delay: "0.5s", duration: "3.5s" },
            { left: "25%", top: "70%", delay: "1s", duration: "4.5s" },
            { left: "75%", top: "60%", delay: "1.5s", duration: "3s" },
            { left: "45%", top: "15%", delay: "2s", duration: "4.2s" },
            { left: "65%", top: "80%", delay: "2.5s", duration: "3.8s" },
            { left: "10%", top: "50%", delay: "3s", duration: "4.1s" },
            { left: "90%", top: "45%", delay: "3.5s", duration: "3.7s" },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-brand-orange rounded-full animate-float opacity-30"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-brand-orange/8 rounded-full filter blur-3xl animate-pulse animation-delay-300" />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8">
            <Brain className="w-5 h-5 text-brand-orange mr-3 animate-pulse" />
            <span className="text-brand-orange font-semibold">
              Get Started Today
            </span>
            <div className="w-2 h-2 bg-brand-orange rounded-full ml-3 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's <span className="text-brand-orange">Transform</span> Your
            Business
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to automate your processes and accelerate growth? Get in touch
            with our AI automation experts today.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column - Contact Info & AI Features */}
          <div className="space-y-8">
            {/* AI-Powered Contact Card */}
            <div className="group bg-gray-100/80 dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/50 dark:border-white/20 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-orange/10">
              <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand-orange transition-colors duration-300 mb-4">
                AI-Powered Consultation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our AI specialists analyze your business needs and design custom
                automation solutions that deliver measurable results.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Email
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      consulting@nomanuai.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Phone
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      +63 975 948 3289
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Location
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Serving clients worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group text-center bg-gray-100/80 dark:bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-gray-300/50 dark:border-white/20 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  Fast Response
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  2-4 hours during business days
                </div>
              </div>

              <div className="group text-center bg-gray-100/80 dark:bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-gray-300/50 dark:border-white/20 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  Expert Team
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  AI specialists & engineers
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="group bg-gray-100/80 dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/50 dark:border-white/20 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-orange/10 h-full flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center mr-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand-orange transition-colors duration-300">
                  Start Your Project
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Tell us about your automation needs
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              {/* Form Fields Container */}
              <div className="flex-1 space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-sm text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-sm text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-sm text-white placeholder-gray-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-sm text-white placeholder-gray-400"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    aria-label="Select service type"
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-sm text-white"
                  >
                    <option value="" className="text-gray-400">
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="text-gray-900"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget & Timeline Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      aria-label="Select budget range"
                      className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-sm text-white"
                    >
                      <option value="" className="text-gray-400">
                        Select budget
                      </option>
                      {budgetRanges.map((budget) => (
                        <option
                          key={budget}
                          value={budget}
                          className="text-gray-900"
                        >
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      aria-label="Select timeline"
                      className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-sm text-white"
                    >
                      <option value="" className="text-gray-400">
                        Select timeline
                      </option>
                      {timelines.map((timeline) => (
                        <option
                          key={timeline}
                          value={timeline}
                          className="text-gray-900"
                        >
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 resize-none text-sm text-white placeholder-gray-400"
                    placeholder="Tell us about your automation needs..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submissionStatus === "success" && (
                <div className="p-3 bg-green-900/20 border border-green-700 rounded-lg">
                  <p className="text-green-300 text-xs">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you within 2-4 hours.
                  </p>
                </div>
              )}
              {submissionStatus === "error" && (
                <div className="p-3 bg-red-900/20 border border-red-700 rounded-lg">
                  <p className="text-red-300 text-xs">
                    Sorry, there was an error sending your message. Please try
                    again or contact us directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
