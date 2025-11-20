import { Router } from 'express'
import { aggregateUserStats } from '../services/aggregator.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const stats = await aggregateUserStats()
    res.json(stats)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' })
  }
})

export default router
