import React from 'react';
import { User, Award, Coffee, Heart } from 'lucide-react';

const About = () => {

  const stats = [
    { icon: <Award className="text-purple-500" size={32} />, number: '5+', label: 'Years Experience' },
    { icon: <Coffee className="text-purple-500" size={32} />, number: '15+', label: 'Worked On Live Projects' },
    { icon: <Heart className="text-purple-500" size={32} />, number: '25+', label: 'Happy Clients' },
    { icon: <User className="text-purple-500" size={32} />, number: '20+', label: 'Integrations Built' },
  ];

  return (
    <section id="about" className="pt-24 pb-20 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full p-1">
                <div className="w-full h-full bg-white rounded-full overflow-hidden">
                  <img 
                    src="/images/portfolio-img.png" 
                    alt="Portfolio Image" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl"></div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Crafting E-Commerce Excellence
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm a passionate Adobe Commerce (Magento) Developer with several years of experience 
                delivering scalable, secure, and high-performance e-commerce platforms. I specialize in 
                Magento 2, custom module development, and third-party integrations.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                My expertise spans REST APIs, GraphQL, performance optimization, and system integration. 
                I have a proven track record in enhancing digital experiences through system optimization, 
                performance tuning, and seamless integration of Adobe and third-party services.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;