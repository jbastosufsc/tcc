const express = require('express')
const routes = require('./routes.js')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

// Permite que qualquer aplicacao acesse o backend (API)
app.use(cors())

// Permite que apenas a aplicação frontend acesse o backend (API)
/*
app.use(cors({
 origin: 'http://linkDaAppFrontEnd.com.br 
}))
*/

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })) // support encoded bodies
app.use('/', routes)

app.listen(3333)
