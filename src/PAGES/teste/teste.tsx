import React, { useState } from 'react'
import { ListIngradientes } from '../../COMPONENTS/lista-ingredientes/lista-ingredientes'
import { ListaPratos } from '../../COMPONENTS/lista-pratos/lista-pratos'
import { DishPayload } from '../../TYPES/dish'

import { IngredientPayload } from '../../TYPES/ingredient'

export function Test4() {
    const ingri = [{
        id: "sahsuahs",
        name: "Banana",
        status: "Activate",
        imgDish: "ndasldnaskjdba",
        categoryId: "asdnbabda",
        ingredientId: ["ajsbdasbd", "lamndkjasbd", "sbdabd"]
    },
    {
        id: "sahsuahs",
        name: "Uva",
        status: "Activate",
        imgDish: "ndasldnaskjdba",
        categoryId: "asdnbabda",
        ingredientId: ["ajsbdasbd", "lamndkjasbd", "sbdabd"]
    },
    {
        id: "sahsuahs",
        name: "Manga",
        status: "Activate",
        imgDish: "ndasldnaskjdba",
        categoryId: "asdnbabda",
        ingredientId: ["ajsbdasbd", "lamndkjasbd", "sbdabd"]
    }]

    const [ingriList, setIngriList] = useState<DishPayload[]>(ingri)
  
    return (
    <div>
        {ingriList.map((prato) => (
            < ListaPratos lista={prato}/>
        ))}
    </div>
  )
}
