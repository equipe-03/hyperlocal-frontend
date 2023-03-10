import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faList } from '@fortawesome/free-solid-svg-icons'
import './footer.css'

export function Footer() {
  return (
    <div className="card-footer">
        <div className='cardapio'>< FontAwesomeIcon icon={faList}/>Cardápio</div>
        <div className='pedido'>< FontAwesomeIcon icon={faBagShopping}/>Pedidos</div>
    </div>
  )
}
