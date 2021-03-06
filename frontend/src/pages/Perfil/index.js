import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css'
import brasaoUFSC from '../../assets/brasao_site_ufsc.svg'
import api from '../../services/api'

export default function Perfil() {
  const usuarioID = localStorage.getItem('usuarioID')
  const usuarioNome = localStorage.getItem('usuarioNome')
  const [ propostas, setPropostas ] = useState([])

  const historico = useHistory()

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

  function realizarLogout() {
    localStorage.clear()

    historico.push('/')
  }

  async function deletarProposta(id) {
    try {
      await api.delete(`propostas/${id}`, {
        headers: {
          Authorization: usuarioID
        }
      })

      //Remove da lista atual a proposta que foi deletada, para que nao seja necessário renderizar a página novamente para não exibir mais a proposta deletada.
      setPropostas(propostas.filter((proposta) => proposta.id !== id))
    } catch (error) {
      alert('Erro ao deletar proposta, tente novamente')
    }
  }

  return (
    <div className="perfil-container">
      <header>
        <img src={brasaoUFSC} alt="Brasão da UFSC" />
        <span>Bem vindo, {usuarioNome}</span>
        <Link className="button" to="/propostas/nova">
          Cadastrar nova Proposta
        </Link>
        <button onClick={realizarLogout} type="button">
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
            <button onClick={() => deletarProposta(proposta.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
