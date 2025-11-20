import { Router } from 'express'
import { connectUserPlatform, disconnectUserPlatform } from '../services/platformManager.js'

const router = Router()

router.post('/connect', async (req, res) => {
  try {
    const { platform, userId, apiKey } = req.body
    await connectUserPlatform(platform, userId, apiKey)
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Failed to connect platform' })
  }
})

router.delete('/:platform', async (req, res) => {
  try {
    await disconnectUserPlatform(req.params.platform)
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Failed to disconnect platform' })
  }
})

export default router
