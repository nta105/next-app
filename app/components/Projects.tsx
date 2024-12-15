export default function Projects() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Projects</h2>
      <div className="border-l-4 border-blue-500 pl-4 space-y-8">
        <div>
          <h3 className="text-xl font-semibold">MY RESUME WEBSITE</h3>
          <p className="text-gray-500">Next.js, Tailwind CSS • 2024</p>
          <div className="mt-2 space-y-2">
            <p>• Developed a professional online resume using Next.js, Tailwind CSS, and responsive design.</p>
            <p>• Deployed via Vercel for seamless accessibility (<a href="https://my-resume-two-alpha.vercel.app/" className="text-blue-500 hover:underline">https://my-resume-two-alpha.vercel.app/</a>).</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">BIO ABOUT MY SIDE JOB</h3>
          <p className="text-gray-500">HTML, CSS, JavaScript • 2024</p>
          <div className="mt-2 space-y-2">
            <p>• Created a personal webpage showcasing my guitar teaching and performance work.</p>
            <p>• Built with HTML, CSS, and JavaScript, deployed using GitHub Pages (<a href="https://nta105.github.io/" className="text-blue-500 hover:underline">https://nta105.github.io/</a>).</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">FERRY SIMULATION</h3>
          <p className="text-gray-500">Python, Semaphores • Fall 2024</p>
          <div className="mt-2 space-y-2">
            <p>• Designed and implemented a concurrent system to simulate ferry movements, enhancing the efficiency, reliability, and performance of car transportation between islands and mainland.</p>
            <p>• Utilized threads and semaphores to accurately model real-world ferry transportation scenarios, incorporating precise timing, optimized scheduling, and complex logistics.</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">CLICKER GAME</h3>
          <p className="text-gray-500">Java, Android Studio • Spring 2024</p>
          <div className="mt-2 space-y-2">
            <p>• Collaborated on a team project to create a fully functional clicker game for Android, designed for both physical devices and emulators.</p>
            <p>• Integrated Firebase for secure user authentication and database management, including a custom login page.</p>
            <p>• Designed an engaging UI with customized icons for gameplay elements, focusing on smooth, interactive gameplay.</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">TASK MANAGEMENT APPLICATION</h3>
          <p className="text-gray-500">Python, Tkinter • Fall 2023</p>
          <div className="mt-2 space-y-2">
            <p>• Designed and implemented a task management tool with a user-friendly GUI using Python and Tkinter.</p>
            <p>• Developed core functionality to add, remove, search, modify, and display tasks in a tabular format.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
    </section>
  )
} 