import React from 'react'
import { useNavigate } from 'react-router-dom'
import './admin-home.css'

export function AdminHome() {
  const navigate = useNavigate()
  
  return (

    <nav>
    <button className='botao'><a href="/adminIngredient">Ingredientes</a></button>
    <button className='botao'><a href="/adminDish">Pratos</a></button>
    <button className='botao'><a href="/adminMesas">Mesas</a></button>
    <button className='botao'><a href="/adminUsers">Usuários</a></button>
    <button className='botao'><a href="/adminCategory">Categorias</a></button>
    </nav>
    

  )
}

