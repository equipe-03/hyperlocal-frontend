import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DishPayload } from '../../TYPES/dish'
import React from 'react'

interface ListaPratosProps {
    lista: DishPayload
}

export function ListaPratos({ lista }: ListaPratosProps) {
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
