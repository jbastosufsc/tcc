const conexaoComBD = require('../database/conexao')

module.exports = {
  async index(request, response) {
    //Acessar os dados do usuário autenticado
    const user_id = request.headers.authorization

    //Buscar todas as propostas do usuário autenticado
    const propostas = await conexaoComBD('propostas').where('user_id', user_id).select('*')

    return response.json(propostas)
  }
}
