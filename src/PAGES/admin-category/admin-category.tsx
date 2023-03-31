import React, { useEffect, useState } from 'react'
import { api } from '../../API/api'
import { ListaCategoria } from '../../COMPONENTS/lista-categoria/lista-categoria'
import { CategoryPayload } from '../../TYPES/category'
import './admin-category.css'
import { AdminHome } from '../admin-home/admin-home'


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
    <div>
        <AdminHome /> 
    <body className='Background'>
    <div className='admin-ingredient'>
        <h2 className='text_title'>Categorias</h2>
        <button className="noselect3"><span className='text'>Nova</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><polygon points="24 11 13 11 13 0 11 0 11 11 0 11 0 13 11 13 11 24 13 24 13 13 24 13 24 11"/></svg></span></button>
        <div className='list-container'>
            {categoryList?.map((categoria) => (
                <ListaCategoria key={categoria.id} lista={categoria}/>
            ))}
        </div>
        
    </div>
    </body>
    </div>
  )
}

