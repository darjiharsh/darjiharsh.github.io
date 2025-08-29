import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.3);

  const education = [
    {
      degree: 'Mobile Application Programming',
      institution: 'Fanshawe College',
      location: 'London, ON, Canada',
      period: 'Dec 2023',
      type: 'Certificate Program',
      description: 'Specialized program focusing on mobile app development, React Native, and modern mobile technologies.',
      highlights: [
        'React Native Development',
        'Mobile UI/UX Design',
        'Cross-platform Development',
        'Mobile App Architecture'
      ]
    },
    {
      degree: 'Masters of Computer Science & Information Technology',
      institution: 'Gujarat University',
      location: 'Gujarat, India',
      period: 'June 2020',
      type: 'Master\'s Degree',
      description: 'Comprehensive graduate program covering advanced computer science concepts, software engineering, and information technology.',
      highlights: [
        'Software Engineering',
        'Database Management',
        'Web Technologies',
        'System Architecture'
      ]
    }
  ];

  return (
    <section id="education" className="pt-24 pb-20 md:py-20 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation that shaped my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8" ref={cardsRef}>
          {education.map((edu, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 group hover:-translate-y-2 border border-gray-100 hover:border-purple-200 relative overflow-hidden ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <GraduationCap className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold rounded-full">
                        {edu.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-purple-600 mb-3">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                    <Calendar size={16} className="mr-2 text-purple-500" />
                    {edu.period}
                  </div>
                  <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                    <MapPin size={16} className="mr-2 text-purple-500" />
                    {edu.location}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{edu.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Award className="mr-2 text-purple-500" size={16} />
                    Key Areas
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 flex-shrink-0"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;