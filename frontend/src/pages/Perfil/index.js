import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css'
import brasaoUFSC from '../../assets/brasao_site_ufsc.svg'
import api from '../../services/api'

export default function Perfil() {
  const usuarioID = localStorage.getItem('usuarioID')
  const usuarioNome = localStorage.getItem('usuarioNome')
  const [ propostas, setPropostas ] = useState([])

  useEffect(
    () => {
      api
        .get('perfil', {
          headers: {
            Authorization: usuarioID
          }
        })
        .then((response) => {
          setPropostas(response.data)
        })
    },
    [ usuarioID ]
  )

  return (
    <div className="perfil-container">
      <header>
        <img src={brasaoUFSC} alt="Brasão da UFSC" />
        <span>Bem vindo, {usuarioNome}</span>
        <Link className="button" to="/propostas/nova">
          Cadastrar nova Proposta
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        {propostas.map((proposta) => (
          <li key={proposta.id}>
            <strong>PROPOSTA:</strong>
            <p>{proposta.titulo}</p>
            <strong>DESCRIÇÃO:</strong>
            <p>{proposta.descricao}</p>
            <button>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
