const conexaoComBD = require('../database/conexao')

module.exports = {
  //Função responsável por listar todas as propostas da tabela de propostas
  async index(request, response) {
    const propostas = await conexaoComBD('propostas').select('*')

    return response.json(propostas)
  },

  //Função responsável por criar uma proposta na tabela de propostas
  async create(request, response) {
    const { titulo, descricao } = request.body
    const user_id = request.headers.authorization

    const [ id ] = await conexaoComBD('propostas').insert({
      titulo,
      descricao,
      user_id
    })

    return response.json({ id })
  },

  async delete(request, response) {
    const { id } = request.params
    const user_id = request.headers.authorization

    const proposta = await conexaoComBD('propostas').where('id', id).select('user_id').first()

    if (proposta.user_id !== user_id) {
      return response.status(401).json({ error: 'Operação não autorizada' })
    }

    await conexaoComBD('propostas').where('id', id).delete()

    return response.status(204).send()
  }
}
