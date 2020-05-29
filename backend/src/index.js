const express = require('express')
const routes = require('./routes.js')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })) // support encoded bodies
app.use('/', routes)

app.listen(3333)
