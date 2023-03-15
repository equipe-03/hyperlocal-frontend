import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faList } from '@fortawesome/free-solid-svg-icons'
import './footer-home.css'

export function FooterHome() {
  return (
    <div className="card-footer-home">
        <div className='cardapio'>< FontAwesomeIcon icon={faList}/>Cardápio</div>
        <div className='pedido'>< FontAwesomeIcon icon={faBagShopping}/>Pedidos</div>
    </div>
  )
}
