import express from 'express'
import dotenv from 'dotenv'
import fs from 'node:fs'

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/users.json')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

