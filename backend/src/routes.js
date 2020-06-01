const express = require('express')

const UsuariosController = require('./controllers/UsuariosController')
const PropostasController = require('./controllers/PropostasController')
const PerfilController = require('./controllers/PerfilController')

const routes = express.Router()

// Rota responsável por LISTAR todos os usuarios da tabela de usuários
routes.get('/usuarios', UsuariosController.index)

// Rota responsável por CRIAR um usuario na tabela de usuários
routes.post('/usuarios', UsuariosController.create)

//
routes.get('/perfil', PerfilController.index)

// Rota responsável por LISTAR todass as propostas da tabela de propostas
routes.get('/propostas', PropostasController.index)

// Rota responsável por CRIAR uma proposta na tabela de propostas
routes.post('/propostas', PropostasController.create)

// Rota responsável por DELETAR uma proposta na tabela de propostas
routes.delete('/propostas/:id', PropostasController.delete)

module.exports = routes
