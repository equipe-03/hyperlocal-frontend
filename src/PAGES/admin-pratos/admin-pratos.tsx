import React, { useState } from 'react'
import { ListaPratos } from '../../COMPONENTS/lista-pratos/lista-pratos'
import { DishPayload } from '../../TYPES/dish'

export function AdminPratos() {

    const Moc = [{
        id: "iqwejb",
        name: "Burguer Simples",
        status: "Active",
        imgDish: "jsndabfhdsvbf",
        categoryId: "9384374dbfklabsd",
        ingredientId: []
    },
    {
        id: "iqwejb43432",
        name: "Burguer Duplo",
        status: "Active",
        imgDish: "jsndabfhdsvbf",
        categoryId: "9384374dbfklabsd",
        ingredientId: []
    },
    {
        id: "iqwejsadsad",
        name: "Burguer Triplo",
        status: "Active",
        imgDish: "jsndabfhdsvbf",
        categoryId: "9384374dbfklabsd",
        ingredientId: []
    },
    {
        id: "iqwejbbbbbbb",
        name: "Burguer Onion",
        status: "Active",
        imgDish: "jsndabfhdsvbf",
        categoryId: "9384374dbfklabsd",
        ingredientId: []
    }]

    const [ingredientList, setIngredientList] = useState<DishPayload[]>(Moc)
    
    return (
        <div className='admin-pratos'>
            <div>
                {ingredientList.map((prato) => (
                    <ListaPratos key={prato.id} lista={prato}/>
                ))}
            </div>
            <button>Novo Prato</button>
        </div>
    )
}
