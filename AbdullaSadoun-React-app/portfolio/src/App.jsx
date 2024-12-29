import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ProjectLayout from './components/layout/ProjectLayout'
import ProjectDetail from './components/sections/ProjectDetail'
import { useState, useEffect } from 'react'
import './styles/globals.css'

import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import AllProjects from './pages/AllProjects'

function AppContent() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <>
            <div className="gradient-blur" />
            <div className="min-h-screen text-text">
              <Navbar />
              <main>
                <Hero />
                <Experience />
                <Projects />
                <Education />
                <Services />
                <Contact />
              </main>
              <Footer />
            </div>
          </>
        } />
        <Route path="/all-projects" element={
          <>
            <Navbar />
            <AllProjects />
            <Footer />
          </>
        } />
        <Route 
          path="/project/:slug" 
          element={
            <ProjectLayout>
              <ProjectDetail />
            </ProjectLayout>
          } 
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App 