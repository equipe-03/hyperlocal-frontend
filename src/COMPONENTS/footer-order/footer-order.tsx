import React from 'react'
import { useNavigate } from 'react-router-dom'
import './footer-order.css'

export default function FooterOrder() {
    
    const navigate = useNavigate()
    
    return (
        <div className='footer-order'>
            <div className='box-total'>
                <div className='total'>Total</div>
                <div className='preco-total'>R$ 12</div>
            </div>
            <div className='box-button'>
                <button className='button-continuar' onClick={() => navigate('/confirmation')}>Continuar</button>
            </div>
        </div>
    )
}
