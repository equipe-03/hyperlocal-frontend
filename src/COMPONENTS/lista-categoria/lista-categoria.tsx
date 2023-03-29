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
        <div className='lista-ingredientes'>
                <div className='nome-lista'>{lista.name}</div>
                <div className='container-buttons'>
                    <button> <FontAwesomeIcon icon={faPencil} /> </button>
                    <button className='trash'> <FontAwesomeIcon icon={faTrash} /> </button>
                </div>
        </div>
    )
}
