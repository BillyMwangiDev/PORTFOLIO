'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Users, Eye, Clock } from 'lucide-react'

const PortfolioAnalytics = () => {
  // Initialize with default values - will be updated after mount
  const [analytics, setAnalytics] = useState({
    visitors: 1,
    pageViews: 1,
    timeOnSite: 0
  })
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    // Store start time on mount
    startTimeRef.current = Date.now()

    // Track time on site using interval (this is allowed in effect callbacks)
    const timeTracker = setInterval(() => {
      if (startTimeRef.current) {
        const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000)
        setAnalytics(prev => ({
          ...prev,
          timeOnSite: timeSpent
        }))
      }
    }, 1000)

    return () => {
      clearInterval(timeTracker)
    }
  }, [])

  const stats = [
    {
      icon: Users,
      label: 'Visitors',
      value: analytics.visitors,
      color: 'text-blue-600'
    },
    {
      icon: Eye,
      label: 'Page Views',
      value: analytics.pageViews,
      color: 'text-green-600'
    },
    {
      icon: Clock,
      label: 'Time on Site',
      value: `${Math.floor(analytics.timeOnSite / 60)}m ${analytics.timeOnSite % 60}s`,
      color: 'text-orange-600'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Portfolio Analytics
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="text-center"
          >
            <div className={`${stat.color} mb-2 flex justify-center`}>
              <stat.icon size={32} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Local demo metrics for this browser session (no real traffic data is collected).
        </p>
      </div>
    </motion.div>
  )
}

export default PortfolioAnalytics
