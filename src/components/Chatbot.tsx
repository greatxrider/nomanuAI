"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm NomanuAI Assistant. I can help you learn about our AI automation services, answer questions about our projects, or assist with any inquiries. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // NomanuAI knowledge base
  const nomanuaiKnowledge = {
    about:
      "NomanuAI is a leading AI automation company that specializes in transforming businesses through intelligent automation solutions. We help companies streamline operations, reduce costs, and improve efficiency using cutting-edge AI technology.",

    services:
      "Our services include: 1) AI-Powered Process Automation, 2) Custom Automation Solutions, 3) Integration Services, 4) Consulting & Strategy, 5) Training & Support. We work with various platforms like Zapier, Make, Power Automate, and custom solutions.",

    projects:
      "We've successfully completed projects including: Lead flow automation, Data processing automation, Customer service automation, Marketing automation, CRM integrations, and Custom workflow automation for various industries.",

    team: "Our team consists of experienced automation specialists, AI engineers, and business consultants who work together to deliver exceptional results for our clients.",

    pricing:
      "Our pricing varies based on project complexity and requirements. We offer custom quotes after understanding your specific needs. We also provide free consultations to discuss your automation goals.",

    contact:
      "You can contact us through our website contact form, email us directly, or schedule a free consultation call. We're always happy to discuss how automation can benefit your business.",

    benefits:
      "Automation with NomanuAI provides: 1) 80% reduction in manual tasks, 2) Improved accuracy and consistency, 3) 24/7 operation capability, 4) Cost savings through efficiency, 5) Scalable solutions that grow with your business.",

    process:
      "Our process includes: 1) Initial consultation and assessment, 2) Solution design and planning, 3) Development and testing, 4) Implementation and training, 5) Ongoing support and optimization.",

    technologies:
      "We work with leading automation platforms including Zapier, Make (Integromat), Microsoft Power Automate, UiPath, Automation Anywhere, and custom AI solutions. We also integrate with popular tools like HubSpot, Salesforce, Gmail, and many others.",

    industries:
      "We serve various industries including: E-commerce, Healthcare, Finance, Real Estate, Marketing, Customer Service, Manufacturing, and Professional Services. Our solutions are customized for each industry's specific needs.",
  };

  // Enhanced AI response generation with context awareness
  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    const words = message.split(" ");

    // Enhanced greeting responses with personality
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      const greetings = [
        "Hello! Welcome to NomanuAI. I'm here to help you discover how AI automation can transform your business. What would you like to learn about today?",
        "Hi there! I'm excited to help you explore NomanuAI's automation solutions. What aspect of AI automation interests you most?",
        "Hey! Great to meet you. I'm here to guide you through NomanuAI's services and help you understand how automation can benefit your business. What would you like to know?",
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Context-aware responses with multiple variations
    if (
      message.includes("about") ||
      message.includes("what is") ||
      message.includes("who are")
    ) {
      if (message.includes("company") || message.includes("business")) {
        return "NomanuAI is a forward-thinking AI automation company that's revolutionizing how businesses operate. We combine cutting-edge AI technology with deep industry expertise to create automation solutions that drive real business results. Our mission is to help companies work smarter, not harder.";
      }
      return nomanuaiKnowledge.about;
    }

    // Enhanced service responses with specific details
    if (
      message.includes("service") ||
      message.includes("what do you do") ||
      message.includes("offer")
    ) {
      if (message.includes("specific") || message.includes("detail")) {
        return "Let me break down our services: 1) AI-Powered Process Automation - We automate repetitive tasks using intelligent algorithms. 2) Custom Automation Solutions - Tailored automation for your unique business needs. 3) Integration Services - Seamlessly connect your existing tools and platforms. 4) Consulting & Strategy - Expert guidance on automation roadmaps. 5) Training & Support - Ensure your team can maintain and optimize automations. Which service interests you most?";
      }
      return nomanuaiKnowledge.services;
    }

    // Smart project responses with examples
    if (
      message.includes("project") ||
      message.includes("work") ||
      message.includes("case study")
    ) {
      if (message.includes("recent") || message.includes("latest")) {
        return "Our recent projects include: A healthcare provider automated patient appointment scheduling (saved 15 hours/week), An e-commerce company automated inventory management (reduced stockouts by 90%), A real estate agency automated lead qualification (increased conversion by 40%). Would you like to hear about a specific industry or type of automation?";
      }
      return nomanuaiKnowledge.projects;
    }

    // Team information with personal touch
    if (
      message.includes("team") ||
      message.includes("people") ||
      message.includes("staff")
    ) {
      return "Our team is our greatest asset! We have automation specialists with 5+ years of experience, AI engineers who stay current with the latest technologies, and business consultants who understand your industry challenges. We work collaboratively to ensure every project exceeds expectations. What would you like to know about our expertise?";
    }

    // Pricing with value proposition
    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("how much")
    ) {
      if (message.includes("expensive") || message.includes("cheap")) {
        return "We understand budget is important! Our pricing is competitive and reflects the value we deliver. Most clients see ROI within 3-6 months through time savings and efficiency gains. We offer flexible payment options and always start with a free consultation to understand your needs. Would you like to discuss your specific requirements?";
      }
      return nomanuaiKnowledge.pricing;
    }

    // Contact with multiple options
    if (
      message.includes("contact") ||
      message.includes("reach") ||
      message.includes("get in touch")
    ) {
      return "There are several ways to reach us: 1) Use our contact form on the website for general inquiries, 2) Schedule a free consultation call to discuss your automation needs, 3) Email us directly for urgent matters. We typically respond within 24 hours. What's the best way to help you?";
    }

    // Benefits with ROI focus
    if (
      message.includes("benefit") ||
      message.includes("advantage") ||
      message.includes("why")
    ) {
      if (message.includes("roi") || message.includes("return")) {
        return "Great question! Our clients typically see: 80% reduction in manual tasks (saving 20+ hours/week), 95% improvement in accuracy, 24/7 operation capability, 30-50% cost savings, and scalable solutions that grow with your business. Most achieve full ROI within 6 months. Would you like to see a specific case study?";
      }
      return nomanuaiKnowledge.benefits;
    }

    // Process with timeline
    if (
      message.includes("process") ||
      message.includes("how") ||
      message.includes("workflow")
    ) {
      if (message.includes("long") || message.includes("time")) {
        return "Our typical timeline: Week 1-2: Discovery and planning, Week 3-4: Solution design, Week 5-8: Development and testing, Week 9: Implementation and training, Ongoing: Support and optimization. Most projects take 6-8 weeks from start to finish. We can also do rapid implementations for urgent needs. What's your timeline?";
      }
      return nomanuaiKnowledge.process;
    }

    // Technologies with platform recommendations
    if (
      message.includes("technology") ||
      message.includes("platform") ||
      message.includes("tool")
    ) {
      if (message.includes("best") || message.includes("recommend")) {
        return "The 'best' platform depends on your needs: Zapier for simple integrations, Make for complex workflows, Power Automate for Microsoft ecosystem, UiPath for enterprise automation, Custom AI for unique requirements. We're platform-agnostic and recommend what works best for your specific use case. What are you trying to automate?";
      }
      return nomanuaiKnowledge.technologies;
    }

    // Industries with specific examples
    if (
      message.includes("industry") ||
      message.includes("sector") ||
      message.includes("business type")
    ) {
      const industry = words.find((word) =>
        [
          "ecommerce",
          "healthcare",
          "finance",
          "real estate",
          "marketing",
          "manufacturing",
        ].includes(word)
      );
      if (industry) {
        const industryExamples: Record<string, string> = {
          ecommerce:
            "For e-commerce, we automate inventory management, order processing, customer support, and marketing campaigns. Our clients see 40% faster order fulfillment and 25% increase in customer satisfaction.",
          healthcare:
            "In healthcare, we automate patient scheduling, billing, insurance verification, and compliance reporting. This reduces administrative burden and improves patient care quality.",
          finance:
            "For finance, we automate loan processing, compliance reporting, risk assessment, and customer onboarding. This improves accuracy and reduces processing time by 60%.",
        };
        return industryExamples[industry] || nomanuaiKnowledge.industries;
      }
      return nomanuaiKnowledge.industries;
    }

    // FAQ with helpful guidance
    if (
      message.includes("faq") ||
      message.includes("question") ||
      message.includes("help")
    ) {
      return "I can help answer specific questions about our services, pricing, process, or technologies. For detailed FAQs, visit our FAQ page. What specific question do you have about automation or our services?";
    }

    // Blog with topic suggestions
    if (
      message.includes("blog") ||
      message.includes("article") ||
      message.includes("insight")
    ) {
      return "We publish weekly insights on automation trends, implementation guides, and industry-specific solutions. Recent topics include: 'Automation ROI Calculation', 'AI in Customer Service', 'Workflow Optimization Strategies'. Is there a particular topic you'd like to explore?";
    }

    // Automation-specific questions
    if (message.includes("automation") || message.includes("automate")) {
      if (message.includes("start") || message.includes("begin")) {
        return "Great question! Start by identifying repetitive tasks that take up 2+ hours daily. Common starting points: email management, data entry, report generation, customer follow-ups. We offer a free automation assessment to identify your best opportunities. Would you like to schedule one?";
      }
      return "Automation is our specialty! We help businesses identify, design, and implement automation solutions that save time and money. What specific process or task are you looking to automate?";
    }

    // AI-specific questions
    if (message.includes("ai") || message.includes("artificial intelligence")) {
      return "AI is the future of business automation! We use machine learning, natural language processing, and predictive analytics to create intelligent automation solutions. Our AI can learn from your data, make decisions, and continuously improve processes. What aspect of AI automation interests you?";
    }

    // Cost savings and ROI
    if (
      message.includes("save") ||
      message.includes("money") ||
      message.includes("cost")
    ) {
      return "Our clients typically save 30-50% on operational costs through automation. This comes from reduced manual work, fewer errors, faster processing, and improved efficiency. We can provide a detailed ROI analysis for your specific use case. What processes are you looking to optimize?";
    }

    // Implementation concerns
    if (
      message.includes("implement") ||
      message.includes("setup") ||
      message.includes("deploy")
    ) {
      return "Implementation is straightforward with our expert guidance! We handle the technical setup, provide comprehensive training, and offer ongoing support. Most clients are up and running within 2-4 weeks. We also provide documentation and best practices to ensure long-term success.";
    }

    // Default intelligent response
    const defaultResponses = [
      "I'd love to help you learn more about NomanuAI's automation services. Could you tell me more about what you're looking to achieve with automation?",
      "That's an interesting question! Let me help you understand how NomanuAI can assist with your automation needs. What specific aspect would you like to explore?",
      "I'm here to guide you through NomanuAI's capabilities. What's your main goal with automation - saving time, reducing costs, improving accuracy, or something else?",
      "Great question! Let me share how NomanuAI can help transform your business processes. What industry are you in, and what challenges are you facing?",
    ];
    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Get AI response from our API
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (response.ok) {
        const data = await response.json();
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      } else {
        // Fallback to local response if API fails
        const fallbackResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: generateBotResponse(inputValue),
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, fallbackResponse]);
      }
    } catch (error) {
      // Fallback response if API fails
      console.log("Error generating response:", error);
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus-ring ${
          theme === "dark"
            ? "bg-brand-orange text-white hover:bg-brand-orange-dark"
            : "bg-brand-orange text-white hover:bg-brand-orange-dark"
        }`}
        aria-label="Open AI Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`relative w-full max-w-md h-[600px] rounded-t-xl shadow-2xl flex flex-col ${
              theme === "dark"
                ? "bg-gray-900 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between p-4 rounded-t-xl ${
                theme === "dark"
                  ? "bg-gray-800 border-b border-gray-700"
                  : "bg-gray-50 border-b border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-brand-orange">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    NomanuAI Assistant
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    AI-powered help
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === "dark"
                    ? "hover:bg-gray-700 text-gray-300"
                    : "hover:bg-gray-200 text-gray-600"
                }`}
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start gap-3 max-w-[80%] ${
                      message.sender === "user"
                        ? "flex-row-reverse"
                        : "flex-row"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        message.sender === "user"
                          ? "bg-brand-orange"
                          : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-brand-orange text-white"
                          : theme === "dark"
                          ? "bg-gray-800 text-gray-100"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                      <Bot className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        theme === "dark"
                          ? "bg-gray-800 text-gray-100"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about NomanuAI..."
                  className={`flex-1 px-3 py-2 rounded-lg border transition-colors focus-ring ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-brand-orange"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brand-orange"
                  }`}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className={`p-2 rounded-lg transition-colors ${
                    inputValue.trim() && !isTyping
                      ? "bg-brand-orange text-white hover:bg-brand-orange-dark"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
