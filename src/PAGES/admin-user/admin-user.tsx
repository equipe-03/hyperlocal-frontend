import React, { useEffect, useState } from 'react'
import { api } from '../../API/api'
import { ListaUser } from '../../COMPONENTS/lista-user/lista-user'
import { UserPayload } from '../../TYPES/user'
import { AdminHome } from '../admin-home/admin-home'

export function AdminUsers() {

    const [userList, setUserList] = useState<UserPayload[] | undefined>()

    async function AllUsers () {
        const users = await api.getUser();
        setUserList(users)
    }

    useEffect(() => {
        AllUsers();
      }, []);

    return (
        <div>
        <AdminHome /> 
    <body className='Background'>
    <div className='admin-ingredient'>
        <h2 className='text_title'>Usuário</h2>
        <button className="noselect3"><span className='text'>Novo</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><polygon points="24 11 13 11 13 0 11 0 11 11 0 11 0 13 11 13 11 24 13 24 13 13 24 13 24 11"/></svg></span></button>
        <div className='list-container'>
        {userList?.map((usuario) => (
                    <ListaUser lista={usuario} />
                ))}
        </div>
        
    </div>
    </body>
    </div>
    )
}

