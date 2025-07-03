
import React from "react";

const HumanoidSection = () => {
  return (
    <section id="humanoid" className="w-full bg-white py-8 sm:py-12 md:py-16">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative">
          <div
            className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-between"
            style={{
              backgroundImage: "url('/background-section1.png')"
            }}
          >
            <div className="flex items-center text-white">
              <img 
                src="/logo.svg" 
                alt="BioCompute Nexus Logo" 
                className="h-5 sm:h-6 w-auto mr-3 invert" 
              />
              <span className="text-white text-xl font-medium">
                BioCompute Nexus
              </span>
            </div>
            
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair text-white italic font-thin leading-tight mb-4">
                Advanced Bioinformatics Platform
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
                Cutting-edge computational tools for modern biological research
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-white/30 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidSection;
