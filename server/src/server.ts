import express from 'express'
import dotenv from 'dotenv'
import db from './config'
import usersRouter from './router/users.routes'
import { env } from 'process'


const app = express()
const cors = require('cors')
app.use(cors())


const port = process.env.PORT
app.use(express.json()) // allow use of json in the request body

db.on('error', (err)=>{console.log("connection failed: ", err)})
db.once('open', ()=> console.log("Database connected successfully!"))

app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

