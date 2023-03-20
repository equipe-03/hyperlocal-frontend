import React from 'react'
import { CardItemOrder } from '../../COMPONENTS/card-item-order/card-item-order'
import FooterOrder from '../../COMPONENTS/footer-order/footer-order'
import { Header } from '../../COMPONENTS/header/header'
import './order.css'


export default function Order() {
  return (
    <div className='page-order'>
      < Header />
      <div className='itens-adc'>
        < CardItemOrder />
        < CardItemOrder />
        <button className='btn-adicionar-mais'>Adicionar mais itens</button>
      </div>
      < FooterOrder />
    </div>
  )
}
