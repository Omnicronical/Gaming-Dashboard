import { motion } from 'framer-motion'

interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
}

export default function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/70 text-sm mb-1">{title}</p>
          <p className="text-white text-3xl font-bold">{value}</p>
        </div>
        <div className="text-5xl">{icon}</div>
      </div>
    </motion.div>
  )
}
