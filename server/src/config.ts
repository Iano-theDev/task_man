import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const db = mongoose.connection
const url = process.env.DATABASE_URL

mongoose.connect(url!)

export default db