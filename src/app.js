const express = require('express')
const app = express()

app.get('/', async (req, res, next) => {
  const env = process.env.NODE_ENV
  res.status(200).send(`Hello World! We're in ${env}!`)
})

module.exports = app

