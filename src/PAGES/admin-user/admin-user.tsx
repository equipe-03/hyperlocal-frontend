import React, { useState } from 'react'
import { ListaUser } from '../../COMPONENTS/lista-user/lista-user'
import { UserPayload } from '../../TYPES/user'

export function AdminUsers() {

    const Moc = [{
        id: "123123qqqq",
        name: "User",
        email: "asdakbd@snbasbvdhvas",
        password: "sjbhavsdjvas"
    },
    {
        id: "123123weqw",
        name: "User",
        email: "asdakbd@snbasbvdhvas",
        password: "sjbhavsdjvas"
    },
    {
        id: "123123wewqe",
        name: "User",
        email: "asdakbd@snbasbvdhvas",
        password: "sjbhavsdjvas"
    },
    {
        id: "123123",
        name: "User",
        email: "asdakbd@snbasbvdhvas",
        password: "sjbhavsdjvas"
    }]

    const [userList, setUserList] = useState<UserPayload[]>(Moc)

    return (
        <div className='admin-users'>
            <div>
                {userList.map((usuario) => (
                    <ListaUser lista={usuario} />
                ))}
            </div>
            <button>Novo Usuário</button>
        </div>
    )
}
