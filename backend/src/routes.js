const express = require('express')

const routes = express.Router()

routes.use(express.json())

routes.get('/users', (request, response) => {
  return response.send({ Projeto: 'TCC', Aluno: 'Jorge de Almeida Bastos Jr' })
})

module.exports = routes
