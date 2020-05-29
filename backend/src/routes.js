const express = require('express')

const UsuariosController = require('./controllers/UsuariosController')

const routes = express.Router()

// Rota responsável por listar todos os usuarios da tabela usuários
routes.get('/usuarios', UsuariosController.index)

// Rota responsável por criar um usuario na tabela usuários
routes.post('/usuarios', UsuariosController.create)

module.exports = routes
