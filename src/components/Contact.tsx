"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
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
      className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Let's <span className="text-gradient">Transform</span> Your Business
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to automate your processes and accelerate growth? Get in touch
            with our AI automation experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-orange/10 dark:bg-brand-orange/20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    hello@nomanuai.com
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-orange/10 dark:bg-brand-orange/20 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-orange/10 dark:bg-brand-orange/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Serving clients worldwide
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Prefer to talk directly?
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@nomanuai.com"
                  className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-opacity-50 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
                <a
                  href="tel:+15551234567"
                  className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-opacity-50 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600">
              <div className="flex items-center mb-3">
                <MessageCircle className="w-5 h-5 text-brand-orange mr-2" />
                <span className="font-semibold text-gray-900 dark:text-white">
                  Quick Response
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We typically respond to all inquiries within 2-4 hours during
                business days. For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Start Your AI Journey
            </h3>

            {submissionStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                <p className="text-green-800 dark:text-green-300">
                  Thank you for your inquiry! We'll get back to you within 24
                  hours.
                </p>
              </div>
            )}

            {submissionStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg">
                <p className="text-red-800 dark:text-red-300">
                  There was an error submitting your form. Please try again or
                  contact us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Service Interest *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project, current challenges, and goals..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-opacity-50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
