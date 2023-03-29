import React from 'react'
import './header-mesa.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export function HeaderMesa() {
  return (
    <div className='header-mesa'>
        <div className='btn-arrow'> <FontAwesomeIcon icon={faArrowLeft}/> </div>
        <div className='mesa'>Mesa/Comanda</div>
    </div>
  )
}
