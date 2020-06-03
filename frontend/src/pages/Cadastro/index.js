import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import brasaoUFSC from '../../assets/brasao_site_ufsc.svg'
import { FiArrowLeft } from 'react-icons/fi'

export default function Cadastro() {
  return (
    <div className="cadastro-container">
      <div className="content">
        <section>
          <img src={brasaoUFSC} alt="Brasão da UFSC" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e contribua com a sua ideias</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#1659bf" />
            Não tenho cadastro.
          </Link>
        </section>
        <form>
          <input placeholder="Nome de usuário" />
          <input placeholder="Classificação" />
          <input placeholder="Email" />
          <input placeholder="Whatsapp" />
          <button className="button">Enviar</button>
        </form>
      </div>
    </div>
  )
}
