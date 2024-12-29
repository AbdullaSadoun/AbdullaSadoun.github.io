import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { projects } from '../../data/projects'
import ImageGallery from '../shared/ImageGallery'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const [activeHeading, setActiveHeading] = useState('')

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-400">Project not found</h1>
      </div>
    )
  }

  // Generate table of contents from content
  const tableOfContents = [
    { id: 'overview', title: 'Overview' },
    { id: 'challenge', title: 'The Challenge' },
    { id: 'solution', title: 'Solution' },
    { id: 'features', title: 'Key Features' },
    { id: 'tech-stack', title: 'Tech Stack' },
    { id: 'results', title: 'Results' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    const offset = 100 // Adjust this value based on your navbar height + desired padding
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {project.title}
        </motion.h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          {project.description}
        </p>
      </div>

      {/* Main content with sidebar */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar - Table of Contents */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <nav className="space-y-1">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`
                    block px-3 py-2 text-sm rounded-lg transition-colors
                    ${activeHeading === item.id
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:flex-1 prose prose-invert max-w-none">
          <section id="overview" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p>{project.overview}</p>
            <div className="my-8">
              <ImageGallery images={project.images} />
            </div>
          </section>

          <section id="challenge" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p>{project.challenge}</p>
          </section>

          <section id="solution" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Solution</h2>
            <p>{project.solution}</p>
          </section>

          <section id="features" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section id="tech-stack" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section id="results" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Results</h2>
            <p>{project.results}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail 