import React, { useState } from 'react';
import { Home, User, FolderOpen, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
            <div className="flex space-x-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  activeSection === 'home' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <Home size={18} />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  activeSection === 'about' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <User size={18} />
                <span>About</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  activeSection === 'projects' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <FolderOpen size={18} />
                <span>Projects</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  activeSection === 'contact' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-500'
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
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-8 shadow-lg"
            />
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-blue-600">John Doe</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              I create beautiful, responsive web applications and love turning ideas into reality through code.
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
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://via.placeholder.com/400x500"
                  alt="About me"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Passionate Developer with 3+ Years Experience
                </h3>
                <p className="text-gray-600 mb-6">
                  I'm a full-stack developer based in San Francisco, specializing in creating
                  exceptional digital experiences. My journey in web development started 3 years ago,
                  and I've been passionate about crafting clean, efficient code ever since.
                </p>
                <p className="text-gray-600 mb-6">
                  I enjoy working with modern technologies like React, Node.js, and Python to build
                  scalable applications that solve real-world problems. When I'm not coding, you can
                  find me exploring new technologies or contributing to open-source projects.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
                    <p className="text-sm text-gray-600">React, Vue.js, TypeScript, Tailwind CSS</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Backend</h4>
                    <p className="text-sm text-gray-600">Node.js, Python, PostgreSQL, MongoDB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="E-commerce Platform"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">E-commerce Platform</h3>
                  <p className="text-gray-600 mb-4">
                    A full-stack e-commerce solution built with React and Node.js, featuring payment
                    integration and admin dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">MongoDB</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <Github size={16} className="mr-1" />
                      Code
                    </button>
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Task Management App"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Task Management App</h3>
                  <p className="text-gray-600 mb-4">
                    A collaborative task management application with real-time updates, drag-and-drop
                    functionality, and team features.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Socket.io</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Redis</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <Github size={16} className="mr-1" />
                      Code
                    </button>
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Weather Dashboard"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Weather Dashboard</h3>
                  <p className="text-gray-600 mb-4">
                    A responsive weather application with location-based forecasts, interactive maps,
                    and detailed weather analytics.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Vue.js</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Chart.js</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">API</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <Github size={16} className="mr-1" />
                      Code
                    </button>
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-12">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat
              about technology. Feel free to reach out!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <Github className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">GitHub</h3>
                <p className="text-gray-600">github.com/johndoe</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">LinkedIn</h3>
                <p className="text-gray-600">linkedin.com/in/johndoe</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send me a message</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  onClick={() => alert('Message functionality would be implemented here!')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;