import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Dashboard from './components/Dashboard'
import ConnectPlatforms from './components/ConnectPlatforms'
import { UserStats } from './types'
import { fetchUserStats } from './services/api'

function App() {
  const [userStats, setUserStats] = useState<UserStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadUserData()
  }, [])

  const loadUserData = async () => {
    try {
      const data = await fetchUserStats()
      setUserStats(data)
    } catch (error) {
      console.error('Failed to load user data:', error)
    } finally {
      setLoading(false)
    }
  }

  const hasConnectedPlatforms = userStats?.platforms.some(p => p.connected)

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <header className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Gaming Analytics Hub</h1>
          <p className="text-white/80">Your gaming universe, unified</p>
        </header>

        {loading ? (
          <div className="glass-card p-12 text-center">
            <div className="animate-pulse text-white text-xl">Loading...</div>
          </div>
        ) : !hasConnectedPlatforms ? (
          <ConnectPlatforms onConnect={loadUserData} />
        ) : (
          <Dashboard stats={userStats!} onRefresh={loadUserData} />
        )}
      </motion.div>
    </div>
  )
}

export default App
