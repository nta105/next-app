'use client'

import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            Thien An Nguyen
          </a>
          <div className="hidden sm:flex items-center space-x-8">
            <a href="#objective" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#education" className="hover:text-blue-500 transition-colors">Education</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#activities" className="hover:text-blue-500 transition-colors">Activities</a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
          <div className="sm:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:text-blue-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#objective" className="block px-3 py-2 hover:text-blue-500 transition-colors">About</a>
            <a href="#education" className="block px-3 py-2 hover:text-blue-500 transition-colors">Education</a>
            <a href="#skills" className="block px-3 py-2 hover:text-blue-500 transition-colors">Skills</a>
            <a href="#experience" className="block px-3 py-2 hover:text-blue-500 transition-colors">Experience</a>
            <a href="#projects" className="block px-3 py-2 hover:text-blue-500 transition-colors">Projects</a>
            <a href="#activities" className="block px-3 py-2 hover:text-blue-500 transition-colors">Activities</a>
          </div>
        </div>
      )}
    </nav>
  )
} 