"use client";

import { useState } from "react";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  SendIcon,
  BrainIcon,
  ZapIcon,
  UsersIcon,
  MessageIcon,
} from "@/components/icons/PremiumIcons";
import { supabase } from "@/lib/supabase";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";

const Contact = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (!formData.fullname.trim()) {
      alert("Please enter your full name");
      return false;
    }
    if (!validateEmail(formData.workEmail)) {
      alert("Please enter a valid email address");
      return false;
    }
    if (!formData.usingAutomation) {
      alert("Please select your automation usage");
      return false;
    }
    if (!formData.automationGoal) {
      alert("Please select your automation goal");
      return false;
    }
    if (!formData.freeConsultation) {
      alert("Please select consultation preference");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionStatus("idle");

    try {
      const sanitizedData = {
        name: formData.fullname.trim().replace(/[<>]/g, ""),
        email: formData.workEmail.trim().toLowerCase(),
        website: formData.website
          ? formData.website.trim().replace(/[<>]/g, "")
          : null,
        using_automation: formData.usingAutomation,
        automation_goal: formData.automationGoal,
        free_consultation: formData.freeConsultation,
        budget_range: formData.budgetRange || null,
      };

      const { error } = await supabase
        .from("service_inquiries")
        .insert([sanitizedData]);

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
      ref={ref}
      id="contact"
      className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden"
    >
      {/* Pattern C - Paper with honeycomb background */}
      <img
        src="/assets/beeInspiration/5303586.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08] dark:opacity-15"
      />
      <div className="absolute inset-0 bg-paper/85 dark:bg-gray-950/80" />
      <DarkHoneycombBackground patternId="contact-honeycomb" />

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out-expo ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="heading-lg text-ink dark:text-white mb-4 text-balance">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            We'd love to help! Share your details and we'll respond with the
            best solution for you.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch transition-all duration-1000 ease-out-expo delay-200 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Column - Contact Info & Features */}
          <div className="space-y-6">
            {/* AI-Powered Contact Card */}
            <div className="card-glass group p-6 md:p-8">
              <div className="icon-hex w-12 h-12 mb-5">
                <BrainIcon size={24} className="text-white" />
              </div>

              <h3 className="text-xl font-semibold text-ink dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">
                AI-Powered Consultation
              </h3>
              <p className="text-body text-ink-secondary dark:text-gray-400 mb-6">
                Our AI specialists analyze your business needs and design custom
                automation solutions that deliver measurable results.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                <a
                  href="mailto:consulting@nomanuai.com"
                  className="flex items-center gap-4 p-4 hex-cut-sm bg-ink/5 dark:bg-white/5
                    hover:bg-brand/10 transition-all duration-300 group/item"
                >
                  <div className="w-12 h-12 clip-hex bg-brand/10 flex items-center justify-center
                    group-hover/item:bg-brand group-hover/item:text-white transition-all duration-300">
                    <MailIcon size={20} className="text-brand group-hover/item:text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink dark:text-white text-[15px]">
                      Email
                    </div>
                    <div className="text-[14px] text-ink-secondary dark:text-gray-400">
                      consulting@nomanuai.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+639759483289"
                  className="flex items-center gap-4 p-4 hex-cut-sm bg-ink/5 dark:bg-white/5
                    hover:bg-brand/10 transition-all duration-300 group/item"
                >
                  <div className="w-12 h-12 clip-hex bg-brand/10 flex items-center justify-center
                    group-hover/item:bg-brand group-hover/item:text-white transition-all duration-300">
                    <PhoneIcon size={20} className="text-brand group-hover/item:text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink dark:text-white text-[15px]">
                      Phone
                    </div>
                    <div className="text-[14px] text-ink-secondary dark:text-gray-400">
                      +63 975 948 3289
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 hex-cut-sm bg-ink/5 dark:bg-white/5">
                  <div className="w-12 h-12 clip-hex bg-brand/10 flex items-center justify-center">
                    <MapPinIcon size={20} className="text-brand" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink dark:text-white text-[15px]">
                      Location
                    </div>
                    <div className="text-[14px] text-ink-secondary dark:text-gray-400">
                      Serving clients worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-glass group p-5 text-center">
                <div className="icon-hex w-12 h-12 mx-auto mb-3">
                  <ZapIcon size={20} className="text-white" />
                </div>
                <div className="text-[14px] font-semibold text-ink dark:text-white mb-1">
                  Fast Response
                </div>
                <div className="text-[13px] text-ink-tertiary dark:text-gray-500">
                  2-4 hours during business days
                </div>
              </div>

              <div className="card-glass group p-5 text-center">
                <div className="icon-hex w-12 h-12 mx-auto mb-3">
                  <UsersIcon size={20} className="text-white" />
                </div>
                <div className="text-[14px] font-semibold text-ink dark:text-white mb-1">
                  Expert Team
                </div>
                <div className="text-[13px] text-ink-tertiary dark:text-gray-500">
                  AI specialists & engineers
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="card-glass group p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-hex w-12 h-12">
                <MessageIcon size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ink dark:text-white group-hover:text-brand transition-colors duration-300">
                  Start Your Project
                </h3>
                <p className="text-[14px] text-ink-secondary dark:text-gray-400">
                  Tell us about your automation needs
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              <div className="flex-1 space-y-5">
                {/* Row 1: Fullname and Work Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] font-medium text-ink dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 hex-cut-sm border border-ink/10 dark:border-white/10
                        bg-paper dark:bg-gray-800 text-ink dark:text-white
                        placeholder-ink-tertiary dark:placeholder-gray-500
                        focus:ring-2 focus:ring-brand/30 focus:border-brand
                        transition-all duration-300 text-[15px]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-ink dark:text-gray-300 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 hex-cut-sm border border-ink/10 dark:border-white/10
                        bg-paper dark:bg-gray-800 text-ink dark:text-white
                        placeholder-ink-tertiary dark:placeholder-gray-500
                        focus:ring-2 focus:ring-brand/30 focus:border-brand
                        transition-all duration-300 text-[15px]"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* Row 2: Company Website */}
                <div>
                  <label className="block text-[14px] font-medium text-ink dark:text-gray-300 mb-2">
                    Company Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 hex-cut-sm border border-ink/10 dark:border-white/10
                      bg-paper dark:bg-gray-800 text-ink dark:text-white
                      placeholder-ink-tertiary dark:placeholder-gray-500
                      focus:ring-2 focus:ring-brand/30 focus:border-brand
                      transition-all duration-300 text-[15px]"
                    placeholder="https://yourcompany.com"
                  />
                </div>

                {/* Row 3: Automation Usage and Goals */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] font-medium text-ink dark:text-gray-300 mb-2">
                      Currently using automation? *
                    </label>
                    <select
                      name="usingAutomation"
                      value={formData.usingAutomation}
                      onChange={handleInputChange}
                      required
                      aria-label="Automation usage selection"
                      className="w-full px-4 py-3 hex-cut-sm border border-ink/10 dark:border-white/10
                        bg-paper dark:bg-gray-800 text-ink dark:text-white
                        focus:ring-2 focus:ring-brand/30 focus:border-brand
                        transition-all duration-300 text-[15px]"
                    >
                      <option value="">Select option</option>
                      {automationOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-ink dark:text-gray-300 mb-2">
                      Automation goal? *
                    </label>
                    <select
                      name="automationGoal"
                      value={formData.automationGoal}
                      onChange={handleInputChange}
                      required
                      aria-label="Automation goal selection"
                      className="w-full px-4 py-3 hex-cut-sm border border-ink/10 dark:border-white/10
                        bg-paper dark:bg-gray-800 text-ink dark:text-white
                        focus:ring-2 focus:ring-brand/30 focus:border-brand
                        transition-all duration-300 text-[15px]"
                    >
                      <option value="">Select goal</option>
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
                  <div>
                    <label className="block text-[14px] font-medium text-ink dark:text-gray-300 mb-2">
                      Free consultation? *
                    </label>
                    <select
                      name="freeConsultation"
                      value={formData.freeConsultation}
                      onChange={handleInputChange}
                      required
                      aria-label="Free consultation preference"
                      className="w-full px-4 py-3 hex-cut-sm border border-ink/10 dark:border-white/10
                        bg-paper dark:bg-gray-800 text-ink dark:text-white
                        focus:ring-2 focus:ring-brand/30 focus:border-brand
                        transition-all duration-300 text-[15px]"
                    >
                      <option value="">Select preference</option>
                      {consultationOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-ink dark:text-gray-300 mb-2">
                      Budget range
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      aria-label="Budget range selection"
                      className="w-full px-4 py-3 hex-cut-sm border border-ink/10 dark:border-white/10
                        bg-paper dark:bg-gray-800 text-ink dark:text-white
                        focus:ring-2 focus:ring-brand/30 focus:border-brand
                        transition-all duration-300 text-[15px]"
                    >
                      <option value="">Select range</option>
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
                className="btn-primary w-full mt-6 py-4 text-[15px] flex items-center justify-center gap-2
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <SendIcon size={18} />
                    <span>Get Started</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submissionStatus === "success" && (
                <div className="mt-4 p-4 hex-cut-sm bg-success/10 border border-success/20">
                  <p className="text-success text-[14px]">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you within 2-4 hours.
                  </p>
                </div>
              )}
              {submissionStatus === "error" && (
                <div className="mt-4 p-4 hex-cut-sm bg-error/10 border border-error/20">
                  <p className="text-error text-[14px]">
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
