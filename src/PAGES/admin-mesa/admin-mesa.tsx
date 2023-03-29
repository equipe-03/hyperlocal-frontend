import React, { useState } from 'react'
import { ListaMesa } from '../../COMPONENTS/lista-mesas/lista-mesa'
import { TablePayload } from '../../TYPES/table'

export function AdminMesas() {

    const Moc = [{
        id: "iqwejb",
        number: 1,
    },
    {
        id: "iqwejb123213",
        number: 1,
    },
    {
        id: "iqwejb122",
        number: 1,
    },
    {
        id: "iqwejb234566",
        number: 1,
    }]

    const [tableList, setTableList] = useState<TablePayload[]>(Moc)

    return (
        <div className='admin-mesa'>
            <div>
                {tableList.map((mesa) => (
                    <ListaMesa key={mesa.id} lista={mesa} />
                ))}
            </div>
            <button>Nova Mesa</button>
        </div>
    )
}
