import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TablePayload } from '../../TYPES/table'
import React from 'react'
import "./lista-mesa.css";

interface ListaMesaProps {
    lista: TablePayload
}

export function ListaMesa({ lista }: ListaMesaProps) {
    return (
      <article className="card2">
      <img
        className="card__background"
        src="https://images.unsplash.com/photo-1599458252573-56ae36120de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudCUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt="Foto da Categoria"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
      <div className='lista-categorias'>
              
              <div className='container-buttons'>
                  
              </div>
      </div>
        <div className="card__content--container | flow">
          <h2 className='card__title'>{lista.number}</h2>
          
        </div>
        <button className="noselect"><span className='text'>Deletar</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></span></button>
      </div>
    </article>
    )
}
