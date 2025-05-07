
import React from 'react';
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero text-white py-16 sm:py-24 w-full overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 opacity-0 animate-fade-in">
            Wholesale Medicine Platform for Pharmacies
          </h1>
          <p className="text-lg sm:text-xl mb-8 opacity-0 animate-fade-in animate-delay-200">
            Simplify your pharmacy inventory management. Get the best prices on bulk medicines with our digital wholesale platform.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animate-delay-300">
            <Button className="bg-white text-medical-blue hover:bg-gray-100 flex items-center gap-2 px-6 py-6">
              <Apple className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </Button>
            <Button className="bg-white text-medical-blue hover:bg-gray-100 flex items-center gap-2 px-6 py-6">
              <Play className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative opacity-0 animate-fade-in animate-delay-400">
          <div className="relative z-10 animate-float max-w-sm mx-auto md:ml-auto md:mr-0">
            <div className="bg-white p-3 rounded-3xl shadow-2xl overflow-hidden">
              <AspectRatio ratio={9/16} className="rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=85" 
                  alt="Pharmacy Wholesale App" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              
              {/* App UI Overlay Elements - Makes it look more like an actual app */}
              <div className="absolute top-6 left-0 right-0 flex justify-center">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-medical-blue text-sm font-medium">
                  PharmaWholesale App
                </div>
              </div>
              
              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <div className="bg-medical-blue/90 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  Start Ordering
                </div>
              </div>
            </div>
            
            {/* Device frame details */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-200 rounded-full"></div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-medical-light-blue rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-medical-teal rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/20 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
