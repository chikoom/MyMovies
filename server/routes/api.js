const express = require('express')
const URLlib = require('urllib')

const router = express.Router()

router.get('/', (request, response) => {
  response.send('Hello')
})

module.exports = router