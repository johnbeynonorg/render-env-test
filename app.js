const express = require('express')
const app = express()
const port = process.env.PORT || 3001;

require('dotenv').config()

app.get('/', (req, res) => {
  res.send(`FOO=${process.env.FOO}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})