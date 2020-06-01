const express = require('express')

const UsersController = require('./controllers/UsersController')
const PropostasController = require('./controllers/PropostasController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

// Rota responsável por LISTAR todos os usuarios da tabela de usuários
routes.get('/usuarios', UsersController.index)

// Rota responsável por CRIAR um usuario na tabela de usuários
routes.post('/usuarios', UsersController.create)

// Rota responsável por listar todas as propostas do usuário autenticado
routes.get('/perfil', ProfileController.index)

// Rota responsável por LISTAR todass as propostas da tabela de propostas
routes.get('/propostas', PropostasController.index)

// Rota responsável por CRIAR uma proposta na tabela de propostas
routes.post('/propostas', PropostasController.create)

// Rota responsável por DELETAR uma proposta na tabela de propostas
routes.delete('/propostas/:id', PropostasController.delete)

//
routes.post('/sessions', SessionController.create)

module.exports = routes
