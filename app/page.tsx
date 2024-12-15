import Header from '@/app/components/Header'
import Objective from '@/app/components/Objective'
import Education from '@/app/components/Education'
import Skills from '@/app/components/Skills'
import Experience from '@/app/components/Experience'
import Projects from '@/app/components/Projects'
import Activities from '@/app/components/Activities'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="relative pt-16">
        <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-800/95 shadow-xl rounded-lg overflow-hidden backdrop-blur-sm">
          <Header />
          <main className="p-8 space-y-12">
            <div id="objective" className="scroll-mt-20"><Objective /></div>
            <div id="education" className="scroll-mt-20"><Education /></div>
            <div id="skills" className="scroll-mt-20"><Skills /></div>
            <div id="experience" className="scroll-mt-20"><Experience /></div>
            <div id="projects" className="scroll-mt-20"><Projects /></div>
            <div id="activities" className="scroll-mt-20"><Activities /></div>
          </main>
        </div>
      </div>
    </div>
  )
}

