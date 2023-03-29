import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { CarAdicional } from '../../COMPONENTS/card-adicional/card-adicional';
import { FooterProduct } from '../../COMPONENTS/footer-product/footer-product'
import { AdicionalPayload } from '../../TYPES/adicional';
import './product-detail.css'


export default function ProductDetail() {
    const { id } = useParams()
    
    const adds = [{
        id: 'ASSDAS1232344',
        nome: 'Bacon',
        preco: 3
    },
    {
        id: 'ASSDAS12323',
        nome: 'Ovo',
        preco: 2
    },
    {
        id: 'ASSDAS2132',
        nome: 'Molho',
        preco: 2
    }]

    const [adcList, setAdcList] = useState<AdicionalPayload[]>(adds)



    return (
        <>
            <div className='detalhe-produto'>
                <img className='img-detalhe-produto' src="https://saopaulosecreto.com/wp-content/uploads/2022/10/Get-Burger-1024x683.jpg" alt="imagem do produto" />
                <h2 className='titulo-detalhe-produto'>Duplo Buguer</h2>
                <div className='preco-detalhe-produto'>A partir de R$20,00</div>
                <div className='descricao-detalhe-produto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam provident quidem quam nobis libero optio quis! Hic omnis aspernatur corrupti unde beatae voluptas ratione, blanditiis quam, impedit velit quis exercitationem.</div>
                <div className='titulo-adicionais'>Adicionais</div>
                <div className='adicionais-container'>
                    {adcList.map((adc) => (
                        <CarAdicional key={adc.id} adicional={adc}/>
                    ))}
                </div>
            </div>
            <FooterProduct />
        </>
    )
}
