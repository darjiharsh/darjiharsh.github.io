import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 sm:pt-28 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-cyan-500/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mt-0 lg:mt-24">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Harsh Darji
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
            Full Stack Developer | Magento Developer | Agile and Scrum Methodology
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            
            Results-driven Full Stack Developer and Adobe Commerce Specialist with 5+ years of experience building scalable, secure, and performant mobile and web applications.
            <br />
            Expert in Magento 2, TypeScript and React frameworks with deep knowledge of backend development, micro front-end architecture and responsive mobile-first design. 
            Proven track record of optimizing CI/CD pipelines, enhancing accessibility, and delivering seamless cross-device experiences. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
            <a 
              href="/resume/Harsh-Darji-CV.pdf" 
              download="Harsh-Darji-CV.pdf"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center cursor-pointer"
            >
              Download Resume
            </a>
            <a href="#projects" className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center">
              View My Work
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-4">
            <a href="https://github.com/darjiharsh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/harshdarji-it/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Linkedin size={28} />
            </a>
            <a href="mailto:harshdarji82@gmail.com" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Mail size={28} />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;