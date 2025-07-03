
import React from "react";
import { Users, Target, Lightbulb, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Scientific Officer",
      bio: "PhD in Bioinformatics with 15 years of experience in computational biology and AI research.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Head of Database Engineering",
      bio: "Expert in large-scale biological database design and high-performance computing systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Emily Watson",
      role: "AI Pipeline Architect",
      bio: "Specialist in machine learning applications for biological data analysis and pipeline automation.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. James Park",
      role: "Lead Bioinformatician",
      bio: "Experienced in genomics, proteomics, and metabolomics data analysis with focus on translational research.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const achievements = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "10,000+ Researchers",
      description: "Scientists worldwide using our platform"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "50+ Tools & Databases",
      description: "Comprehensive bioinformatics resources"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "AI-Powered Innovation",
      description: "Next-generation pipeline automation"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Research Excellence",
      description: "Supporting breakthrough discoveries"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-pulse-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <div className="pulse-chip mx-auto mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                <Users className="w-3 h-3" />
              </span>
              <span>About Us</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Empowering Scientific
              <span className="text-pulse-500 block">Discovery</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              BioCompute Nexus is dedicated to advancing bioinformatics research through 
              comprehensive tools, databases, and cutting-edge AI pipeline integration.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 lg:py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that powerful bioinformatics tools should be accessible to researchers 
                worldwide. Our mission is to democratize computational biology by providing 
                comprehensive, user-friendly tools and databases that accelerate scientific discovery.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                With the upcoming integration of AI-powered pipelines, we're revolutionizing how 
                researchers approach complex biological data analysis, making sophisticated 
                computations accessible to scientists at all levels.
              </p>
              <button className="button-primary inline-flex items-center gap-2 text-sm sm:text-base">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
                alt="Scientific research and data analysis"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Supporting researchers worldwide in their quest for scientific breakthroughs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pulse-100 rounded-xl flex items-center justify-center text-pulse-500 mx-auto mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 lg:py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Leading experts in bioinformatics, AI, and computational biology
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:shadow-elegant-hover transition-all duration-300">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-pulse-500 font-medium mb-3 text-sm sm:text-base">{member.role}</p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-pulse-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                alt="Future of bioinformatics"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-elegant"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
                The Future of Bioinformatics
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                We envision a future where AI-powered bioinformatics pipelines enable researchers 
                to focus on discovery rather than data processing. Our upcoming AI integration 
                will automate complex workflows, provide intelligent insights, and accelerate 
                the pace of scientific breakthroughs.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                From genomics to proteomics, from drug discovery to personalized medicine, 
                BioCompute Nexus is building the infrastructure for the next generation of 
                biological research.
              </p>
              <div className="pulse-chip">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                  <Lightbulb className="w-3 h-3" />
                </span>
                <span>AI Pipelines Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Become part of a growing community of researchers leveraging cutting-edge 
            bioinformatics tools for groundbreaking discoveries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="button-primary inline-flex items-center gap-2 text-sm sm:text-base">
              Start Exploring
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="button-secondary text-sm sm:text-base">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
