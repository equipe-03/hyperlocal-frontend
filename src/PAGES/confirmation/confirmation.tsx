import React from 'react'
import './confirmation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faList } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

export function Confirmation() {

  const navigate = useNavigate()

  return (
    <div className='page-confirm'>
      <div className='icon-check'>< FontAwesomeIcon icon={faCheck} /></div>
      <div className='confirm'>Pedido confirmado</div>
      <div className='confirm-detail'>O seu pedido foi enviado para cozinha, agora aguarde alguns minutos por gentileza.</div>
      <button className='btn-page-confirm' onClick={() => navigate('/categorys')} >< FontAwesomeIcon icon={faList} />             Cardápio</button>
    </div>
  )
}
