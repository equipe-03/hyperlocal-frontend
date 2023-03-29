import React, { useState } from 'react'
import { ListIngradientes } from '../../COMPONENTS/lista-ingredientes/lista-ingredientes'
import { IngredientPayload } from '../../TYPES/ingredient'

export function AdminIngredient() {
    const ingredientMoc = [{
        id: "sndjahsd1923908",
        name: "Pão",
        status: "Active"
    },
    {
        id: "sndjahsd1923908",
        name: "Carne",
        status: "Active"
    },
    {
        id: "sndjahsd1923908",
        name: "Queijo",
        status: "Active"
    },
    {
        id: "sndjahsd1923908",
        name: "Calabresa",
        status: "Inactive"
    }]

    const [ingredientList, setIngredientList] = useState<IngredientPayload[]>(ingredientMoc)
    
    return (
        <div className='admin-ingredient'>
            <div>
                {ingredientList.map((ingrediente) => (
                    <ListIngradientes key={ingrediente.id} lista={ingrediente}/>
                ))}
            </div>
            <button>Novo Ingrediente</button>
        </div>
    )
}
