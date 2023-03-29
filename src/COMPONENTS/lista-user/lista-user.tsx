import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserPayload } from '../../TYPES/user'
import React from 'react'

interface ListaUserProps {
    lista: UserPayload
}

export function ListaUser({ lista }: ListaUserProps) {
    return (
        <div>
            <div className='container-name-buttons'>
                <div className='nome-lista'>{lista.name}</div>
                <div className='container-buttons'>
                    <button> <FontAwesomeIcon icon={faPencil} /> </button>
                    <button> <FontAwesomeIcon icon={faTrash} /> </button>
                </div>
            </div>
        </div>
    )
}
