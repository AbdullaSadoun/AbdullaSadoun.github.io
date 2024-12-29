import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '../shared/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project or idea? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-400">
                <span className="mr-2">📍</span>
                Halifax, NS
              </p>
              <p className="flex items-center text-gray-400">
                <span className="mr-2">📧</span>
                abdulla@asadoun.com
              </p>
              <p className="flex items-center text-gray-400">
                <span className="mr-2">📱</span>
                +1 (902) 266-9696
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact 