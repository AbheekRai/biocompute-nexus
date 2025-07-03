
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-8 mt-16 border-t border-gray-200">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">BioCompute Nexus</h3>
            <p className="text-gray-600 text-sm">Advancing bioinformatics research through comprehensive tools and databases</p>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-600 text-sm">
              This template takes inspiration from{" "}
              <a href="https://x.com/BrettFromDJ" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
                DesignJoy's
              </a>{" "}
              BUILD WARS design, built entirely with Lovable by{" "}
              <a href="https://x.com/rezaul_arif" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
                Rezaul Arif
              </a>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2024 BioCompute Nexus. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
