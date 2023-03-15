import React, { useState } from 'react'
import { CardItem } from '../../COMPONENTS/card-item/card-item';
import { FooterHome } from '../../COMPONENTS/footer-home/footer-home'
import { Header } from '../../COMPONENTS/header/header'
import { ItemPayload } from '../../TYPES/item';
import './itens-category.css'

export default function ItensCategory() {
    const itens = [{
        image: 'https://www.auau.com.br/image/cache/data/up_system/product-13697/TEXAS-BURGUER-1000x1000.jpg',
        title: 'X-Salada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        preco: 20
    },
    {
        image: 'https://www.auau.com.br/image/cache/data/up_system/product-13697/TEXAS-BURGUER-1000x1000.jpg',
        title: 'X-Salada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        preco: 20
    },
    {
        image: 'https://www.auau.com.br/image/cache/data/up_system/product-13697/TEXAS-BURGUER-1000x1000.jpg',
        title: 'X-Salada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        preco: 20
    },
    {
        image: 'https://www.auau.com.br/image/cache/data/up_system/product-13697/TEXAS-BURGUER-1000x1000.jpg',
        title: 'X-Salada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        preco: 20
    }];

    const [itensList, setItensList] = useState<ItemPayload[]>(itens)

    return (
        <div className='page-itens-category'>
            < Header />
            <div className='itens-container'>
                {itensList.map((product) => (
                    <CardItem item={product} />
                ))}
            </div>
            < FooterHome />
        </div>
    )
}
