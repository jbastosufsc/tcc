import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import brainstorm from '../../assets/brainstorm.svg'
import brasaoUFSC from '../../assets/brasao_site_ufsc.svg'
import api from '../../services/api'

import './styles.css'

export default function Login() {
  const [ id, setId ] = useState('')
  const historico = useHistory()

  async function fazerLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('/sessions', { id })
      localStorage.setItem('usuarioID', id)
      localStorage.setItem('usuarioNome', response.data.nome)
      historico.push('/perfil')
    } catch (error) {
      alert('Falha no login, tente novamente')
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={brasaoUFSC} alt="Brasão da UFSC" />
        <form onSubmit={fazerLogin}>
          <h1>Faça seu login aqui!</h1>
          <input value={id} onChange={(e) => setId(e.target.value)} placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/cadastro">
            <FiLogIn size={16} color="#1659bf" />
            Não tenho cadastro.
          </Link>
        </form>
      </section>
      <img src={brainstorm} alt="Usuarios compartilhando ideias" />
    </div>
  )
}
