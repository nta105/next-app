import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-500">Your Name</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 font-light">
            Full Stack Developer passionate about building web applications
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full hover:border-blue-500 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
                {/* Add project image here */}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Project Name</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Brief description of the project and the technologies used.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                    Live Demo →
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-600 transition-colors">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I'm currently open for opportunities. Feel free to reach out!
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition-colors"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="text-2xl hover:text-blue-500 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
