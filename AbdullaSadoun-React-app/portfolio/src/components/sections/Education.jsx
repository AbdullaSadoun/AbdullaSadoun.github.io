import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const education = [
  {
    institution: "Dalhousie University",
    degree: "Bachelor's of Engineering, Computer and Electrical Engineering",
    period: "2021 - 2025",
    logo: "/logos/dal-logo.jpg", // Add your logo
    description: "Specialized in Artificial Intelligence and Machine Learning",
    certificates: [
      {
        name: "Advanced Machine Learning",
        pdf: "/certificates/ml-cert.pdf" // Add your PDF
      }
    ]
  },
  // Add more education entries...
]

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="education" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certificates</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and professional certifications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-secondary/20 rounded-lg p-6 hover:bg-secondary/30 transition-colors"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent">{edu.institution}</h3>
                  <p className="text-lg text-gray-300">{edu.degree}</p>
                  <p className="text-sm text-gray-400">{edu.period}</p>
                </div>
              </div>
              <p className="mt-4">{edu.description}</p>
              {edu.certificates.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Certificates</h4>
                  <div className="space-y-2">
                    {edu.certificates.map((cert, certIndex) => (
                      <a
                        key={certIndex}
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
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
                        {cert.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 