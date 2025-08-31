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
    fullname: "",
    website: "",
    workEmail: "",
    usingAutomation: "",
    automationGoal: "",
    freeConsultation: "",
    budgetRange: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const automationOptions = [
    "Yes, extensively",
    "Yes, some basic automation",
    "No, not yet",
    "Just exploring options",
  ];

  const automationGoals = [
    "Streamline customer onboarding",
    "Automate lead generation & qualification",
    "Improve sales pipeline management",
    "Optimize administrative tasks",
    "Enhance customer communication",
    "Integrate multiple systems",
    "Other (please specify)",
  ];

  const consultationOptions = [
    "Yes, I'd love a free consultation",
    "Maybe, send me more information first",
    "Not right now, just exploring",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
    "Not sure yet",
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
          name: formData.fullname,
          email: formData.workEmail,
          website: formData.website || null,
          using_automation: formData.usingAutomation,
          automation_goal: formData.automationGoal,
          free_consultation: formData.freeConsultation,
          budget_range: formData.budgetRange || null,
        },
      ]);

      if (error) throw error;

      setSubmissionStatus("success");
      setFormData({
        fullname: "",
        website: "",
        workEmail: "",
        usingAutomation: "",
        automationGoal: "",
        freeConsultation: "",
        budgetRange: "",
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
            We'd love to help! Share your details in the form and we'll respond
            with the best solution for you.
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
                {/* Row 1: Fullname and Work Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="block text-base font-medium text-gray-900 dark:text-gray-300 mb-1 min-h-[1.5rem] flex items-center">
                      Fullname *
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-base text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                      placeholder="Fullname"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-base font-medium text-gray-900 dark:text-gray-300 mb-1 min-h-[1.5rem] flex items-center">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-base text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                      placeholder="Work Email"
                    />
                  </div>
                </div>

                {/* Row 2: Company Website */}
                <div>
                  <label className="block text-base font-medium text-gray-900 dark:text-gray-300 mb-1">
                    Company Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-base text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                    placeholder="Website URL"
                  />
                </div>

                {/* Row 3: Automation Usage and Goals */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="block text-base font-medium text-gray-900 dark:text-gray-300 mb-1 min-h-[1.5rem] flex items-center">
                      Are you currently using automation? *
                    </label>
                    <select
                      name="usingAutomation"
                      value={formData.usingAutomation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-base text-gray-900 dark:text-white"
                    >
                      <option value="">Select</option>
                      {automationOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-base font-medium text-gray-900 dark:text-gray-300 mb-1 min-h-[1.5rem] flex items-center">
                      What do you want to achieve with automation? *
                    </label>
                    <select
                      name="automationGoal"
                      value={formData.automationGoal}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-base text-gray-900 dark:text-white"
                    >
                      <option value="">Select</option>
                      {automationGoals.map((goal) => (
                        <option key={goal} value={goal}>
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Consultation and Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="block text-base font-medium text-gray-900 dark:text-gray-300 mb-1 min-h-[1.5rem] flex items-center">
                      Would you like to book a free consultation? *
                    </label>
                    <select
                      name="freeConsultation"
                      value={formData.freeConsultation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-base text-gray-900 dark:text-white"
                    >
                      <option value="">Select</option>
                      {consultationOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-base font-medium text-gray-900 dark:text-gray-300 mb-1 min-h-[1.5rem] flex items-center">
                      What is your budget range? *
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 backdrop-blur-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 text-base text-gray-900 dark:text-white"
                    >
                      <option value="">Select</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Get Started</span>
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
