import { motion } from 'framer-motion'
import { UserStats } from '../types'
import StatsCard from './StatsCard'
import GameTimeChart from './GameTimeChart'
import SpendingChart from './SpendingChart'
import PlatformBreakdown from './PlatformBreakdown'

interface DashboardProps {
  stats: UserStats;
  onRefresh: () => void;
}

export default function Dashboard({ stats, onRefresh }: DashboardProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatsCard
          title="Total Playtime"
          value={`${stats.totalPlaytime.toLocaleString()} hrs`}
          icon="🎮"
        />
        <StatsCard
          title="Total Spent"
          value={`$${stats.totalSpent.toLocaleString()}`}
          icon="💰"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GameTimeChart games={stats.games} />
        <SpendingChart games={stats.games} />
      </div>

      <PlatformBreakdown games={stats.games} platforms={stats.platforms} />
    </div>
  )
}
