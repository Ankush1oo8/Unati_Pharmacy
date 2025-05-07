
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
      </div>
      
      {/* Background Medicine Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80" 
          alt="Medicine Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-blue to-medical-blue/60"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-medical-light-blue rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-medical-teal rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/20 rounded-full opacity-20 blur-xl"></div>
    </section>
  );
};

export default HeroSection;
