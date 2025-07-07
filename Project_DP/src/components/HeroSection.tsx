import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient cultural-pattern py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-brown-900 leading-tight">
              Jelajahi Kekayaan Budaya
              <span className="text-gold-700 block">Indonesia</span>
            </h1>

            <p className="text-lg text-brown-700 leading-relaxed max-w-2xl">
              BhraGha adalah platform edukasi sosial budaya berbasis AI untuk
              meningkatkan literasi budaya digital. Temukan, pelajari, dan
              lestarikan warisan budaya Indonesia bersama kami.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brown-800 hover:bg-brown-900 text-cream-100 px-8 py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Mulai Jelajah
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gold-600 text-gold-700 hover:bg-gold-600 hover:text-brown-900 px-8 py-3 text-lg font-semibold transition-all duration-200"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in delay-200">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto">
                {/* Cultural Symbol */}
                <div className="w-full h-full bg-gradient-to-br from-gold-400 to-brown-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-60 h-60 bg-cream-100 rounded-full flex items-center justify-center">
                    <div className="w-40 h-40 bg-brown-800 rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-cream-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 -left-10 w-20 h-20 bg-gold-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-10 -right-10 w-16 h-16 bg-brown-600 rounded-full opacity-40 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-5 w-12 h-12 bg-gold-300 rounded-full opacity-50 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
