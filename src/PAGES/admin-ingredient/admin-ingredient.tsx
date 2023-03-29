import React, { useEffect, useState } from 'react'
import { api } from '../../API/api'
import { ListIngradientes } from '../../COMPONENTS/lista-ingredientes/lista-ingredientes'
import { IngredientPayload } from '../../TYPES/ingredient'

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
            <div>
                {ingredientList?.map((ingrediente) => (
                    <ListIngradientes key={ingrediente.id} lista={ingrediente}/>
                ))}
            </div>
            <button>Novo Ingrediente</button>
        </div>
    )
}
