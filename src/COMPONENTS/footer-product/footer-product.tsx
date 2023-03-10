import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import './footer-product.css'

export function FooterProduct() {
  return (
    <div className='footer-product'>
        <div className='qtd-adc'>
            <div>< FontAwesomeIcon icon={faMinus}/></div>
            <div className='qtd'>0</div>
            <div>< FontAwesomeIcon icon={faPlus}/></div>
        </div>
        <div className='btn-adc'>
            <div>Adicionar</div>
            <div>R$ 0,00</div>
        </div>
    </div>
  )
}
