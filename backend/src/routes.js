const express = require('express')

const UsuariosController = require('./controllers/UsuariosController')
const PropostasController = require('./controllers/PropostasController')

const routes = express.Router()

// Rota responsável por listar todos os usuarios da tabela de usuários
routes.get('/usuarios', UsuariosController.index)

// Rota responsável por criar um usuario na tabela de usuários
routes.post('/usuarios', UsuariosController.create)

// Rota responsável por listar todass as propostas da tabela de propostas
routes.get('/propostas', PropostasController.index)

// Rota responsável por criar uma proposta na tabela de propostas
routes.post('/propostas', PropostasController.create)

module.exports = routes
