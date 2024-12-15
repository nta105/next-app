export default function Skills() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Skills</h2>
      <div className="border-l-4 border-blue-500 pl-4">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
            <p className="text-gray-700 dark:text-gray-300">Java, Python, C++, HTML, CSS, JavaScript</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Tools & Technologies</h3>
            <p className="text-gray-700 dark:text-gray-300">Git, Github, Eclipse, Visual Studio Code</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Strong analytical and problem-solving abilities</li>
              <li>• Effective teamwork and communication skills</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
    </section>
  )
} 