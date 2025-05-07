
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "This wholesale platform has completely transformed how we manage our pharmacy inventory. We've cut costs by 15% while improving our medication availability.",
    author: "Dr. Sarah Johnson",
    position: "Pharmacy Owner, MediCare Plus",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    delay: "100"
  },
  {
    quote: "The bulk ordering feature saves us countless hours every month. The competitive pricing means we can offer better deals to our customers too.",
    author: "Michael Chen",
    position: "Pharmacy Manager, HealthPoint Pharmacy",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    delay: "200"
  },
  {
    quote: "I was skeptical at first, but the platform has exceeded all expectations. Their delivery service is reliable and our inventory management has never been better.",
    author: "Rachel Thompson",
    position: "Owner, Family Care Pharmacy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    delay: "300"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 sm:py-28 relative bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-medical-blue bg-medical-blue/10 rounded-full opacity-0 animate-fade-in">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 opacity-0 animate-fade-in">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Hear from pharmacy owners who have transformed their business with our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`opacity-0 animate-fade-in animate-delay-${testimonial.delay} bg-white border-none shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300`}>
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                
                <svg width="48" height="36" className="mb-6 text-medical-blue/20" viewBox="0 0 48 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 36V24C0 20.8 0.6 17.8 1.8 15C3 12.2 4.7 9.7 6.9 7.5C9.1 5.3 11.6 3.5 14.4 2.1C17.2 0.7 20.2 0 23.4 0H24V6C20.8 6 17.8 6.7 15 8.1C12.2 9.5 10.2 11.6 9 14.4H15C15.8 14.4 16.5 14.6 17.1 15C17.7 15.4 18.3 16 18.6 16.6C19 17.2 19.2 17.9 19.2 18.7V31.7C19.2 32.5 19 33.2 18.6 33.8C18.2 34.4 17.6 35 17 35.4C16.4 35.8 15.7 36 14.9 36H0ZM28.8 36V24C28.8 20.8 29.4 17.8 30.6 15C31.8 12.2 33.5 9.7 35.7 7.5C37.9 5.3 40.4 3.5 43.2 2.1C46 0.7 49 0 52.2 0H52.8V6C49.6 6 46.6 6.7 43.8 8.1C41 9.5 39 11.6 37.8 14.4H43.8C44.6 14.4 45.3 14.6 45.9 15C46.5 15.4 47.1 16 47.4 16.6C47.8 17.2 48 17.9 48 18.7V31.7C48 32.5 47.8 33.2 47.4 33.8C47 34.4 46.4 35 45.8 35.4C45.2 35.8 44.5 36 43.7 36H28.8Z"/>
                </svg>
                
                <p className="text-gray-700 text-lg">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
