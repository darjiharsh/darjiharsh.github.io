import React from 'react';
import { Code, ExternalLink, Database, Globe, Smartphone, Server, Palette, Cloud, Shield } from 'lucide-react';

const Skills = () => {

  const skillCategories = [
    {
      title: 'Adobe Commerce/Magento',
      icon: <Code className="text-purple-500" size={32} />,
      skills: [
        { name: 'Magento 2.4+', level: 95 },
        { name: 'Custom Extensions', level: 92 },
        { name: 'Third-Party Integration', level: 90 },
        { name: 'KnockoutJS', level: 88 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-blue-500" size={32} />,
      skills: [
        { name: 'PHP', level: 95 },
        { name: 'Laravel', level: 85 },
        { name: 'ExpressJS', level: 82 },
        { name: 'Java', level: 80 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Palette className="text-green-500" size={32} />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'HTML5/CSS3', level: 95 }
      ]
    },
    {
      title: 'APIs & Integration',
      icon: <Globe className="text-orange-500" size={32} />,
      skills: [
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 88 },
        { name: 'Payment Gateways', level: 90 },
        { name: 'CRM/ERP Integration', level: 85 }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <Database className="text-indigo-500" size={32} />,
      skills: [
        { name: 'MySQL', level: 92 },
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 88 },
        { name: 'AWS Services', level: 82 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <Cloud className="text-cyan-500" size={32} />,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Jenkins CI/CD', level: 88 },
        { name: 'Git', level: 95 },
        { name: 'AWS Lambda', level: 80 }
      ]
    }
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-4 group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors duration-300">{skill.name}</span>
        <span className="text-gray-600 text-sm font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-y-110"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="pt-24 pb-20 md:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to build exceptional e-commerce experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 group hover:-translate-y-3 border border-gray-100 hover:border-purple-200 relative overflow-hidden"
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl mr-4 group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-pink-100 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="text-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Additional Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Adobe Experience Manager', 'Bootstrap', 'jQuery', 'Ajax', 'XML', 'MVC/MVVM', 
                'PWA', 'AWS OpenSearch', 'DynamoDB', 'VS Code', 'XCode', 'Jira', 'Slack', 
                'Monday.com', 'Unit Testing', 'Performance Optimization', 'WCAG 2.0'
              ].map((tech, index) => (
                <span 
                  key={index} 
                  className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 hover:border-purple-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 font-medium"
                  style={{ animationDelay: `${600 + index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certification Section */}
        <div className="mt-16 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Certification</h3>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 max-w-2xl mx-auto group border border-gray-100 hover:border-purple-200">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="text-white" size={32} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                Adobe Experience Manager
              </h4>
              <p className="text-gray-600 mb-4">Udemy Certification</p>
              <a 
                href="#" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
              >
                View Certificate <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;