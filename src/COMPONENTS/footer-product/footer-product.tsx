import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import './footer-product.css'
import { useNavigate } from 'react-router-dom';

export function FooterProduct() {
  
  const navigate = useNavigate()
  
  return (
    <div className='footer-product'>
        <div className='quant-adc'>
            <div>< FontAwesomeIcon icon={faMinus}/></div>
            <div className='qtd'>0</div>
            <div>< FontAwesomeIcon icon={faPlus}/></div>
        </div>
        <div className='btn-adc' onClick={() => navigate('/order')}>
            <div>Adicionar</div>
            <div>R$ 0,00</div>
        </div>
    </div>
  )
}
