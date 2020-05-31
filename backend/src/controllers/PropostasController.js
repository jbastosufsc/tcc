const conexaoComBD = require('../database/conexao')

module.exports = {
  async index(request, response) {
    const propostas = await conexaoComBD('propostas').select('*')

    return response.json(propostas)
  },

  async create(request, response) {
    const { titulo, descricao } = request.body
    const user_id = request.headers.authorization

    const [ id ] = await conexaoComBD('propostas').insert({
      titulo,
      descricao,
      user_id
    })

    return response.json({ id })
  }
}
