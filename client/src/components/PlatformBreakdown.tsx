import { motion } from 'framer-motion'
import { Game, PlatformAccount, Platform } from '../types'

interface PlatformBreakdownProps {
  games: Game[];
  platforms: PlatformAccount[];
}

export default function PlatformBreakdown({ games, platforms }: PlatformBreakdownProps) {
  const platformStats = platforms.map(platform => {
    const platformGames = games.filter(g => g.platform === platform.platform)
    const totalTime = platformGames.reduce((sum, g) => sum + g.playtime, 0)
    const totalSpent = platformGames.reduce((sum, g) => sum + g.spent, 0)
    
    return {
      platform: platform.platform,
      gameCount: platformGames.length,
      totalTime,
      totalSpent,
      connected: platform.connected
    }
  }).filter(p => p.connected)

  return (
    <div className="glass-card p-6">
      <h3 className="text-white text-xl font-semibold mb-4">Platform Breakdown</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {platformStats.map((stat, index) => (
          <motion.div
            key={stat.platform}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-xl p-4 border border-white/10"
          >
            <h4 className="text-white font-semibold mb-2">{stat.platform}</h4>
            <div className="space-y-1 text-sm text-white/70">
              <p>{stat.gameCount} games</p>
              <p>{stat.totalTime.toLocaleString()} hours</p>
              <p>${stat.totalSpent.toLocaleString()} spent</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
