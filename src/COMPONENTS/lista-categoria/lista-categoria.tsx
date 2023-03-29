import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { CategoryPayload } from '../../TYPES/category'


interface ListaCategoriaProps {
    lista: CategoryPayload
}

export function ListaCategoria({ lista }: ListaCategoriaProps) {
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
