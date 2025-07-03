
import React from "react";

const SpecsSection = () => {
  return (
    <section id="specs" className="w-full bg-white py-8 sm:py-12 md:py-16">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Specifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BioCompute Nexus leverages state-of-the-art computational infrastructure to deliver unparalleled performance in bioinformatics analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-pulse-500 text-3xl mb-4">🧬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Genomic Analysis</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Whole genome sequencing analysis</li>
              <li>• Variant calling and annotation</li>
              <li>• Phylogenetic reconstruction</li>
              <li>• Comparative genomics</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-pulse-500 text-3xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Protein Structure</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• 3D structure prediction</li>
              <li>• Molecular docking simulations</li>
              <li>• Protein-protein interactions</li>
              <li>• Structural alignment</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-pulse-500 text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Processing</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• High-throughput data analysis</li>
              <li>• Machine learning algorithms</li>
              <li>• Statistical modeling</li>
              <li>• Real-time visualization</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-pulse-500 text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Parallel processing capabilities</li>
              <li>• Cloud-based scalability</li>
              <li>• GPU acceleration support</li>
              <li>• Low-latency responses</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-pulse-500 text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Security</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• End-to-end encryption</li>
              <li>• GDPR compliance</li>
              <li>• Secure data storage</li>
              <li>• Access control management</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-pulse-500 text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Integration</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• REST API endpoints</li>
              <li>• Database connectivity</li>
              <li>• Third-party tool integration</li>
              <li>• Custom workflow support</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the power of BioCompute Nexus for your research projects
            </p>
            <button className="bg-white text-pulse-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
