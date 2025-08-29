import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.2);
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation(0.3);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-white" size={24} />,
      title: 'Email',
      value: 'harshdarji82@gmail.com',
      href: 'mailto:harshdarji82@gmail.com'
    },
    {
      icon: <Phone className="text-white" size={24} />,
      title: 'Phone',
      value: '(519) 702-3060',
      href: 'tel:+15197023060'
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      title: 'Location',
      value: 'London, ON, Canada',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/darjiharsh',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/harshdarji-it/',
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8" ref={infoRef}>
            <div className={`text-center transition-all duration-1000 delay-300 ${
              infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm always excited to work on new e-commerce projects and collaborate with innovative teams. 
                Whether you need Magento expertise, custom development, or want to discuss Adobe Commerce solutions, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={`flex items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group ${
                    infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                    <a href={info.href} className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className={`text-center transition-all duration-1000 delay-700 ${
              infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-white rounded-lg text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;