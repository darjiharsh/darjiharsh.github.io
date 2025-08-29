import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation(0.2);

  const experiences = [
    {
      title: 'Magento Developer',
      company: 'Jewels By Love',
      location: 'St Maarten, Netherlands Antilles (Remote)',
      period: 'May 2023 - Present',
      description: [
        'Customized and deployed Magento 2 e-commerce solutions aligned with business needs and Adobe Commerce standards',
        'Integrated RESTful APIs with third-party services (Payment Gateways, CRM, ERP) and designed secure, scalable data flow',
        'Conducted performance tuning and optimization for Adobe Commerce instances, reducing load time and improving UX',
        'Delivered end-to-end testing coverage including unit, integration, and regression testing',
        'Leveraged ReactJS to build dynamic and responsive components, enhancing digital experience and speed',
        'Monitored, updated, and patched Adobe Commerce instances ensuring reliability and security'
      ],
      technologies: ['Magento 2', 'Payment Gateways', 'CRM', 'ERP', 'Adobe Commerce', 'ReactJS', 'REST APIs', 'PHP', 'MySQL']
    },
    {
      title: 'Junior Magento Developer',
      company: 'Graphically Speaking',
      location: 'Vancouver, Canada',
      period: 'Oct 2022 - Oct 2023',
      duration: '1 year contract',
      description: [
        'Designed, developed, and maintained Adobe Commerce applications aligned with user and business needs',
        'Integrated extensions such as payment gateways, tax calculators, POS & CRM Tools',
        'Provided post deployment support and troubleshoot & fix the issues faced by the limited users',
        'Handled version upgrade while maintaining staging and production server using version control GIT',
        'Customized Magento modules, themes, and core functionality to support e-commerce workflows',
        'Ensured web accessibility compliance with WCAG 2.0 AA and optimized UI for performance'
      ],
      technologies: ['Post Deployment Support', 'Tax Calculators', 'POS', 'CRM', 'Magento 2', 'Git', 'Payment Gateways', 'WCAG 2.0', 'PHP']
    },
    {
      title: 'Associate Software Developer',
      company: 'Brainvire',
      location: 'Gujarat, India',
      period: 'Sep 2020 - Apr 2022',
      description: [
        'Led the full-cycle development of enterprise-level Magento 2 e-commerce platforms',
        'Improved platform performance by optimizing MySQL database queries, restructuring data models, and enhancing indexing',
        'Achieved a 15% reduction in response times through performance optimization',
        'Implemented a CI/CD pipeline with Jenkins and Docker for automated updates',
        'Reduced manual errors and accelerated release cycles through automation',
        'Engaged in agile development processes, participating in daily standups, sprint planning, and retrospectives'
      ],
      technologies: ['Magento 2', 'Extension Development', 'MySQL', 'Jenkins', 'Docker', 'CI/CD', 'Jira', 'Agile', 'PHP']
    },
    {
      title: 'Web Developer',
      company: 'Akash Technolabs',
      location: 'Gujarat, India',
      period: 'Jul 2018 - Jun 2020',
      description: [
        'Developed complex custom extensions for Magento 2, ensuring compatibility with existing architecture',
        'Created fully responsive user interfaces using React and modern JavaScript frameworks',
        'Optimized performance and accessibility across devices for enhanced user experience',
        'Managed product listings and configured admin settings',
        'Enhanced knowledge of Magento store configuration through continuous self-study and practical application'
      ],
      technologies: ['Magento 2', 'React', 'JavaScript', 'PHP', 'HTML5', 'CSS3']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
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
            Work <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in Adobe Commerce and e-commerce development
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full shadow-lg transition-all duration-1000 ${
            timelineVisible ? 'opacity-100' : 'opacity-0'
          }`}></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-1000 ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: `${400 + index * 200}ms` }}>
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-xl z-20 transition-all duration-1000 ${
                  sectionVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`} style={{ transitionDelay: `${600 + index * 200}ms` }}></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 ml-20 md:ml-0' : 'md:pl-12 ml-20 md:ml-0'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 group relative overflow-hidden">
                    {/* Card Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center">
                          <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <Briefcase className="text-white" size={28} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">{exp.title}</h3>
                            <p className="text-xl font-semibold text-purple-600 mb-2">{exp.company}</p>
                            {exp.duration && (
                              <p className="text-sm text-gray-500 italic">({exp.duration})</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-600">
                        <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                          <Calendar size={16} className="mr-2 text-purple-500" />
                          {exp.period}
                        </div>
                        <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                          <MapPin size={16} className="mr-2 text-purple-500" />
                          {exp.location}
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-600 flex items-start leading-relaxed">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                            <span className="group-hover:text-gray-700 transition-colors duration-300">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full font-medium hover:from-purple-200 hover:to-pink-200 transition-all duration-300 transform hover:scale-105">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Year Badge */}
                <div className={`hidden md:block absolute top-0 ${index % 2 === 0 ? 'right-0 mr-4' : 'left-0 ml-4'} transform ${index % 2 === 0 ? 'translate-x-full' : '-translate-x-full'} transition-all duration-1000 ${
                  sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`} style={{ transitionDelay: `${800 + index * 200}ms` }}>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {exp.period.split(' - ')[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;