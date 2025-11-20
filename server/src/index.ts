import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import statsRouter from './controllers/stats.js'
import platformsRouter from './controllers/platforms.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/stats', statsRouter)
app.use('/api/platforms', platformsRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
