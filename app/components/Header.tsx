export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-12 rounded-t-lg">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Thien An Nguyen</h1>
        <p className="text-xl text-blue-100">Computer Science Student</p>
        <p className="mt-2 text-blue-100">Expected Graduation: December 2025</p>
        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-blue-100">
          <span>San Jose, CA</span>
          <span>•</span>
          <span>+657 722-8927</span>
          <span>•</span>
          <a href="mailto:tnguyen554@horizon.csueastbay.edu" className="hover:text-white transition-colors">
            tnguyen554@horizon.csueastbay.edu
          </a>
        </div>
      </div>
    </header>
  )
} 