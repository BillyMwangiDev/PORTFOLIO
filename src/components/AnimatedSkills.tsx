'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Skill {
  name: string
  level: number
  color: string
}

const skills: Skill[] = [
  { name: 'System Administration', level: 95, color: '#3B82F6' },
  { name: 'Python Development', level: 90, color: '#10B981' },
  { name: 'Django Framework', level: 85, color: '#059669' },
  { name: 'React & TypeScript', level: 80, color: '#8B5CF6' },
  { name: 'Database Management', level: 88, color: '#F59E0B' },
  { name: 'DevOps & CI/CD', level: 82, color: '#EF4444' },
  { name: 'Network Security', level: 87, color: '#06B6D4' },
  { name: 'Linux Administration', level: 92, color: '#84CC16' },
]

const AnimatedSkills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise in system administration, software development, and IT infrastructure management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  className="h-3 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Additional Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Python', 'Django', 'PostgreSQL', 'MySQL',
              'JavaScript', 'React.js', 'Next.js', 'Git',
              'Docker', 'Kubernetes', 'AWS', 'Azure',
              'Active Directory', 'Linux Administration', 'Windows Server', 'Networking',
              'CI/CD Pipelines', 'Oracle VirtualBox', 'Veeam', 'VS Code'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <span className="text-gray-700 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AnimatedSkills
