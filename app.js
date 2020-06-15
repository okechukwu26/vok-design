const express = require('express')
const path = require('path')
const app = express()
const fileDirectory = path.join(__dirname, 'public')

app.use(express.static(fileDirectory))





module.exports = app






