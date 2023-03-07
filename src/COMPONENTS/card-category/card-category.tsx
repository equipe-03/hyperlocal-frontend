import { CategoryPayload } from '../../TYPES/category'
import './card-category.css'

interface CardCategoryProps {
    category: CategoryPayload
}

export function CardCategory({ category }: CardCategoryProps) {

    return (
        <>
            <div className='category-container'>
                <img className='img-category' src={category.image} alt="Imagem Categoria" />
                <div className='title-category'>{category.name}</div>
            </div>
        </>
    )
}
