import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'
import brasaoUFSC from '../../assets/brasao_site_ufsc.svg'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

export default function Cadastro() {
  const [ nome, setNome ] = useState('')
  const [ classificacao, setClassificacao ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ whatsapp, setWhatsapp ] = useState('')

  const historico = useHistory()

  //Função responsável por cadastrar um novo usuáro com os dados do formulário
  async function cadastrarUsuario(e) {
    e.preventDefault()

    const data = { nome, classificacao, email, whatsapp }

    try {
      const response = await api.post('usuarios', data)
      alert(`Seu ID de acesso: ${response.data.id}`)
      historico.push('/')
    } catch (error) {
      alert(`Erro no cadastro, tente novamente`)
    }
  }

  return (
    <div className="cadastro-container">
      <div className="content">
        <section>
          <img src={brasaoUFSC} alt="Brasão da UFSC" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e contribua com a sua ideias</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#1659bf" />
            Retornar para página inicial.
          </Link>
        </section>
        <form onSubmit={cadastrarUsuario}>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome de usuário"
          />
          <div
            className="radio-button-classificacao"
            onChange={(e) => setClassificacao(e.target.value)}
          >
            <input value="Aluno" type="radio" name="classificacao" />
            <label>Aluno</label>
            <input value="Professor" type="radio" name="classificacao" /> <label>Professor</label>
          </div>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="Whatsapp"
          />
          <button className="button">Enviar</button>
        </form>
      </div>
    </div>
  )
}
