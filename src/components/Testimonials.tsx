"use client";

import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Elite Realty Group",
      position: "CEO",
      content:
        "NomanuAI transformed our lead generation process completely. We've seen a 300% increase in qualified leads and our sales team is more productive than ever. The AI automation handles the initial qualification perfectly.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Marketing Pro",
      position: "Operations Director",
      content:
        "The CRM integration was seamless and the automation workflows have saved us 20+ hours per week. Our client onboarding is now completely automated and our clients love the experience.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Sales Force Solutions",
      position: "VP of Sales",
      content:
        "Working with NomanuAI was a game-changer. Their team understood our unique needs and delivered a custom solution that exceeded our expectations. ROI was evident within the first month.",
      rating: 5,
      avatar: "👩‍🏭",
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Property Ventures Inc",
      position: "Founder",
      content:
        "The automated communication system they built for us handles 80% of our customer inquiries. Our response time improved dramatically and customer satisfaction scores are at an all-time high.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      id: 5,
      name: "Lisa Park",
      company: "Growth Marketing Agency",
      position: "Managing Partner",
      content:
        "NomanuAI's process optimization analysis revealed bottlenecks we didn't even know existed. The implemented solutions improved our efficiency by 45% and our team morale has never been better.",
      rating: 5,
      avatar: "👩‍🎨",
    },
    {
      id: 6,
      name: "Robert Wilson",
      company: "Tech Innovators LLC",
      position: "CTO",
      content:
        "Their compliance automation system keeps us audit-ready 24/7. What used to take days of manual work is now handled automatically with detailed reporting. Absolutely phenomenal work.",
      rating: 5,
      avatar: "👨‍🔧",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "text-yellow-400 fill-current"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped businesses
            transform their operations with AI automation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 p-8 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-brand-orange opacity-60" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-orange/10 dark:bg-brand-orange/20 rounded-full flex items-center justify-center mr-4 text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-brand-orange font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Trusted by Leading Businesses
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                Real Estate
              </div>
              <div className="text-gray-500 dark:text-gray-400">Agencies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                Marketing
              </div>
              <div className="text-gray-500 dark:text-gray-400">Firms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                Sales
              </div>
              <div className="text-gray-500 dark:text-gray-400">Teams</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                Tech
              </div>
              <div className="text-gray-500 dark:text-gray-400">Startups</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white dark:bg-gray-700 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-gray-600">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI automation can transform your business
            operations and drive measurable results.
          </p>
          <a
            href="#contact"
            className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-opacity-50 text-lg inline-block"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
