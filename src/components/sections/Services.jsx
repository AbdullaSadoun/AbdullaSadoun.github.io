import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaServer, FaMobile, FaDesktop, FaBrain } from 'react-icons/fa'

const services = [
  {
    icon: <FaCode className="w-8 h-8" />,
    icon: <FaBrain className="w-8 h-8" />,
    title: "AI/ML Engineering & MLOps",
    description: "Streamline your AI operations with scalable ML model deployment and integration. Proven to reduce analysis time by 80% through efficient cloud-native architecture.",
    technologies: ["AI", "Machine Learning", "Cloud", "Angular"]
  },
  {
    icon: <FaServer className="w-8 h-8" />,
    title: "System Architecture & Cloud Solutions",
    description: "Design and implement scalable, cloud-native systems with microservices architecture. Focused on performance, reliability, and future-proof solutions.",
    technologies: ["Web", "Python", "Cloud", "PostgreSQL"]
  },
  {
    icon: <FaMobile className="w-8 h-8" />,
    title: "Embedded Systems & Robotics Engineering",
    description: "Award-winning experience in autonomous systems and real-time control. Transforming hardware innovations from concept to deployment with proven efficiency.",
    technologies: ["Real Time Systems", "ROS2", "RTOS", "C/C++"]
  },
  {
    icon: <FaDesktop className="w-8 h-8" />,
    title: "Data Engineering & Analytics Solutions",
    description: "Convert complex datasets into actionable insights. Expert in building efficient data pipelines and predictive models that drive informed decision-making.",
    technologies: ["Data Analytics", "Data Analysis", "Data Driven Decisions", ""]
  }
]

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="services" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-secondary/20 rounded-lg p-6 hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="text-accent mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-accent/10 text-accent rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 