import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
      return
    }

    // If we're already on home page, just scroll to the section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-3xl font-bold text-white hover:text-accent transition-colors"
            >
              🗿AS
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar 