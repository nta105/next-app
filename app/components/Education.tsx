export default function Education() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Education</h2>
      <div className="border-l-4 border-blue-500 pl-4">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">California State University, East Bay</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">Bachelor of Science in Computer Science</p>
          <p className="text-gray-500">Expected Fall 2025 • Hayward, CA</p>
          <p className="font-semibold mt-2"> GPA: 3.94/4.0 | Dean&#39;s list for the term: Fall 2023, Spring 2024, Fall 2024
            {/* eslint-disable-line react/no-unescaped-entities */} </p>

          <div className="mt-2">
            <p className="text-blue-600 dark:text-blue-400 font-medium">Achievements</p>
            <p>• Recipient of Computer Science Department Scholarship, 2023-2024</p>
          </div>
          <div className="mt-2">
            <p className="text-blue-600 dark:text-blue-400 font-medium">Relevant Coursework</p>
            <p>Data Structures & Algorithms, Software Engineering, Programming Language Concepts, Discrete Structures, Computer Organization and Assembly Language, Operating Systems, Computer Architecture, Computer Networks</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
    </section>
  )
} 