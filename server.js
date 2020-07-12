const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const PORT = 3333
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.listen(PORT, function(){
  console.log(`SERVER LISTEN (PORT ${PORT})`)
})