import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Game } from '../types'

interface SpendingChartProps {
  games: Game[];
}

export default function SpendingChart({ games }: SpendingChartProps) {
  const data = games
    .sort((a, b) => b.spent - a.spent)
    .slice(0, 8)
    .map(game => ({
      name: game.name.length > 15 ? game.name.substring(0, 15) + '...' : game.name,
      spent: game.spent
    }))

  return (
    <div className="glass-card p-6">
      <h3 className="text-white text-xl font-semibold mb-4">Spending by Game</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="#fff" angle={-45} textAnchor="end" height={100} />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Bar dataKey="spent" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
