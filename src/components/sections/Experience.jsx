import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: "AI Engineer/DevOps (Capstone)",
    company: "Lockheed Martin",
    period: "2024 - Present",
    description: "Developed, integrated and Deployed an AI model and application based on client requirements.",
    skills: ["ML", "NLP", "LLM", "Model Training", "Microservice Arch.", "CI/CD", "Cloud Orchestration"]
  },
  {
    title: "Project Coordinator",
    company: "ELFATIH",
    period: "2024 - Present",
    description: "Managed Operating Costs, Client Relations, External Communication and Various Property Managment Projects. Currently Develpoing Software solutions to fascilitate growth.",
    skills: ["Cost Analysis", "Project Planning", "App Development", "Solution Architect"]
  },
  {
    title: "Electrical Engineer Intern",
    company: "Al Dar",
    period: "2022",
    description: "Participated in the construction of CAE's Boeing 777 simulator (CAE 7000XR) housings at HIA for Qatar Airways with AL Dar Consulting.",
    skills: ["Project Delivery", "Construction Safety", "Report Writing", "Site Inspection"]
  }
]

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A timeline of my journey and the skills I've acquired along the way.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-secondary"
              >
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0" />
                <div className="bg-secondary/20 rounded-lg p-6 hover:bg-secondary/30 transition-colors">
                  <h3 className="text-xl font-bold text-accent">{exp.title}</h3>
                  <p className="text-lg text-gray-300 mt-1">{exp.company}</p>
                  <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
                  <p className="mt-4">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="assets/Abdulla_Sadoun.pdf" // Replace with actual path to your PDF
          download="Abdulla_Sadoun.pdf"   // Replace with desired download filename
          className="px-6 py-3 bg-[#e6e6e6] text-[#051d40] rounded-lg
                     hover:bg-opacity-90 transition-all duration-300
                     font-semibold shadow-lg hover:shadow-xl
                     flex items-center gap-2"
        >
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
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          Download Resume
        </a>
      </motion.div>
    </section>
  )
}

export default Experience 