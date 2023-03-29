import React, { useEffect, useState } from 'react'
import { api } from '../../API/api'
import { ListaCategoria } from '../../COMPONENTS/lista-categoria/lista-categoria'
import { CategoryPayload } from '../../TYPES/category'

export function AdminCategory() {

    const [categoryList, setCategoryList] = useState<CategoryPayload[] | undefined>([])

    async function AllCategorys() {
        const categorys = await api.getCategory();
        setCategoryList(categorys)
    }

    useEffect(() => {
        AllCategorys();
      }, []);

    return (
    <div className='admin-ingredient'>
        <h2>Categorias</h2>
        <div className='list-container'>
            {categoryList?.map((categoria) => (
                <ListaCategoria key={categoria.id} lista={categoria}/>
            ))}
        </div>
        <button className='btn-new'>Nova Categoria</button>
    </div>
  )
}

