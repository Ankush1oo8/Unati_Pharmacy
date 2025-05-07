import React from 'react';
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const HeroSection = () => {
  return <section className="relative bg-gradient-hero text-white py-20 sm:py-28 w-full overflow-hidden">
      {/* Background Medicine Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80" alt="Medicine Background" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-blue via-medical-blue/80 to-medical-blue/60"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full opacity-0 animate-fade-in">
            Pharmacy Business Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight opacity-0 animate-fade-in">
            <span className="text-white">Wholesale Medicine Platform </span>
            <span className="text-medical-light-blue text-zinc-800">for Pharmacies</span>
          </h1>
          <p className="text-lg sm:text-xl mb-10 text-white/90 max-w-lg opacity-0 animate-fade-in animate-delay-200">
            Simplify your pharmacy inventory management. Get the best prices on bulk medicines with our digital wholesale platform.
          </p>
          <div className="flex flex-wrap gap-5 opacity-0 animate-fade-in animate-delay-300">
            <Button className="bg-white text-medical-blue hover:bg-gray-100 flex items-center gap-2 px-6 py-6 shadow-lg">
              <Apple className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </Button>
            <Button className="bg-white text-medical-blue hover:bg-gray-100 flex items-center gap-2 px-6 py-6 shadow-lg">
              <Play className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 opacity-0 animate-fade-in animate-delay-400">
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-white/80 mt-1">Pharmacies</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white">50,000+</div>
              <div className="text-white/80 mt-1">Orders</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white">15%</div>
              <div className="text-white/80 mt-1">Cost Savings</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-medical-light-blue rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-medical-teal rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/20 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-medical-green/30 rounded-full opacity-30 blur-lg"></div>
    </section>;
};
export default HeroSection;