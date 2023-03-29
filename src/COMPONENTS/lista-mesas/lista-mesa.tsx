import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TablePayload } from '../../TYPES/table'
import React from 'react'

interface ListaMesaProps {
    lista: TablePayload
}

export function ListaMesa({ lista }: ListaMesaProps) {
    return (
        <div>
            <div className='container-name-buttons'>
                <div className='nome-lista'>Mesa {lista.number}</div>
                <div className='container-buttons'>
                    <button> <FontAwesomeIcon icon={faTrash} /> </button>
                </div>
            </div>
        </div>
    )
}
