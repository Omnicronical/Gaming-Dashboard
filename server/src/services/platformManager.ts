// Platform connection management
const connectedPlatforms = new Map()

export async function connectUserPlatform(platform: string, userId: string, apiKey?: string) {
  connectedPlatforms.set(platform, { userId, apiKey, connected: true })
  return { success: true }
}

export async function disconnectUserPlatform(platform: string) {
  connectedPlatforms.delete(platform)
  return { success: true }
}
