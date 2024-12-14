import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-500">Thien An Nguyen</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
            Computer Science Student at CSU East Bay | Software Developer
          </p>
          <div className="flex gap-6 justify-center mb-8">
            <a href="mailto:tnguyen554@horizon.csueastbay.edu" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a href="tel:+16577228927" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
              <FaPhone className="w-6 h-6" />
            </a>
            <a href="https://github.com/yourusername" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              View Projects
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
      <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ferry Simulation Project */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Ferry Simulation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A concurrent system simulation using Python and semaphores for modeling ferry transportation logistics.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                  Semaphores
                </span>
              </div>
            </div>

            {/* Clicker Game Project */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Android Clicker Game</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A mobile game developed with Java and Android Studio, featuring Firebase integration.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                  Java
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                  Android
                </span>
              </div>
            </div>

            {/* Task Management Project */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Task Manager</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A GUI-based task management application built with Python and Tkinter.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                  Tkinter
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">Technician</h3>
                <p className="text-blue-500">Intuitive</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">July 2022 – July 2023</p>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Assembled components per Manufacturing Procedure Instructions</li>
              <li>Conducted functional tests using software</li>
              <li>Collaborated with software engineers to optimize processes</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
