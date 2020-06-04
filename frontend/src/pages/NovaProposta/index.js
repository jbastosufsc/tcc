import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import brasaoUFSC from '../../assets/brasao_site_ufsc.svg'

export default function NovaProposta() {
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
        <form>
          <input placeholder="Título da proposta" />
          <textarea placeholder="Descrição" />
          <button className="button">Enviar</button>
        </form>
      </div>
    </div>
  )
}
