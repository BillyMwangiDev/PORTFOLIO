'use client'

const Skills = () => {
  const skills = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'Django', level: 85, category: 'Frameworks' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'TypeScript', level: 75, category: 'Programming' },
    { name: 'PostgreSQL', level: 85, category: 'Databases' },
    { name: 'Linux Administration', level: 90, category: 'Systems' },
    { name: 'Docker', level: 80, category: 'DevOps' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'AWS', level: 70, category: 'Cloud' },
    { name: 'CI/CD', level: 75, category: 'DevOps' }
  ]

  const categories = ['Programming', 'Frameworks', 'Frontend', 'Databases', 'Systems', 'DevOps', 'Tools', 'Cloud']

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life, from server rooms to cloud platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Technical Skills
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-semibold text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Skill Categories
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <div
                  key={category}
                  className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md hover:border-blue-300 transition-all duration-200 hover:bg-blue-50"
                >
                  <span className="text-gray-700 font-medium group-hover:text-blue-600">{category}</span>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-sm border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3">Always Evolving</h4>
              <p className="text-blue-800 text-sm">
                Technology never stops moving, and neither do I. Every new project teaches me something, 
                every problem solved opens doors to new possibilities. The learning never ends, and that&apos;s what I love about this field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
