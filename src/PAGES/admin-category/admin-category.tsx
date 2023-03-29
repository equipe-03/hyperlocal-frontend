import React, { useState } from 'react'
import { ListaCategoria } from '../../COMPONENTS/lista-categoria/lista-categoria'
import { CategoryPayload } from '../../TYPES/category'

export function AdminCategory() {
    const categoryMoc = [{
        id: "hnsjdhbasdhasdsd",
        name: "Pizzas",
        imgCategory: "aksdknasdjbasdbasj"
    },
    {
        id: "hnsjdhbasdhnmj,ki",
        name: "Pizzas",
        imgCategory: "aksdknasdjbasdbasj"
    },
    {
        id: "hnsjdhbasdh",
        name: "Pizzas",
        imgCategory: "aksdknasdjbasdbasj"
    },
    {
        id: "hnsjdhbasdh2343245",
        name: "Pizzas",
        imgCategory: "aksdknasdjbasdbasj"
    }]

    const [categoryList, setCategoryList] = useState<CategoryPayload[]>(categoryMoc)

    return (
    <div className='admin-category'>
        <h2>Categorias</h2>
        <div>
            {categoryList.map((categoria) => (
                <ListaCategoria key={categoria.id} lista={categoria}/>
            ))}
        </div>
        <button>Nova Categoria</button>
    </div>
  )
}

