
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Function to handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.opacity-0');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-bold text-xl text-medical-blue">PharmaWholesale</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-medical-blue">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-medical-blue">Testimonials</a>
              <a href="#faq" className="text-gray-600 hover:text-medical-blue">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-medical-blue">Contact</a>
            </div>
            <div>
              <Button className="bg-medical-blue hover:bg-medical-dark-blue">Log In</Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        
        <section id="features" className="opacity-0">
          <FeaturesSection />
        </section>
        
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2 opacity-0 animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Dashboard on tablet" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2 opacity-0 animate-fade-in animate-delay-200">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Powerful Analytics for Better Decisions
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our platform provides detailed analytics to help you make informed purchasing decisions.
                  Track trends, analyze spending patterns, and optimize your inventory with data-driven insights.
                </p>
                <ul className="space-y-4">
                  {[
                    "Real-time inventory tracking",
                    "Purchase pattern analysis",
                    "Cost-saving opportunities",
                    "Demand forecasting"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-medical-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section id="testimonials" className="opacity-0">
          <TestimonialsSection />
        </section>
        
        <section id="faq" className="opacity-0">
          <FAQSection />
        </section>
        
        <section className="py-16 sm:py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
              Ready to Transform Your Pharmacy Business?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in animate-delay-100">
              Download our app today and join thousands of pharmacy owners already saving time and money with PharmaWholesale.
            </p>
            <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in animate-delay-200">
              <Button className="bg-white text-medical-blue hover:bg-gray-100 flex items-center gap-2 px-6 py-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Button>
              <Button className="bg-white text-medical-blue hover:bg-gray-100 flex items-center gap-2 px-6 py-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-store"><path d="m4 4 10.1 10.1c.2.2.2.5 0 .7L4 20"/><path d="m4 20 7-3.1"/><path d="m11 17 7 3"/><path d="m11 7 7-3"/><path d="m4 4 7 3"/></svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
