import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Apple, Play } from 'lucide-react';
const Index = () => {
  // Function to handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, {
      threshold: 0.1
    });
    const hiddenElements = document.querySelectorAll('.opacity-0');
    hiddenElements.forEach(el => observer.observe(el));
    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  return <div className="overflow-x-hidden">
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-bold text-xl text-medical-blue">Unati Pharmacy</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-medical-blue">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-medical-blue">Testimonials</a>
              <a href="#faq" className="text-gray-600 hover:text-medical-blue">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-medical-blue">Contact</a>
            </div>
            {/* Login button removed */}
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
                <img alt="Dashboard on tablet" className="rounded-lg shadow-xl" src="https://youthincmag.com/wp-content/uploads/2020/12/Screenshot-2020-12-03-at-1.41.53-PM.jpg" />
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
                  {["Real-time inventory tracking", "Purchase pattern analysis", "Cost-saving opportunities", "Demand forecasting"].map((item, index) => <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-medical-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{item}</span>
                    </li>)}
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
                <Apple size={24} />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Button>
              <Button className="bg-white text-medical-blue hover:bg-gray-100 flex items-center gap-2 px-6 py-6">
                <Play size={24} />
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
    </div>;
};
export default Index;