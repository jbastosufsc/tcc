import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import brainstorm from '../../assets/brainstorm.svg'
import brasaoUFSC from '../../assets/brasao_site_ufsc.svg'
import { FiLogIn } from 'react-icons/fi'

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={brasaoUFSC} alt="Brasão da UFSC" />
        <form>
          <h1>Faça seu login aqui!</h1>
          <input placeholder="Sua ID" />
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
