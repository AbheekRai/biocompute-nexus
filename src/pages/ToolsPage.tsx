import React, { useEffect, useState } from "react";
import { ArrowRight, Search, Filter, Database, Wrench, Cpu, BarChart3, Code, GitBranch, Dna, Microscope, Brain, Activity, Zap, FileText, Globe, Layers, ExternalLink } from "lucide-react";
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
      name: "BLAST (Basic Local Alignment Search Tool)",
      category: "sequence",
      type: "Tool",
      description: "NCBI's sequence similarity search tool for comparing nucleotide or protein sequences against databases.",
      icon: <Code className="w-6 h-6" />,
      features: ["Protein BLAST", "Nucleotide BLAST", "Genome Search"],
      status: "Available",
      url: "https://blast.ncbi.nlm.nih.gov/Blast.cgi"
    },
    {
      id: 2,
      name: "UniProt",
      category: "database",
      type: "Database",
      description: "Comprehensive protein sequence and functional information database with expert curation.",
      icon: <Database className="w-6 h-6" />,
      features: ["Protein Sequences", "Functional Annotations", "Cross-references"],
      status: "Available",
      url: "https://www.uniprot.org/"
    },
    {
      id: 3,
      name: "NCBI GenBank",
      category: "database",
      type: "Database",
      description: "NIH genetic sequence database containing annotated collection of all publicly available DNA sequences.",
      icon: <Database className="w-6 h-6" />,
      features: ["DNA Sequences", "Genome Data", "Literature Links"],
      status: "Available",
      url: "https://www.ncbi.nlm.nih.gov/genbank/"
    },
    {
      id: 4,
      name: "Protein Data Bank (PDB)",
      category: "structure",
      type: "Database",
      description: "Archive of 3D structural data of biological macromolecules including proteins and nucleic acids.",
      icon: <Cpu className="w-6 h-6" />,
      features: ["3D Structures", "X-ray Crystallography", "NMR Data"],
      status: "Available",
      url: "https://www.rcsb.org/"
    },
    {
      id: 5,
      name: "EMBL-EBI",
      category: "database",
      type: "Database",
      description: "European Bioinformatics Institute providing freely available data and bioinformatics services.",
      icon: <Globe className="w-6 h-6" />,
      features: ["Multiple Databases", "Analysis Tools", "Training Resources"],
      status: "Available",
      url: "https://www.ebi.ac.uk/"
    },
    {
      id: 6,
      name: "KEGG (Kyoto Encyclopedia)",
      category: "database",
      type: "Database",
      description: "Database resource for understanding high-level functions and utilities of the biological system.",
      icon: <GitBranch className="w-6 h-6" />,
      features: ["Pathway Maps", "Genome Analysis", "Drug Information"],
      status: "Available",
      url: "https://www.genome.jp/kegg/"
    },
    {
      id: 7,
      name: "Clustal Omega",
      category: "sequence",
      type: "Tool",
      description: "Multiple sequence alignment program for proteins and nucleotide sequences using HMM profile-profile techniques.",
      icon: <Code className="w-6 h-6" />,
      features: ["Multiple Alignment", "Phylogenetic Trees", "Large Datasets"],
      status: "Available",
      url: "https://www.ebi.ac.uk/Tools/msa/clustalo/"
    },
    {
      id: 8,
      name: "UCSC Genome Browser",
      category: "genomics",
      type: "Tool",
      description: "Interactive genome browser for visualizing genomic data and annotations across multiple species.",
      icon: <Dna className="w-6 h-6" />,
      features: ["Genome Visualization", "Custom Tracks", "Comparative Genomics"],
      status: "Available",
      url: "https://genome.ucsc.edu/"
    },
    {
      id: 9,
      name: "Ensembl",
      category: "database",
      type: "Database",
      description: "Genome database providing automatic annotation on selected eukaryotic genomes with comparative genomics.",
      icon: <Dna className="w-6 h-6" />,
      features: ["Genome Annotation", "Comparative Analysis", "Variation Data"],
      status: "Available",
      url: "https://www.ensembl.org/"
    },
    {
      id: 10,
      name: "InterPro",
      category: "database",
      type: "Database",
      description: "Integrated database of protein families, domains and functional sites with predictive models.",
      icon: <Layers className="w-6 h-6" />,
      features: ["Protein Classification", "Domain Architecture", "Functional Annotation"],
      status: "Available",
      url: "https://www.ebi.ac.uk/interpro/"
    },
    {
      id: 11,
      name: "ChEMBL",
      category: "database",
      type: "Database",
      description: "Database of bioactive molecules with drug-like properties maintained by the European Bioinformatics Institute.",
      icon: <Microscope className="w-6 h-6" />,
      features: ["Drug Compounds", "Bioactivity Data", "Target Information"],
      status: "Available",
      url: "https://www.ebi.ac.uk/chembl/"
    },
    {
      id: 12,
      name: "STRING",
      category: "database",
      type: "Database",
      description: "Database of known and predicted protein-protein interactions including direct and indirect associations.",
      icon: <GitBranch className="w-6 h-6" />,
      features: ["Protein Networks", "Functional Enrichment", "Comparative Analysis"],
      status: "Available",
      url: "https://string-db.org/"
    },
    {
      id: 13,
      name: "Galaxy",
      category: "analysis",
      type: "Platform",
      description: "Open, web-based platform for accessible, reproducible, and transparent computational research.",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Workflow Management", "Data Analysis", "Reproducible Research"],
      status: "Available",
      url: "https://usegalaxy.org/"
    },
    {
      id: 14,
      name: "Pfam",
      category: "database",
      type: "Database",
      description: "Database of protein families and domains based on multiple sequence alignments and hidden Markov models.",
      icon: <Code className="w-6 h-6" />,
      features: ["Protein Families", "Domain Architecture", "Phylogenetic Trees"],
      status: "Available",
      url: "http://pfam.xfam.org/"
    },
    {
      id: 15,
      name: "DAVID",
      category: "analysis",
      type: "Tool",
      description: "Database for Annotation, Visualization and Integrated Discovery providing functional annotation tools.",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Gene Ontology", "Pathway Analysis", "Functional Classification"],
      status: "Available",
      url: "https://david.ncifcrf.gov/"
    },
    {
      id: 16,
      name: "AlphaFold Protein Structure Database",
      category: "structure",
      type: "Database",
      description: "DeepMind's AI-predicted protein structures covering the human proteome and other key organisms.",
      icon: <Brain className="w-6 h-6" />,
      features: ["AI Predictions", "Confidence Scores", "3D Visualization"],
      status: "Available",
      url: "https://alphafold.ebi.ac.uk/"
    },
    {
      id: 17,
      name: "NCBI RefSeq",
      category: "database",
      type: "Database",
      description: "Non-redundant collection of reference sequences including genomic, transcript, and protein records.",
      icon: <FileText className="w-6 h-6" />,
      features: ["Reference Sequences", "Genome Assemblies", "Annotation Data"],
      status: "Available",
      url: "https://www.ncbi.nlm.nih.gov/refseq/"
    },
    {
      id: 18,
      name: "ClinVar",
      category: "database",
      type: "Database",
      description: "Public archive of reports of human genetic variation relationships to phenotypes with clinical significance.",
      icon: <Activity className="w-6 h-6" />,
      features: ["Genetic Variants", "Clinical Significance", "Population Data"],
      status: "Available",
      url: "https://www.ncbi.nlm.nih.gov/clinvar/"
    },
    {
      id: 19,
      name: "HMMER",
      category: "sequence",
      type: "Tool",
      description: "Biosequence analysis using profile hidden Markov models for protein sequence homology searches.",
      icon: <Code className="w-6 h-6" />,
      features: ["HMM Profiles", "Homology Search", "Domain Annotation"],
      status: "Available",
      url: "http://hmmer.org/"
    },
    {
      id: 20,
      name: "Gene Ontology (GO)",
      category: "database",
      type: "Database",
      description: "Structured vocabulary describing gene and gene product attributes across all species.",
      icon: <GitBranch className="w-6 h-6" />,
      features: ["Functional Annotation", "Ontology Terms", "Enrichment Analysis"],
      status: "Available",
      url: "http://geneontology.org/"
    }
  ];

  const categories = [
    { id: "all", name: "All Categories", count: tools.length },
    { id: "sequence", name: "Sequence Analysis", count: tools.filter(t => t.category === "sequence").length },
    { id: "database", name: "Databases", count: tools.filter(t => t.category === "database").length },
    { id: "structure", name: "Structure", count: tools.filter(t => t.category === "structure").length },
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
    window.open(url, '_blank', 'noopener,noreferrer');
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
                  <span>Access Tool</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
