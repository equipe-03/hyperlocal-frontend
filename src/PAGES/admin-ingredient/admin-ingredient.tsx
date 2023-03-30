import React, { useEffect, useState } from 'react'
import { api } from '../../API/api'
import { ListIngradientes } from '../../COMPONENTS/lista-ingredientes/lista-ingredientes'
import { IngredientPayload } from '../../TYPES/ingredient'
import './admin-ingredient.css'

export function AdminIngredient() {

    const [ingredientList, setIngredientList] = useState<IngredientPayload[] | undefined>()
    
    async function AllIngredients() {
        const ingredients = await api.getIngredient();
        setIngredientList(ingredients)
    }

    useEffect(() => {
        AllIngredients();
      }, []);

    return (
        <div className='admin-ingredient'>
            <h2>Categorias</h2>
            <div className='list-container'>
                {ingredientList?.map((ingrediente) => (
                    <ListIngradientes key={ingrediente.id} lista={ingrediente}/>
                ))}
            </div>
            <button className='btn-new'>Novo Ingrediente</button>
        </div>
    )
}
