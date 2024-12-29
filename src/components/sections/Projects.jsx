import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Filter only featured projects for the home page
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my most impactful work and personal projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Link
              to={`/project/${project.slug}`}
              key={index}
              className="block h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary/20 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 h-full flex flex-col"
              >
                <div className="relative aspect-video">
                  <img
                    src={project.images[0]?.url || '/placeholder-image.jpg'}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/10 text-white rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#e6e6e6] transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/all-projects"
            className="px-6 py-3 bg-[#e6e6e6] text-[#051d40] rounded-lg
                     hover:bg-opacity-90 transition-all duration-300
                     font-semibold shadow-lg hover:shadow-xl
                     flex items-center gap-2"
          >
            <span>View More</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 