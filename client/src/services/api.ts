import axios from 'axios'
import { UserStats, PlatformCredentials } from '../types'

const api = axios.create({
  baseURL: '/api'
})

export const fetchUserStats = async (): Promise<UserStats> => {
  const { data } = await api.get('/stats')
  return data
}

export const connectPlatform = async (credentials: PlatformCredentials): Promise<void> => {
  await api.post('/platforms/connect', credentials)
}

export const disconnectPlatform = async (platform: string): Promise<void> => {
  await api.delete(`/platforms/${platform}`)
}
