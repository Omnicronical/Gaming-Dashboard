import { useState } from 'react'
import { motion } from 'framer-motion'
import { Platform, PlatformCredentials } from '../types'
import { connectPlatform } from '../services/api'

interface ConnectPlatformsProps {
  onConnect: () => void;
}

const PLATFORMS: Platform[] = ['Steam', 'EA Play', 'Riot Games', 'Xbox', 'PlayStation', 'Epic Games', 'Battle.net']

export default function ConnectPlatforms({ onConnect }: ConnectPlatformsProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  const [credentials, setCredentials] = useState<PlatformCredentials>({
    platform: 'Steam',
    userId: '',
    apiKey: ''
  })

  const handleConnect = async () => {
    try {
      await connectPlatform(credentials)
      onConnect()
    } catch (error) {
      console.error('Failed to connect platform:', error)
    }
  }

  return (
    <div className="glass-card p-8">
      <h2 className="text-white text-2xl font-bold mb-6">Connect Your Gaming Platforms</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {PLATFORMS.map((platform) => (
          <motion.button
            key={platform}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedPlatform(platform)
              setCredentials({ ...credentials, platform })
            }}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedPlatform === platform
                ? 'border-white bg-white/20'
                : 'border-white/20 bg-white/5'
            }`}
          >
            <p className="text-white font-semibold">{platform}</p>
          </motion.button>
        ))}
      </div>

      {selectedPlatform && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="User ID / Username"
            value={credentials.userId}
            onChange={(e) => setCredentials({ ...credentials, userId: e.target.value })}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
          />
          <input
            type="password"
            placeholder="API Key (if required)"
            value={credentials.apiKey}
            onChange={(e) => setCredentials({ ...credentials, apiKey: e.target.value })}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleConnect}
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white font-semibold"
          >
            Connect {selectedPlatform}
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
