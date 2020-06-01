const conexaoComBD = require('../database/conexao')

module.exports = {
  //Função responsável por criar uma sessão de acesso para um usuário
  async create(request, response) {
    //Armazena o valor do id do usuario encontrado no corpo da requisição
    const { id } = request.body

    //Armazena o usuario que corresponder ao valor da variavel id
    const usuario = await conexaoComBD('usuarios').where('id', id).select('nome').first()

    //Verifica se a variavel usuario está armazenando algum usuario
    if (!usuario) {
      return response.status(400).json({ error: 'Nenhum usuario encontrado com este ID' })
    }

    //Retorna o nome usuario
    return response.json(usuario)
  }
}
