import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import './card-adicional.css'
import { AdicionalPayload } from '../../TYPES/adicional'

interface AdicionalProps {
    adicional: AdicionalPayload
}

export function CarAdicional({adicional}: AdicionalProps) {
  
    return (
    <div className='card-adicional'>
        <div className='tipo-adc'>
            <div className='nome-adc'>{adicional.nome}</div>
            <div className='preco-adc'>+ R$ {adicional.preco}</div>
        </div>
        <div className='qtd-adc'>
            <div>< FontAwesomeIcon icon={faMinus}/></div>
            <div className='qtd'>0</div>
            <div>< FontAwesomeIcon icon={faPlus}/></div>
        </div>
    </div>
  )
}
