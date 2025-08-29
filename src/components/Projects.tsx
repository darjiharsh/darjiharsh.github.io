import React, { useState } from 'react';
import { Github, ExternalLink, Star, Eye, Code, Zap, Users, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2);
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation(0.3);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.4);

  const projects = [
    {
      title: 'JSN GlowAlert',
      description: 'Advanced Magento 2 extension that replaces default notifications with beautiful SweetAlert2 animations. Features conditional JavaScript loading, multiselect admin configuration, and AJAX integration for seamless cart operations.',
      image: '/images/magento-original.svg',
      technologies: ['Magento 2', 'PHP', 'JavaScript', 'jQuery', 'SweetAlert2', 'XML', 'AJAX'],
      github: 'https://github.com/darjiharsh/JSN-GlowAlert',
      demo: '#',
      highlights: [
        'Zero performance impact when disabled',
        'Multiselect admin configuration',
        'Custom success/error handling'
      ],
      longDescription: 'JSN GlowAlert is a comprehensive Magento 2 extension that revolutionizes the user experience by replacing default browser notifications with elegant, customizable SweetAlert2 animations. The extension is built with performance in mind, featuring conditional JavaScript loading that only activates when needed, ensuring zero impact on page load times when disabled. It includes a sophisticated admin configuration panel with multiselect options, allowing store administrators to fine-tune notification behavior for different user actions. The AJAX integration seamlessly handles cart operations, checkout processes, and form submissions, providing immediate visual feedback to users.',
      challenges: [
        'Optimizing JavaScript loading for performance',
        'Integrating with Magento 2 admin configuration system',
        'Ensuring compatibility across different Magento versions'
      ],
      solutions: [
        'Implemented conditional loading based on user actions',
        'Created custom admin configuration using Magento 2 system.xml',
        'Used dependency injection for version compatibility'
      ]
    },
    {
      title: 'Coffee Recipe Mobile App',
      description: 'React Native application with Firebase backend featuring user authentication, recipe sharing, post engagement system, and real-time data management. Includes social features and community-driven content.',
      image: '/images/react-original.svg',
      technologies: ['React Native', 'Material UI', 'Expo', 'Redux', 'Firebase', 'React Native Paper'],
      github: 'https://github.com/darjiharsh/Coffee-Recipe',
      demo: '#',
      highlights: [
        'Real-time data synchronization',
        'Social engagement features',
        'Secure authentication system'
      ],
      longDescription: 'The Coffee Recipe Mobile App is a full-featured React Native application that brings coffee enthusiasts together through recipe sharing and community engagement. Built with Expo for cross-platform compatibility, the app features a robust Firebase backend that handles real-time data synchronization, user authentication, and cloud storage. Users can create, share, and discover coffee recipes, with features like likes, comments, and user profiles. The app implements Redux for state management and uses Material UI components for a consistent, professional design. Social features include following other users, bookmarking favorite recipes, and participating in community discussions.',
      challenges: [
        'Implementing real-time data synchronization',
        'Managing complex state with Redux',
        'Optimizing app performance on mobile devices'
      ],
      solutions: [
        'Used Firebase Realtime Database with listeners',
        'Structured Redux store with proper action creators',
        'Implemented lazy loading and image optimization'
      ]
    },
    {
      title: 'Virtual Cook App',
      description: 'Interactive cooking app with text-to-speech functionality, recipe filtering, multi-language support (English/French), and unique features like phone shake for random recipes and app customization.',
      image: '/images/react-original.svg',
      technologies: ['React Native', 'Material UI', 'Expo', 'Redux', 'Expo-speech', 'Expo-sharing'],
      github: 'https://github.com/darjiharsh/virtual-cook',
      demo: '#',
      highlights: [
        'Text-to-speech integration',
        'Multi-language support',
        'Interactive shake feature'
      ],
      longDescription: 'Virtual Cook is an innovative cooking application that combines traditional recipe management with cutting-edge mobile technology. The app features text-to-speech functionality that reads recipe instructions aloud, making it perfect for hands-free cooking. It supports multiple languages (English and French) with a complete localization system. One of the most unique features is the phone shake detection that randomly selects recipes, adding an element of surprise and discovery. The app includes comprehensive recipe filtering by cuisine, difficulty, cooking time, and dietary restrictions. Users can customize the interface with themes and save their favorite recipes for offline access.',
      challenges: [
        'Implementing text-to-speech in multiple languages',
        'Creating responsive shake detection',
        'Managing offline data storage'
      ],
      solutions: [
        'Integrated Expo-speech with language detection',
        'Used device motion sensors for shake detection',
        'Implemented AsyncStorage for offline capabilities'
      ]
    },
    {
      title: 'Recruitment System',
      description: 'Custom Magento 2 recruitment module with multi-language support, responsive Tailwind CSS design, AJAX form submission, and comprehensive admin management with custom grids and configuration panels.',
      image: '/images/magento-original.svg',
      technologies: ['Magento 2', 'PHP', 'Tailwind CSS', 'AJAX', 'JavaScript', 'XML', 'MySQL'],
      github: 'https://github.com/darjiharsh/recruitment-system',
      demo: '#',
      highlights: [
        'Multi-language support',
        'Custom admin interface',
        'Resume preview functionality'
      ],
      longDescription: 'The Recruitment System is a comprehensive Magento 2 module designed to streamline the hiring process for e-commerce businesses. Built with modern web technologies, it features a responsive frontend using Tailwind CSS that works seamlessly across all devices. The system includes advanced form handling with AJAX submission, preventing page reloads and providing real-time validation feedback. The admin interface features custom grids for managing applications, candidates, and job postings, with advanced filtering and sorting capabilities. Multi-language support ensures the system can be used in different regions, while the resume preview functionality allows HR teams to quickly assess candidate qualifications.',
      challenges: [
        'Creating responsive design for complex forms',
        'Implementing custom admin grids',
        'Managing file uploads and storage'
      ],
      solutions: [
        'Used Tailwind CSS with mobile-first approach',
        'Extended Magento 2 Grid classes',
        'Implemented secure file handling with validation'
      ]
    },
    {
      title: 'Category Collection Module',
      description: 'Magento 2 module showcasing subcategories with images on product list pages. Implements MVVM architecture, custom category attributes, and enhanced catalog functionality with Block and Helper classes.',
      image: '/images/magento-original.svg',
      technologies: ['Magento 2', 'XML', 'MVVM', 'PHTML', 'MySQL', 'KnockoutJS', 'jQuery'],
      github: 'https://github.com/darjiharsh/Category-collection',
      demo: '#',
      highlights: [
        'MVVM architecture implementation',
        'Custom category attributes',
        'Enhanced catalog functionality'
      ],
      longDescription: 'The Category Collection Module is a sophisticated Magento 2 extension that enhances the catalog browsing experience by displaying subcategories with rich visual information on product list pages. Built following Magento 2 best practices, it implements the MVVM (Model-View-ViewModel) architecture pattern for clean separation of concerns. The module extends the category system with custom attributes, allowing store administrators to add images, descriptions, and promotional content to subcategories. It includes custom Block and Helper classes for efficient data retrieval and presentation, while maintaining compatibility with existing Magento 2 functionality. The frontend implementation uses KnockoutJS for dynamic content updates and jQuery for enhanced user interactions.',
      challenges: [
        'Implementing MVVM architecture in Magento 2',
        'Extending category attributes without conflicts',
        'Optimizing database queries for performance'
      ],
      solutions: [
        'Followed Magento 2 architectural patterns',
        'Used proper attribute installation scripts',
        'Implemented efficient data collection methods'
      ]
    }
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my Magento expertise and development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" ref={projectsRef}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden group hover:-translate-y-3 border border-gray-100 hover:border-purple-200 cursor-pointer ${
                projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-fill object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Type Badge */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
                    {project.technologies[0]}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">{project.title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Zap className="mr-2 text-purple-500" size={16} />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-medium rounded-full hover:from-purple-200 hover:to-pink-200 transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 px-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-purple-500 hover:text-purple-600 transition-all duration-300 font-medium flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Code size={16} className="mr-2" />
                    Code
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center" ref={ctaRef}>
          <div className={`transition-all duration-1000 delay-500 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1 rounded-2xl inline-block">
              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in My Work?</h3>
                <p className="text-gray-600 mb-6">Check out more projects and contributions on my GitHub profile</p>
                <a
                  href="https://github.com/darjiharsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
                >
                  <Github className="mr-3" size={24} />
                  View All Projects on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
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
                  className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <X size={24} />
                </button>

                {/* Hero image */}
                <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex space-x-2 sm:space-x-3">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                      >
                        <Github size={16} />
                      </a>
                      {selectedProject.demo !== '#' && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Modal body */}
                <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8">
                  {/* Detailed description */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Project Overview</h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{selectedProject.longDescription}</p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                      <Zap className="mr-2 sm:mr-3 text-purple-500 sm:w-6 sm:h-6" size={20} />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {selectedProject.highlights.map((highlight: any, i: any) => (
                        <div key={i} className="flex items-start p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium text-sm sm:text-base">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                      <Code className="mr-2 sm:mr-3 text-purple-500 sm:w-6 sm:h-6" size={20} />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {selectedProject.technologies.map((tech: any, techIndex: any) => (
                        <span
                          key={techIndex}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-medium rounded-full border border-purple-200 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                        <Eye className="mr-2 sm:mr-3 text-red-500 sm:w-6 sm:h-6" size={20} />
                        Challenges Faced
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedProject.challenges.map((challenge: any, i: any) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm sm:text-base">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                        <Users className="mr-2 sm:mr-3 text-green-500 sm:w-6 sm:h-6" size={20} />
                        Solutions Implemented
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedProject.solutions.map((solution: any, i: any) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm sm:text-base">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 border-t border-gray-200">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 sm:py-4 px-4 sm:px-6 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-purple-500 hover:text-purple-600 transition-all duration-300 font-medium flex items-center justify-center text-sm sm:text-base"
                    >
                      <Code size={18} className="mr-2 sm:w-5 sm:h-5" />
                      View Code on GitHub
                    </a>
                    {selectedProject.demo !== '#' && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center text-sm sm:text-base"
                      >
                        <ExternalLink size={18} className="mr-2 sm:w-5 sm:h-5" />
                        Live Demo
                      </a>
                    )}
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

export default Projects;