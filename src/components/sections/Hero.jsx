import { motion } from 'framer-motion'
import Button from '../shared/Button'
import ParticleBrain from '../3d/ParticleBrain'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Gradient container with particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Particle container */}
        <div className="absolute inset-x-0 top-0 h-screen">
          <ParticleBrain />
        </div>
        
        {/* Gradient fade-out overlay - adjusted for smoother transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-primary" 
             style={{ top: '30vh' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          {/* Turning Vision Into Reality */}
          Bringing Your Ideas To Life
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Abdulla Sadoun, B.Eng
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            href="#contact" 
            variant="hero"
            size="large"
            className="font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Let's Work Together
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 