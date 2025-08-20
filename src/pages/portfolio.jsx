import React, { useState } from 'react';
import { Home, User, FolderOpen, Mail, Github, Linkedin, ExternalLink, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full shadow-md z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-10 py-6">
          <div className="flex justify-between items-center">
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>ROSE IRUNGU</h1>
            <div className="flex items-center space-x-6">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-md transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-500'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => scrollToSection('home')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  activeSection === 'home'
                    ? 'bg-blue-500 text-white'
                    : `${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`
                }`}
              >
                <Home size={18} />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  activeSection === 'about'
                    ? 'bg-blue-500 text-white'
                    : `${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`
                }`}
              >
                <User size={18} />
                <span>About</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  activeSection === 'projects'
                    ? 'bg-blue-500 text-white'
                    : `${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`
                }`}
              >
                <FolderOpen size={18} />
                <span>Projects</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  activeSection === 'contact'
                    ? 'bg-blue-500 text-white'
                    : `${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`
                }`}
              >
                <Mail size={18} />
                <span>Contact</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className={`pt-20 min-h-screen flex items-center ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Hi, I'm <span className="text-blue-600">Rose Irungu</span>
            </h1>
            <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Frontend Developer | Cloud Enthusiast
            </p>
            <p className={`text-lg mb-10 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              I design and build user-friendly, scalable applications. Passionate about clean code, reusable components, and creating seamless user experiences.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="com.jpg"
                  alt="About me"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Passionate Frontend Developer
                </h3>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm a developer with a background in Information Technology, skilled in building modern, responsive, and accessible web applications. My journey started in university and has grown through real-world projects, group collaborations, and continuous self-development.
                </p>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I enjoy working with React, Tailwind CSS, and Django to build solutions that empower people. Beyond coding, I'm exploring cloud computing (AWS) and finding creative ways to merge frontend with cloud-native systems.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                    <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      Frontend
                    </h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      React, Tailwind CSS, JavaScript
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                    <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Cloud</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      AWS Cloud Practitioner, Deployment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              My Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Visitor Gate Management System */}
              <div className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img
                  src="visitor gate.png"
                  alt="Visitor Gate Management"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Visitor Gate Management
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    A React + Django powered system for handling visitor check-ins, resident invites, and security validation with real-time updates.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Django</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">WebSockets</span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Rose-Irungu/kiosk.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href="https://guest.zynamis.co.ke/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* GBV Reporting Platform */}
              <div className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img
                  src="gbv.png"
                  alt="GBV Reporting Platform"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    GBV Reporting Platform
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    A secure incident reporting tool with safety assessments, case tracking, and database integration for secure data management.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Django</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">SQLite</span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Rose-Irungu/GBV-Reporting-Portal.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href="https://gbv-reporting-portal.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Daycare Management System */}
              <div className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img
                  src="daycare.png"
                  alt="Daycare Management"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Daycare Management System
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    A platform for managing children's records, daily logs, staff schedules, and parent communication in a digital-first daycare.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Django</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">SQLite</span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Rose-Irungu/Daycare-system.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href="https://guest.zynamis.co.ke/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* NBA Data Analytics */}
              <div className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img
                  src="data lake.png"
                  alt="NBA Data Analytics"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    NBA Data Analytics
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    A cloud-based analytics pipeline that processes NBA stats to deliver insights and visualizations on player performance and trends.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">AWS</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Python</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">AWS Glue</span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Rose-Irungu/kiosk.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href="https://medium.com/@roseirungu497/setting-up-an-nba-analytics-data-lake-with-aws-a-step-by-step-guide-e90e46502844"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Sports Alert System */}
              <div className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img
                  src="alert system.webp"
                  alt="Sports Alert System"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Sports Alert System
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    A serverless cloud project delivering live sports notifications and score alerts via automated pipelines and real-time messaging.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">AWS Lambda</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">API Gateway</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">SNS</span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Rose-Irungu/kiosk.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href="https://medium.com/@roseirungu497/sports-alert-system-98dc22b1ba39"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-12 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Get In Touch
            </h2>
            <p className={`text-lg mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Always open to internships, collaborations, or just sharing knowledge about tech, frontend, and cloud. Let's connect!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <a
                  href="mailto:roseirungu497@gmail.com"
                  className={`text-lg font-semibold mb-2 hover:text-blue-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                >
                  Email
                </a>
              </div>

              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Github className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <a
                  href="https://github.com/Rose-Irungu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg font-semibold mb-2 hover:text-blue-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                >
                  GitHub
                </a>
              </div>

              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <a
                  href="https://www.linkedin.com/in/roseirungu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg font-semibold mb-2 hover:text-blue-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-white'}`}>
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Rose Irungu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;