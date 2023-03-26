import React from 'react'
import './card-order.css'

export function CardOrder() {
    return (
        <div className='card-order'>
            <div className='container-pedido-card-order'>
                <div className='titulo-pedido'>Pedido 000</div>
                <div className='qtd-pedido'>Qtd. Itens: 0</div>
            </div>
            <div className='container-total-pedido'>
                <div className='total-card-pedido'>Total</div>
                <div className='vl-total-pedido'>R$ 0,00</div>
            </div>
        </div>
    )
}
