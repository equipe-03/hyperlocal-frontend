import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserPayload } from '../../TYPES/user'
import React from 'react'

interface ListaUserProps {
    lista: UserPayload
}

export function ListaUser({ lista }: ListaUserProps) {
    return (
        <article className="card2">
       <img
          className="card__background"
          src="https://uploaddeimagens.com.br/images/004/413/017/full/Red_and_White.png?1680225517"
          alt="Foto da Logo Chef Hub"
          width="1920"
          height="2193"
        />
    <div className="card__content | flow">
    <div className="lista">
      <div className="container-buttons">
        <h2 className='card__title'>{lista.name}</h2>
        <div className="container-buttons">
        <div className="card__content--container | flow">
        <button className="noselect"><span className='text'>Deletar</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></span></button>
        </div>
      </div>

    </div>
    </div>
    </div>
    </article>
    )
}
