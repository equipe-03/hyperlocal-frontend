import React from 'react'
import { BtnGarcom } from '../../COMPONENTS/btn-garcom/btn-garcom'
import { CardOrder } from '../../COMPONENTS/card-order/card-order'
import { FooterOrderTable } from '../../COMPONENTS/footer-order-table/footer-order-table'
import { HeaderMesa } from '../../COMPONENTS/header-mesa/header-mesa'
import './order-table.css'

export function OrderTable() {
  return (
    <div className='order-table'>
        < HeaderMesa />
        <div className='orders'>
            <h2 className='titles-pedidos'>Pedidos</h2>
            < CardOrder />
        </div>
        <div className="container-btn-garcom">< BtnGarcom /></div>
        < FooterOrderTable />
    </div>
  )
}
