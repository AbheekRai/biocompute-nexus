
import React, { useEffect, useState } from "react";
import { ArrowRight, Search, Filter, Database, Wrench, Cpu, BarChart3, Code, GitBranch, Dna, Microscope, Brain, Activity, Zap, FileText, Globe, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ToolsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [animatedCards, setAnimatedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Animate cards on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setAnimatedCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.tool-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const tools = [
    {
      id: 1,
      name: "Sequence Alignment Toolkit",
      category: "sequence",
      type: "Tool",
      description: "Advanced multiple sequence alignment with BLAST integration and phylogenetic analysis capabilities.",
      icon: <Code className="w-6 h-6" />,
      features: ["BLAST Search", "Multiple Alignment", "Phylogenetic Trees"],
      status: "Available",
      url: "/tools/sequence-alignment"
    },
    {
      id: 2,
      name: "GenBank Repository",
      category: "database",
      type: "Database",
      description: "Complete access to NCBI GenBank with over 200 million genetic sequences from all species.",
      icon: <Database className="w-6 h-6" />,
      features: ["200M+ Sequences", "Real-time Updates", "API Access"],
      status: "Available",
      url: "/tools/genbank"
    },
    {
      id: 3,
      name: "Protein Structure Predictor",
      category: "structure",
      type: "Tool",
      description: "AI-powered protein structure prediction using AlphaFold-inspired algorithms.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["3D Structure", "Confidence Scores", "Interactive Viewer"],
      status: "Beta",
      url: "/tools/protein-structure"
    },
    {
      id: 4,
      name: "UniProt Database",
      category: "database",
      type: "Database",
      description: "Comprehensive protein sequence and functional information repository.",
      icon: <Database className="w-6 h-6" />,
      features: ["Protein Sequences", "Functional Annotations", "Cross-references"],
      status: "Available",
      url: "/tools/uniprot"
    },
    {
      id: 5,
      name: "NGS Data Processor",
      category: "genomics",
      type: "Tool",
      description: "High-throughput sequencing data processing pipeline with quality control and variant calling.",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Quality Control", "Variant Calling", "Batch Processing"],
      status: "Coming Soon",
      url: "/tools/ngs-processor"
    },
    {
      id: 6,
      name: "Pathway Analysis Suite",
      category: "analysis",
      type: "Tool",
      description: "Comprehensive pathway enrichment analysis with KEGG and GO integration.",
      icon: <GitBranch className="w-6 h-6" />,
      features: ["KEGG Pathways", "GO Enrichment", "Network Visualization"],
      status: "Available",
      url: "/tools/pathway-analysis"
    },
    {
      id: 7,
      name: "EMBL-EBI Database",
      category: "database",
      type: "Database",
      description: "European Molecular Biology Laboratory database with nucleotide sequences and protein structures.",
      icon: <Globe className="w-6 h-6" />,
      features: ["Nucleotide Sequences", "Protein Structures", "Literature Links"],
      status: "Available",
      url: "/tools/embl-ebi"
    },
    {
      id: 8,
      name: "Genome Browser",
      category: "genomics",
      type: "Tool",
      description: "Interactive genome visualization tool with annotation layers and comparative genomics.",
      icon: <Dna className="w-6 h-6" />,
      features: ["Genome Visualization", "Annotation Tracks", "Comparative Analysis"],
      status: "Available",
      url: "/tools/genome-browser"
    },
    {
      id: 9,
      name: "Drug Discovery Database",
      category: "database",
      type: "Database",
      description: "Comprehensive chemical compound database for drug discovery and molecular docking studies.",
      icon: <Microscope className="w-6 h-6" />,
      features: ["Chemical Compounds", "Drug Targets", "Molecular Properties"],
      status: "Available",
      url: "/tools/drug-discovery"
    },
    {
      id: 10,
      name: "Machine Learning Classifier",
      category: "analysis",
      type: "Tool",
      description: "AI-powered biological data classification using deep learning and ensemble methods.",
      icon: <Brain className="w-6 h-6" />,
      features: ["Deep Learning", "Feature Selection", "Model Training"],
      status: "Beta",
      url: "/tools/ml-classifier"
    },
    {
      id: 11,
      name: "Metabolomics Analyzer",
      category: "analysis",
      type: "Tool",
      description: "Advanced metabolomic data analysis with pathway mapping and statistical analysis.",
      icon: <Activity className="w-6 h-6" />,
      features: ["Metabolite Identification", "Pathway Mapping", "Statistical Analysis"],
      status: "Available",
      url: "/tools/metabolomics"
    },
    {
      id: 12,
      name: "Phylogenetic Tree Builder",
      category: "sequence",
      type: "Tool",
      description: "Construct phylogenetic trees using multiple algorithms with bootstrap support.",
      icon: <GitBranch className="w-6 h-6" />,
      features: ["Multiple Algorithms", "Bootstrap Support", "Tree Visualization"],
      status: "Available",
      url: "/tools/phylogenetic"
    },
    {
      id: 13,
      name: "Protein-Protein Interaction DB",
      category: "database",
      type: "Database",
      description: "Comprehensive database of protein-protein interactions with experimental evidence.",
      icon: <Layers className="w-6 h-6" />,
      features: ["Interaction Networks", "Experimental Evidence", "Functional Annotations"],
      status: "Available",
      url: "/tools/ppi-database"
    },
    {
      id: 14,
      name: "RNA-Seq Analysis Pipeline",
      category: "genomics",
      type: "Tool",
      description: "Complete RNA-seq data analysis from raw reads to differential expression analysis.",
      icon: <Zap className="w-6 h-6" />,
      features: ["Read Alignment", "Expression Quantification", "Differential Analysis"],
      status: "Available",
      url: "/tools/rnaseq-pipeline"
    },
    {
      id: 15,
      name: "Molecular Dynamics Simulator",
      category: "structure",
      type: "Tool",
      description: "High-performance molecular dynamics simulations for protein and nucleic acid systems.",
      icon: <Activity className="w-6 h-6" />,
      features: ["MD Simulations", "Force Fields", "Trajectory Analysis"],
      status: "Beta",
      url: "/tools/md-simulator"
    },
    {
      id: 16,
      name: "Variant Annotation Database",
      category: "database",
      type: "Database",
      description: "Comprehensive genetic variant annotation with clinical significance and population frequencies.",
      icon: <FileText className="w-6 h-6" />,
      features: ["Clinical Annotations", "Population Data", "Functional Predictions"],
      status: "Available",
      url: "/tools/variant-annotation"
    },
    {
      id: 17,
      name: "Primer Design Tool",
      category: "sequence",
      type: "Tool",
      description: "Automated primer design for PCR, qPCR, and sequencing applications with optimization.",
      icon: <Code className="w-6 h-6" />,
      features: ["PCR Primers", "qPCR Design", "Specificity Check"],
      status: "Available",
      url: "/tools/primer-design"
    },
    {
      id: 18,
      name: "Microbiome Analysis Suite",
      category: "analysis",
      type: "Tool",
      description: "Comprehensive microbiome data analysis including diversity metrics and taxonomic profiling.",
      icon: <Microscope className="w-6 h-6" />,
      features: ["Taxonomic Profiling", "Diversity Analysis", "Comparative Studies"],
      status: "Available",
      url: "/tools/microbiome"
    }
  ];

  const categories = [
    { id: "all", name: "All Categories", count: tools.length },
    { id: "sequence", name: "Sequence Analysis", count: tools.filter(t => t.category === "sequence").length },
    { id: "database", name: "Databases", count: tools.filter(t => t.category === "database").length },
    { id: "structure", name: "Structure Prediction", count: tools.filter(t => t.category === "structure").length },
    { id: "genomics", name: "Genomics", count: tools.filter(t => t.category === "genomics").length },
    { id: "analysis", name: "Analysis Tools", count: tools.filter(t => t.category === "analysis").length }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-green-100 text-green-800";
      case "Beta": return "bg-yellow-100 text-yellow-800";
      case "Coming Soon": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleAccessTool = (url: string) => {
    // For now, just show an alert. In a real app, this would navigate to the tool page
    alert(`Accessing tool: ${url}\n\nThis would navigate to the specific tool page in a real application.`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-pulse-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <div className="pulse-chip mx-auto mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                <Wrench className="w-3 h-3" />
              </span>
              <span>Tools & Databases</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Comprehensive Bioinformatics
              <span className="text-pulse-500 block">Repository</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access cutting-edge bioinformatics tools and comprehensive databases. 
              AI-powered pipelines coming soon to revolutionize your research workflow.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tools and databases..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pulse-500/20 focus:border-pulse-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pulse-500/20 focus:border-pulse-500 bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-pulse-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredTools.map((tool, index) => (
              <div
                key={tool.id}
                data-index={index}
                className={`tool-card glass-card p-6 sm:p-8 hover:shadow-elegant-hover transition-all duration-500 hover:translate-y-[-5px] group cursor-pointer ${
                  animatedCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center text-pulse-500 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(tool.status)}`}>
                      {tool.status}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{tool.type}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-pulse-500 transition-colors duration-300">
                  {tool.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  {tool.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleAccessTool(tool.url)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-xl transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">Access Tool</span>
                  <span className="sm:hidden">Access</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">No tools found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* AI Pipeline Preview */}
      <section className="py-16 bg-gradient-to-br from-pulse-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
              <Cpu className="w-3 h-3" />
            </span>
            <span>Coming Soon</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
            AI-Powered Pipeline Integration
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Revolutionary AI pipelines are coming to automate complex bioinformatics workflows, 
            streamline data processing, and accelerate scientific discoveries.
          </p>

          <button className="button-primary inline-flex items-center gap-2 text-sm sm:text-base">
            Get Early Access
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ToolsPage;
