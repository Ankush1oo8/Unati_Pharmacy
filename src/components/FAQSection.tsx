
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started with the platform?",
    answer: "Download the app from App Store or Google Play, create an account with your pharmacy credentials, and start exploring our wholesale catalog. Our onboarding process will guide you through setting up your account."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and digital wallets. You can also set up automated monthly billing for regular orders."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery times depend on your location and the products ordered. Typically, orders are delivered within 24-48 hours. Express delivery options are available for urgent orders."
  },
  {
    question: "Is there a minimum order quantity?",
    answer: "Yes, we have minimum order quantities that vary by product category. These are clearly marked on each product page within the app."
  },
  {
    question: "Can I return products if they're damaged or incorrect?",
    answer: "Absolutely. We have a comprehensive return policy for damaged, incorrect, or expired products. Simply report the issue through the app within 48 hours of delivery."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Find answers to common questions about our wholesale platform
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-200">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
