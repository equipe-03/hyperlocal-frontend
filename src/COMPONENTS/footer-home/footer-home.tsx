import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faList } from '@fortawesome/free-solid-svg-icons'
import './footer-home.css'
import { useNavigate } from 'react-router-dom';

export function FooterHome() {
  
  const navigate = useNavigate()

  return (
    <div className="card-footer-home">
        <div className='cardapio' onClick={() => navigate('/categorys')}>< FontAwesomeIcon icon={faList}/>Cardápio</div>
        <div className='pedido'>< FontAwesomeIcon icon={faBagShopping}/>Pedidos</div>
    </div>
  )
}
