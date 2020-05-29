const express = require('express')
const crypto = require('crypto')
const connection = require('./database/conexao')

const routes = express.Router()

//Rota responsável por listar todos os usuarios da tabela usuários
routes.get('/usuarios', async (request, response) => {
  //Seleciona todos os usuarios cadastrados na tabela usuario
  const usuarios = await connection('usuarios').select('*')

  return response.json(usuarios)
})

//Rota responsável por cadastrar um usuario na tabela usuário
routes.post('/usuarios', async (request, response) => {
  //Desestruturação para pegar os dados em variaveis separadas
  const { nome, classificacao, email, whatsapp } = request.body
  //Gera 4 bytes de caracteres HEX (números e letras) que serão usados como ID
  const id = crypto.randomBytes(4).toString('HEX')
  //Insere os dados armazenados nas variaveis nas colunas da tabela usuarios
  await connection('usuarios').insert({
    id,
    nome,
    classificacao,
    email,
    whatsapp
  })

  //Retorna o id que foi gerado aleatoriamente. Esse id pertence ao usuário cadastrado
  return response.json({ id })
})

module.exports = routes
