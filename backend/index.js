const express = require('express')

const app = express()

app.get('/', (request, response) => {
  return response.send({ Projeto: 'TCC', Aluno: 'Jorge de Almeida Bastos Jr' })
})

app.listen(3333)
