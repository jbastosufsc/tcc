import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import brasaoUFSC from '../../assets/brasao_site_ufsc.svg'
import api from '../../services/api'

export default function NovaProposta() {
  const [ titulo, setTitulo ] = useState('')
  const [ descricao, setDescricao ] = useState('')

  const usuarioID = localStorage.getItem('usuarioID')
  const historico = useHistory()

  async function criarNovaProposta(e) {
    e.preventDefault()

    const data = {
      titulo,
      descricao
    }

    try {
      await api.post('propostas', data, {
        headers: {
          Authorization: usuarioID
        }
      })
      historico.push('/perfil')
    } catch (error) {
      alert('Erro ao cadastrar proposta, tente novamente')
    }
  }

  return (
    <div className="novaproposta-container">
      <div className="content">
        <section>
          <img src={brasaoUFSC} alt="Brasão da UFSC" />
          <h1>Criar nova Proposta</h1>
          <p>
            Crie e compartilhe a sua proposta, contribuindo para que outras pessoas possam estar
            desenvolvendo a sua ideia!
          </p>
          <Link className="back-link" to="/perfil">
            <FiArrowLeft size={16} color="#1659bf" />
            Voltar para página inicial.
          </Link>
        </section>
        <form onSubmit={criarNovaProposta}>
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título da proposta"
          />
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição"
          />
          <button className="button">Enviar</button>
        </form>
      </div>
    </div>
  )
}
