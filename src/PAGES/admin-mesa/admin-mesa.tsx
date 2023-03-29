import React, { useEffect, useState } from 'react'
import { api } from '../../API/api'
import { ListaMesa } from '../../COMPONENTS/lista-mesas/lista-mesa'
import { TablePayload } from '../../TYPES/table'

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
        <div className='admin-mesa'>
            <div>
                {tableList?.map((mesa) => (
                    <ListaMesa key={mesa.id} lista={mesa} />
                ))}
            </div>
            <button>Nova Mesa</button>
        </div>
    )
}
