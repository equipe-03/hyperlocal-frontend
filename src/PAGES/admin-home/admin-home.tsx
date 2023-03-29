import React from 'react'
import { useNavigate } from 'react-router-dom'
import './admin-home.css'

export function AdminHome() {
  const navigate = useNavigate()
  
  return (
    <div className='admin-home'>
        <h2>ChefHub</h2>
        <button className='btn-admin-home' onClick={() => navigate('/adminIngredient')}>Ingredientes</button>
        <button className='btn-admin-home' onClick={() => navigate('/adminCategory')}>Categorias</button>
        <button className='btn-admin-home'onClick={() => navigate('/adminDish')}>Pratos</button>
        <button className='btn-admin-home'onClick={() => navigate('/')}>Pedidos</button>
        <button className='btn-admin-home'onClick={() => navigate('/adminMesas')}>Mesas</button>
        <button className='btn-admin-home' onClick={() => navigate('/adminUsers')}>Usuários</button>
    </div>
  )
}
