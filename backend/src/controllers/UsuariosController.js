const connection = require('../database/conexao')
const crypto = require('crypto')

module.exports = {
  //Função responsável por listar todos os usuários da tabela usuário
  async index(request, response) {
    //Seleciona todos os usuarios cadastrados na tabela usuario
    const usuarios = await connection('usuarios').select('*')
    //Retorna o todos os usuarios
    return response.json(usuarios)
  },

  //Função responsável por criar usuários na tabela usuário
  async create(request, response) {
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
  }
}
