const express = require('express')

const APP_ID = process.env.APP_ID || '0'
const APP_PORT = process.env.APP_PORT || '80'

const app = express()

app.get('/', (req, res) => {
  res.send(`This is app ${APP_ID}`)
})

app.listen(APP_PORT, () => console.log(`App ${APP_ID} listening on port ${APP_PORT}`))