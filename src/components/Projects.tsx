'use client'

import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'TASKS - Desktop Task Manager',
      description: 'A PyQt6 desktop application for productivity with task creation, stopwatch tracking, notifications, and SQLite storage. Features an intuitive GUI for managing daily tasks and time tracking.',
      image: '/api/placeholder/400/250',
      tech: ['Python', 'PyQt6', 'SQLite'],
      highlights: [
        'Task creation and management with priority levels',
        'Built-in stopwatch and time tracking',
        'Desktop notifications and reminders',
        'SQLite database for persistent storage',
        'Cross-platform compatibility'
      ],
      github: 'https://github.com/BillyMwangiDev/TASKS',
      demo: null,
      category: 'Desktop Application'
    },
    {
      title: 'SALES-SYSTEM - Business Management',
      description: 'Comprehensive Django web application for managing sales, inventory, VAT calculations, and analytics. Includes reporting, user authentication, and offline deployment capabilities.',
      image: '/api/placeholder/400/250',
      tech: ['Python', 'Django', 'SQLite', 'Bootstrap'],
      highlights: [
        'Sales tracking and inventory management',
        'VAT calculations and financial reporting',
        'User authentication and role management',
        'Offline deployment and data synchronization',
        'Responsive web interface'
      ],
      github: 'https://github.com/BillyMwangiDev/SALES-SYSTEM',
      demo: null,
      category: 'Web Application'
    },
    {
      title: 'ORGANIZE - File Automation Tool',
      description: 'Cross-platform file organizer with drag-and-drop support, duplicate handling, and environment-based configuration. Automates file organization based on custom rules and patterns.',
      image: '/api/placeholder/400/250',
      tech: ['Python', 'CLI', 'GUI', 'File System'],
      highlights: [
        'Drag-and-drop file organization',
        'Duplicate file detection and handling',
        'Environment-based configuration (.env)',
        'Cross-platform compatibility',
        'Custom organization rules'
      ],
      github: 'https://github.com/BillyMwangiDev/ORGANIZE',
      demo: null,
      category: 'Automation Tool'
    },
    {
      title: 'E-commerce Agrovet Website',
      description: 'Full-featured e-commerce platform for agricultural and veterinary products. Built with modern web technologies for scalability and user experience.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'Django', 'PostgreSQL', 'Stripe'],
      highlights: [
        'Product catalog and search functionality',
        'Shopping cart and checkout system',
        'Payment integration with Stripe',
        'Admin dashboard for inventory',
        'Responsive mobile-first design'
      ],
      github: 'https://github.com/BillyMwangiDev',
      demo: null,
      category: 'E-commerce'
    },
    {
      title: 'IoT Cattle Management System',
      description: 'Internet of Things solution for monitoring and managing cattle health, location, and feeding schedules using sensors and mobile applications.',
      image: '/api/placeholder/400/250',
      tech: ['Python', 'IoT Sensors', 'Mobile App', 'Cloud Database'],
      highlights: [
        'Real-time cattle health monitoring',
        'GPS tracking and geofencing',
        'Automated feeding schedules',
        'Mobile app for farmers',
        'Cloud-based data storage'
      ],
      github: 'https://github.com/BillyMwangiDev',
      demo: null,
      category: 'IoT Solution'
    },
    {
      title: 'Tech Tribe Education App',
      description: 'Educational platform for tech learning with interactive courses, progress tracking, and community features for developers and IT professionals.',
      image: '/api/placeholder/400/250',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      highlights: [
        'Interactive course content',
        'Progress tracking and certifications',
        'Community forums and discussions',
        'Mobile-first responsive design',
        'Real-time notifications'
      ],
      github: 'https://github.com/BillyMwangiDev',
      demo: null,
      category: 'Educational Platform'
    }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Desktop Application':
        return <Code className="w-5 h-5" />
      case 'Web Application':
        return <Globe className="w-5 h-5" />
      case 'Automation Tool':
        return <Code className="w-5 h-5" />
      case 'E-commerce':
        return <Globe className="w-5 h-5" />
      case 'IoT Solution':
        return <Database className="w-5 h-5" />
      case 'Educational Platform':
        return <Globe className="w-5 h-5" />
      default:
        return <Code className="w-5 h-5" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A showcase of my technical expertise and problem-solving approach across various domains
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg text-blue-600"
                  >
                    {getCategoryIcon(project.category)}
                  </motion.div>
                  <span className="text-xs font-medium text-gray-500 bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 rounded-full border border-gray-300">
                    {project.category}
                  </span>
                </div>
                
                <motion.h3
                  whileHover={{ color: '#3B82F6' }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-bold text-gray-900 mb-3 cursor-pointer"
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs font-medium rounded-full border border-blue-200 hover:from-blue-200 hover:to-indigo-200 transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Project Highlights */}
              <div className="px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                    <motion.li
                      key={highlightIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.1 + highlightIndex * 0.05 }}
                      className="flex items-start space-x-2 text-sm text-gray-600"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2 flex-shrink-0"
                      />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Project Actions */}
              <div className="px-6 py-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View Code</span>
                  </motion.a>
                  
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
