import { fetchSteamData } from './platforms/steam.js'
import { fetchRiotData } from './platforms/riot.js'
import { fetchXboxData } from './platforms/xbox.js'

export async function aggregateUserStats() {
  // Mock data for now - replace with actual API calls
  const mockStats = {
    totalPlaytime: 1247,
    totalSpent: 2850,
    games: [
      { id: '1', name: 'Elden Ring', platform: 'Steam' as const, playtime: 156, spent: 60, imageUrl: '' },
      { id: '2', name: 'League of Legends', platform: 'Riot Games' as const, playtime: 423, spent: 450, imageUrl: '' },
      { id: '3', name: 'Halo Infinite', platform: 'Xbox' as const, playtime: 89, spent: 0, imageUrl: '' },
      { id: '4', name: 'Cyberpunk 2077', platform: 'Steam' as const, playtime: 134, spent: 60, imageUrl: '' },
      { id: '5', name: 'Valorant', platform: 'Riot Games' as const, playtime: 267, spent: 120, imageUrl: '' },
      { id: '6', name: 'God of War', platform: 'PlayStation' as const, playtime: 78, spent: 70, imageUrl: '' },
    ],
    platforms: [
      { platform: 'Steam' as const, userId: 'user123', connected: true },
      { platform: 'Riot Games' as const, userId: 'user456', connected: true },
      { platform: 'Xbox' as const, userId: 'user789', connected: false },
      { platform: 'PlayStation' as const, userId: '', connected: false },
    ]
  }

  return mockStats
}
