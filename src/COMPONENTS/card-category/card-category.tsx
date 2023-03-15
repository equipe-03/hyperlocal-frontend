import React from 'react';
import { CategoryPayload } from '../../TYPES/category'
import './card-category.css'

interface CardCategoryProps {
    category: CategoryPayload
}

export function CardCategory({ category }: CardCategoryProps) {

    return (
        <>
            <div className='category-card'>
                <div className='icon-category'>{category.image}</div>
                <div className='title-category'>{category.name}</div>
            </div>
        </>
    )
}
