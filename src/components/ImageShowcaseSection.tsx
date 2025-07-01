
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Experience Next-Gen Bioinformatics
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our comprehensive suite of bioinformatics tools and databases is designed 
            to accelerate research and discovery in computational biology.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
              alt="Bioinformatics data analysis and visualization interface" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Advanced Computational Biology</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Built with cutting-edge algorithms and comprehensive databases, our platform 
              seamlessly integrates into various research environments, from academic labs 
              to pharmaceutical companies, providing powerful analysis capabilities and 
              enriching biological discoveries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
