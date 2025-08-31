import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        // Enhanced AI response system with better intelligence
        const aiResponse = await generateSmartResponse(message);

        return NextResponse.json({ response: aiResponse });
    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { response: "I'm having trouble processing your request. Please try asking about our services, pricing, or automation benefits." },
            { status: 500 }
        );
    }
}

async function generateSmartResponse(userMessage: string): Promise<string> {
    const message = userMessage.toLowerCase();

    // Enhanced intelligent response system
    const responses = {
        // Greetings with personality
        greetings: [
            "Hello! I'm excited to help you explore NomanuAI's automation solutions. What specific aspect of AI automation interests you most?",
            "Hi there! Welcome to NomanuAI. I'm here to guide you through our intelligent automation services. What would you like to learn about today?",
            "Hey! Great to meet you. I'm your AI assistant here to help you discover how automation can transform your business. What challenges are you looking to solve?"
        ],

        // Service inquiries with detailed responses
        services: {
            general: "NomanuAI offers comprehensive automation solutions: AI-powered process automation, custom integrations, consulting services, and ongoing support. We work with platforms like Zapier, Make, Power Automate, and custom AI solutions. What type of automation are you considering?",
            specific: "Let me break down our core services: 1) Process Automation - We automate repetitive tasks using intelligent algorithms. 2) Custom Solutions - Tailored automation for your unique needs. 3) Integration Services - Connect your existing tools seamlessly. 4) Consulting - Expert guidance on automation strategy. 5) Training & Support - Ensure long-term success. Which area interests you most?"
        },

        // Pricing with value focus
        pricing: {
            general: "Our pricing is competitive and value-driven. Most clients see ROI within 3-6 months through time savings and efficiency gains. We offer custom quotes based on your specific needs and always start with a free consultation. Would you like to discuss your requirements?",
            budget: "We understand budget is important! Our solutions are designed to be cost-effective with flexible payment options. Most clients save 30-50% on operational costs. We can work within your budget constraints while delivering maximum value."
        },

        // ROI and benefits
        benefits: {
            general: "Automation with NomanuAI delivers: 80% reduction in manual tasks, 95% improvement in accuracy, 24/7 operation capability, 30-50% cost savings, and scalable solutions. Most clients achieve full ROI within 6 months. What specific benefits are you looking for?",
            roi: "Our clients typically see: 20+ hours saved per week, 95% fewer errors, 24/7 operation, 30-50% cost reduction, and improved customer satisfaction. We provide detailed ROI analysis for your specific use case."
        },

        // Implementation guidance
        implementation: {
            general: "Implementation is straightforward with our expert guidance! We handle technical setup, provide comprehensive training, and offer ongoing support. Most clients are operational within 2-4 weeks. What's your timeline?",
            timeline: "Our typical implementation: Week 1-2: Discovery and planning, Week 3-4: Solution design, Week 5-8: Development and testing, Week 9: Implementation and training, Ongoing: Support and optimization. We can also do rapid implementations for urgent needs."
        },

        // Industry-specific responses
        industries: {
            ecommerce: "For e-commerce, we automate inventory management, order processing, customer support, and marketing campaigns. Our clients see 40% faster order fulfillment and 25% increase in customer satisfaction. What specific e-commerce processes are you looking to automate?",
            healthcare: "In healthcare, we automate patient scheduling, billing, insurance verification, and compliance reporting. This reduces administrative burden and improves patient care quality. What healthcare processes are you considering for automation?",
            finance: "For finance, we automate loan processing, compliance reporting, risk assessment, and customer onboarding. This improves accuracy and reduces processing time by 60%. What financial processes are you looking to optimize?",
            realestate: "In real estate, we automate lead qualification, property management, client communication, and marketing campaigns. Our clients see 40% increase in lead conversion and 50% reduction in administrative time. What real estate processes interest you?"
        },

        // Technology recommendations
        technology: {
            general: "We work with leading platforms: Zapier for simple integrations, Make for complex workflows, Power Automate for Microsoft ecosystem, UiPath for enterprise automation, and custom AI solutions. We're platform-agnostic and recommend what works best for your needs. What are you trying to automate?",
            comparison: "Platform choice depends on your needs: Zapier for simple integrations, Make for complex workflows, Power Automate for Microsoft users, UiPath for enterprise, Custom AI for unique requirements. We can help you choose the best option for your specific use case."
        }
    };

    // Smart response selection based on message content
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
        return responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
    }

    if (message.includes("service") || message.includes("what do you do") || message.includes("offer")) {
        return message.includes("specific") || message.includes("detail")
            ? responses.services.specific
            : responses.services.general;
    }

    if (message.includes("price") || message.includes("cost") || message.includes("how much")) {
        return message.includes("budget") || message.includes("expensive") || message.includes("cheap")
            ? responses.pricing.budget
            : responses.pricing.general;
    }

    if (message.includes("benefit") || message.includes("advantage") || message.includes("why")) {
        return message.includes("roi") || message.includes("return")
            ? responses.benefits.roi
            : responses.benefits.general;
    }

    if (message.includes("implement") || message.includes("setup") || message.includes("deploy")) {
        return message.includes("timeline") || message.includes("long") || message.includes("time")
            ? responses.implementation.timeline
            : responses.implementation.general;
    }

    if (message.includes("ecommerce") || message.includes("online store")) {
        return responses.industries.ecommerce;
    }

    if (message.includes("healthcare") || message.includes("medical")) {
        return responses.industries.healthcare;
    }

    if (message.includes("finance") || message.includes("banking")) {
        return responses.industries.finance;
    }

    if (message.includes("real estate") || message.includes("property")) {
        return responses.industries.realestate;
    }

    if (message.includes("technology") || message.includes("platform") || message.includes("tool")) {
        return message.includes("compare") || message.includes("best")
            ? responses.technology.comparison
            : responses.technology.general;
    }

    if (message.includes("automation") || message.includes("automate")) {
        return "Automation is our specialty! We help businesses identify, design, and implement intelligent automation solutions that save time and money. What specific process or task are you looking to automate?";
    }

    if (message.includes("ai") || message.includes("artificial intelligence")) {
        return "AI is the future of business automation! We use machine learning, natural language processing, and predictive analytics to create intelligent automation solutions. Our AI can learn from your data, make decisions, and continuously improve processes. What aspect of AI automation interests you?";
    }

    // Default intelligent response
    const defaultResponses = [
        "I'd love to help you learn more about NomanuAI's automation services. Could you tell me more about what you're looking to achieve with automation?",
        "That's an interesting question! Let me help you understand how NomanuAI can assist with your automation needs. What specific aspect would you like to explore?",
        "I'm here to guide you through NomanuAI's capabilities. What's your main goal with automation - saving time, reducing costs, improving accuracy, or something else?",
        "Great question! Let me share how NomanuAI can help transform your business processes. What industry are you in, and what challenges are you facing?"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}
