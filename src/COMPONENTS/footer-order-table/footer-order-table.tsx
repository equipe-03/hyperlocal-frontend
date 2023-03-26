import React from 'react'
import './footer-order-table.css'


export function FooterOrderTable() {
  return (
    <div className='footer-order-table'>
        <div className='container-total'>
            <div className='total'>Total</div>
            <div className='price-total'>00,00</div>
        </div>
        <div className='container-btns'>
            <button className='btn-pedir-mais'>Pedir mais</button>
            <button className='fechar-conta'>Fechar</button>
        </div>
    </div>
  )
}


