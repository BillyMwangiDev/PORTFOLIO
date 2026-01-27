'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Eye, MousePointer, Clock } from 'lucide-react'

const PortfolioAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    visitors: 0,
    pageViews: 0,
    interactions: 0,
    timeOnSite: 0
  })

  useEffect(() => {
    // Local, browser-only analytics demo for this session
    setAnalytics(prev => ({
      ...prev,
      visitors: 1,
      pageViews: prev.pageViews + 1,
    }))

    // Track time on site
    const startTime = Date.now()
    const timeTracker = setInterval(() => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      setAnalytics(prev => ({
        ...prev,
        timeOnSite: timeSpent
      }))
    }, 1000)

    return () => {
      clearInterval(timeTracker)
    }
  }, []) // Empty dependency array ensures this runs only once

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
      icon: MousePointer,
      label: 'Interactions',
      value: analytics.interactions,
      color: 'text-purple-600'
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
