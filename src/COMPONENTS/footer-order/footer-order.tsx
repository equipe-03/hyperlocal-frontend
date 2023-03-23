import React from 'react'
import './footer-order.css'

export default function FooterOrder() {
    return (
        <div className='footer-order'>
            <div className='box-total'>
                <div className='total'>Total</div>
                <div className='preco-total'>R$ 40</div>
            </div>
            <div className='box-button'>
                <button className='button-continuar'>Continuar</button>
            </div>
        </div>
    )
}
