import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css'
import brasaoUFSC from '../../assets/brasao_site_ufsc.svg'

export default function Perfil() {
  return (
    <div className="perfil-container">
      <header>
        <img src={brasaoUFSC} alt="Brasão da UFSC" />
        <span>Bem vindo, Jorge Bastos</span>
        <Link className="button" to="/propostas/nova">
          Cadastrar nova Proposta
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        <li>
          <strong>PROPOSTA:</strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO:</strong>
          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>PROPOSTA:</strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO:</strong>
          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>PROPOSTA:</strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO:</strong>
          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>{' '}
        <li>
          <strong>PROPOSTA:</strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO:</strong>
          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  )
}
