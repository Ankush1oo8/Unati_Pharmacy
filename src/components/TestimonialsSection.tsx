
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "This wholesale platform has completely transformed how we manage our pharmacy inventory. We've cut costs by 15% while improving our medication availability.",
    author: "Dr. Sarah Johnson",
    position: "Pharmacy Owner, MediCare Plus",
    delay: "100"
  },
  {
    quote: "The bulk ordering feature saves us countless hours every month. The competitive pricing means we can offer better deals to our customers too.",
    author: "Michael Chen",
    position: "Pharmacy Manager, HealthPoint Pharmacy",
    delay: "200"
  },
  {
    quote: "I was skeptical at first, but the platform has exceeded all expectations. Their delivery service is reliable and our inventory management has never been better.",
    author: "Rachel Thompson",
    position: "Owner, Family Care Pharmacy",
    delay: "300"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Hear from pharmacy owners who have transformed their business with our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`opacity-0 animate-fade-in animate-delay-${testimonial.delay} bg-white border-none shadow-lg`}>
              <CardContent className="p-8">
                <svg width="45" height="36" className="mb-6 text-medical-blue" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 36L0 24V12L13.5 0V36ZM45 36L31.5 24V12L45 0V36Z" fill="currentColor" fillOpacity="0.2"/>
                </svg>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
