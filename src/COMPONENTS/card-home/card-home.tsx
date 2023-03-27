import React from "react";
import "./card-home.css";
import { api } from "../../API/api";
import { useEffect, useState } from "react";
import { TablePayload } from "../../TYPES/tables";
import { HomeItem } from "../home-item/home-item";
type Props = {};

// eslint-disable-next-line no-empty-pattern
export function CardHome({}: Props) {
  const [tables, setTables] = useState<TablePayload[]>([]);
  useEffect(() => {
    async function loadTable() {
      const data = await api.getTable();
      setTables(data);
    }
    loadTable();
  }, []);
  return (
    <div>
      <div>
        <div className="card-home">
          <div className="container-pedido-card-home">
            {tables.length > 0 &&
              tables.map((tables) => <HomeItem number={tables.number} />)}
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}
