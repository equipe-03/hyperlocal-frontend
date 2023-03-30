import React, { useEffect, useState } from 'react'
import { api } from '../../API/api'
import { ListaUser } from '../../COMPONENTS/lista-user/lista-user'
import { UserPayload } from '../../TYPES/user'

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
        <div className='admin-users'>
            <div>
                {userList?.map((usuario) => (
                    <ListaUser lista={usuario} />
                ))}
            </div>
            <button>Novo Usuário</button>
        </div>
    )
}
