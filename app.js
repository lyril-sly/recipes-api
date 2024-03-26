import express from 'express'
import router from './reciperouter.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded( {extended: false}))
app.use(cors())
const PORT = process.env.PORT || 9000



// make database connection
await mongoose.connect(process.env.MONGOOSE_URL)
app.use(router)
app.listen(PORT, () => {
    console.log(`your express app is running ${PORT}`)
})