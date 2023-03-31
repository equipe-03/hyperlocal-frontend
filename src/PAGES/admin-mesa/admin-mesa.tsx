import React, { useEffect, useState } from 'react'
import { api } from '../../API/api'
import { ListaMesa } from '../../COMPONENTS/lista-mesas/lista-mesa'
import { TablePayload } from '../../TYPES/table'
import { AdminHome } from '../admin-home/admin-home'


export function AdminMesas() {

    const [tableList, setTableList] = useState<TablePayload[] | undefined>([])

    async function AllTables() {
        const tables = await api.getTable();
        setTableList(tables)
    }

    useEffect(() => {
        AllTables();
      }, []);

    return (
        <div>
        <AdminHome /> 
        <body className='Background'>
        <div className='admin-ingredient'>
        <h2 className='text_title'>Mesas</h2>
        <button className="noselect3"><span className='text'>Nova</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><polygon points="24 11 13 11 13 0 11 0 11 11 0 11 0 13 11 13 11 24 13 24 13 13 24 13 24 11"/></svg></span></button>
        
        <div className='list-container'>
                {tableList?.map((mesa) => (
                    <ListaMesa key={mesa.id} lista={mesa} />
                ))}
            </div>
            </div>
            </body>
    </div>
    )
}


