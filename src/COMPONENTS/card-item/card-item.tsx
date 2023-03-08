import { ItemPayload } from '../../TYPES/item'
import './card-item.css'

interface CardItemProps {
  item: ItemPayload
}

export function CardItem({ item }: CardItemProps) {
  
  return (
    <div className="card-item">
        <img className='img-card-item' src={item.image} alt="Foto do Prato" />
        <div className="information">
            <h2 className='title-card-item'>{item.title}</h2>
            <div className='description-card-item'>{item.description}</div>
            <div className='preco-card-item'>R$ {item.preco}</div>
        </div>
    </div>
  )
}