import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { CategoryPayload } from '../../TYPES/category'
import './lista-categoria.css'


interface ListaCategoriaProps {
    lista: CategoryPayload
}

export function ListaCategoria({ lista }: ListaCategoriaProps) {
    return (
        
        <article className="card">
        <img
          className="card__background"
          src="https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFtYnVyZ3VlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
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
            <h2 className='card__title'>{lista.name}</h2>
            
          </div>
          <button className="noselect2"><span className='text'>Editar</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M1.172,19.119A4,4,0,0,0,0,21.947V24H2.053a4,4,0,0,0,2.828-1.172L18.224,9.485,14.515,5.776Z"/><path d="M23.145.855a2.622,2.622,0,0,0-3.71,0L15.929,4.362l3.709,3.709,3.507-3.506A2.622,2.622,0,0,0,23.145.855Z"/></svg></span></button>
          <button className="noselect"><span className='text'>Deletar</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></span></button>
        </div>
      </article>
    )
}
