import React, { useEffect, useState } from 'react'
import { api } from '../../API/api'
import { ListaPratos } from '../../COMPONENTS/lista-pratos/lista-pratos'
import { DishPayload } from '../../TYPES/dish'
import { AdminHome } from '../admin-home/admin-home'
import './admin-pratos.css'

export function AdminPratos() {

    const [ingredientList, setIngredientList] = useState<DishPayload[] | undefined>()

    async function AllDishs () {
        const dishs = await api.getDish();
        setIngredientList(dishs)
    }

    useEffect(() => {
        AllDishs();
      }, []);
    
    return (
        <div>
        <AdminHome /> 
        <body className='Background'>
        <div className='admin-ingredient'>
        <h2 className='text_title'>Pratos</h2>
        <button className="noselect3"><span className='text'>Novo</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><polygon points="24 11 13 11 13 0 11 0 11 11 0 11 0 13 11 13 11 24 13 24 13 13 24 13 24 11"/></svg></span></button>
            <div className='list-container'>
                {ingredientList?.map((prato) => (
                    <ListaPratos key={prato.id} lista={prato}/>
                ))}
            </div>
            </div>
            </body>
    </div>

    )
}

