import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { Game } from '../types'

interface GameTimeChartProps {
  games: Game[];
}

const COLORS = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444']

export default function GameTimeChart({ games }: GameTimeChartProps) {
  const data = games
    .sort((a, b) => b.playtime - a.playtime)
    .slice(0, 6)
    .map(game => ({
      name: game.name,
      value: game.playtime
    }))

  return (
    <div className="glass-card p-6">
      <h3 className="text-white text-xl font-semibold mb-4">Playtime by Game</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
