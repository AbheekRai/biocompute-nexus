
import React from "react";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div 
            className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[280px] sm:min-h-[400px] flex flex-col justify-between relative" 
            style={{
              backgroundImage: "url('/background-section3.png')"
            }}
          >
            <div className="flex items-center text-white">
              <img src="/logo.svg" alt="BioCompute Nexus Logo" className="h-5 sm:h-6 w-auto mr-3 invert" />
              <span className="text-white text-xl font-medium">BioCompute Nexus</span>
            </div>
            
            <div className="flex-1 flex items-center justify-center py-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair text-white italic font-thin text-center leading-tight">
                Made By Scientists & Engineers
              </h2>
            </div>
            
            {/* White box at the bottom with overflow */}
            <div className="w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
