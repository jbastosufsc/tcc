const express = require('express')
const crypto = require('crypto')
const connection = require('./database/conexao')

const routes = express.Router()

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
  return response.json({ id })
})

module.exports = routes
