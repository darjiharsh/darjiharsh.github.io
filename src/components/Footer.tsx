import React, { useState, useEffect } from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show floating button when scrolling down (after 300px) but hide when near footer
      const isNearFooter = scrollY + windowHeight > documentHeight - 200; // 200px from bottom
      const shouldShow = scrollY > 300 && !isNearFooter;
      
      setShowScrollTop(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Harsh Darji
              </span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Full Stack Developer and Adobe Commerce (Magento) Developer passionate about creating scalable e-commerce solutions and driving business growth. Let's build something amazing together.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart className="mx-2 text-red-500" size={16} fill="currentColor" />
              <span>by Harsh Darji</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Education', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>harshdarji82@gmail.com</li>
              <li>(519) 702-3060</li>
              <li>London, ON, Canada</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Harsh Darji. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      {/* Floating Scroll to Top Button - Mobile Only */}
      {showScrollTop && (
        <div className="md:hidden fixed bottom-6 right-6 z-50 animate-fade-in">
          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;