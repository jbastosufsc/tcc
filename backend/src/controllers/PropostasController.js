const conexaoComBD = require('../database/conexao')

module.exports = {
  //Função responsável por listar todas as propostas da tabela de propostas
  async index(request, response) {
    //Buscar dentro de request.query o valor de page, caso nao exista, valor de page é definido como 1.
    const { page = 1 } = request.query

    //Query para retornar a quantidadede propostas cadastradas na tabela de propostas
    const [ qntdPropostas ] = await conexaoComBD('propostas').count()

    //Armazena o valor da quantidade de propostas cadastradas no cabeçalho da resposta
    response.header('X-Total-Count', qntdPropostas['count(*)'])

    //Consulta as propostas adaptando o resultado para usar paginação e trazer os dados do usuario que criou a proposta
    const propostas = await conexaoComBD('propostas')
      .join('usuarios', 'usuarios.id', '=', 'propostas.user_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([ 'propostas.*', 'usuarios.nome', 'usuarios.email', 'usuarios.whatsapp' ])

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
