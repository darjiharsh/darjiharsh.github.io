import { useState } from 'react';
import { Briefcase, Calendar, MapPin, X, Eye } from 'lucide-react';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (exp: any) => {
    setSelectedExperience(exp);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
    document.body.style.overflow = 'unset';
  };

  const experiences = [
    {
      title: 'Magento Developer',
      company: 'Jewels By Love',
      location: 'St Maarten, (Remote)',
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
    <section id="experience" className="pt-24 pb-20 md:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in Adobe Commerce and e-commerce development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full shadow-lg"></div>

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot - Hidden on mobile, visible on desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-xl z-20"></div>

                {/* Content Card - Full width on mobile, half width on desktop */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 group relative overflow-hidden">
                    {/* Card Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <Briefcase className="text-white" size={20} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-300">{exp.title}</h3>
                            <p className="text-base font-semibold text-purple-600 mb-1">{exp.company}</p>
                            {exp.duration && (
                              <p className="text-xs text-gray-500 italic">({exp.duration})</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-gray-600">
                        <div className="flex items-center bg-gray-50 px-2 py-1.5 rounded-lg">
                          <Calendar size={14} className="mr-1.5 text-purple-500" />
                          {exp.period}
                        </div>
                        <div className="flex items-center bg-gray-50 px-2 py-1.5 rounded-lg">
                          <MapPin size={14} className="mr-1.5 text-purple-500" />
                          {exp.location}
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.slice(0, 2).map((item, i) => (
                          <li key={i} className="text-gray-600 flex items-start leading-relaxed text-sm">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="group-hover:text-gray-700 transition-colors duration-300">{item}</span>
                          </li>
                        ))}
                        {exp.description.length > 2 && (
                          <li className="text-purple-600 text-xs font-medium">
                            +{exp.description.length - 2} more responsibilities
                          </li>
                        )}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {exp.technologies.slice(0, 4).map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs rounded-full font-medium hover:from-purple-200 hover:to-pink-200 transition-all duration-300 transform hover:scale-105">
                            {tech}
                          </span>
                        ))}
                        {exp.technologies.length > 4 && (
                          <span className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 text-xs rounded-full font-medium">
                            +{exp.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* View More Button */}
                      <button
                        onClick={() => openModal(exp)}
                        className="w-full py-2 px-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center text-sm"
                      >
                        <Eye size={16} className="mr-1.5" />
                        View More Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Timeline Year Badge */}
                <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'right-4' : 'left-4'} ${index % 2 === 0 ? 'md:translate-x-2 lg:translate-x-3' : 'md:-translate-x-2 lg:-translate-x-3'}`}>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {exp.period.split(' - ')[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Modal */}
      {isModalOpen && selectedExperience && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-75 transition-opacity duration-300"
              onClick={closeModal}
            ></div>

            {/* Modal content */}
            <div className="relative w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl transform transition-all duration-300 animate-in max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                >
                  <X size={24} />
                </button>

                {/* Modal header */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 sm:p-8 rounded-t-2xl">
                  <div className="flex items-center">
                    <div className="p-4 bg-white/20 rounded-xl mr-4">
                      <Briefcase className="text-white" size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedExperience.title}</h2>
                      <p className="text-xl font-semibold text-white/90 mb-2">{selectedExperience.company}</p>
                      {selectedExperience.duration && (
                        <p className="text-sm text-white/80 italic">({selectedExperience.duration})</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Modal body */}
                <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8">
                  {/* Location and Period */}
                  <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600">
                    <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <Calendar size={18} className="mr-3 text-purple-500" />
                      <span className="font-medium">{selectedExperience.period}</span>
                    </div>
                    <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <MapPin size={18} className="mr-3 text-purple-500" />
                      <span className="font-medium">{selectedExperience.location}</span>
                    </div>
                  </div>

                  {/* All Responsibilities */}
                  <div className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Eye className="mr-2 sm:mr-3 text-purple-500 sm:w-6 sm:h-6" size={20} />
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-3">
                      {selectedExperience.description.map((item: any, i: any) => (
                        <li key={i} className="text-gray-600 flex items-start leading-relaxed">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                          <span className="text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* All Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Briefcase className="mr-2 sm:mr-3 text-purple-500 sm:w-6 sm:h-6" size={20} />
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedExperience.technologies.map((tech: any, i: any) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-medium rounded-full border border-purple-200 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 transform hover:scale-105 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 border-t border-gray-200">
                    <button
                      onClick={closeModal}
                      className="flex-1 text-center py-3 sm:py-4 px-4 sm:px-6 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-purple-500 hover:text-purple-600 transition-all duration-300 font-medium text-sm sm:text-base"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;