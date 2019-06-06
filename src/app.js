const express = require('express')
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  const GATEWAY_URL = process.env.GATEWAY_URL || 'localhost:3000'
  response = {
    today: new Date().toDateString(),
    devEnv: process.env.NODE_ENV,
    region: process.env.REGION,
    stage: process.env.STAGE,
    detailUrl: `${GATEWAY_URL}/some-id`
  }
  res.status(200).send(response)
})

app.get('/some-id', async (req, res) => {
  res.status(200).send('Detail View')
})

module.exports = app

