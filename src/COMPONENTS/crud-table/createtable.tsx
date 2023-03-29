import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../API/api";

import { TablePayload } from "../../TYPES/table";

export function CreateTable() {
  const navigate = useNavigate();
  const [tables, setTables] = useState<TablePayload>();
  const { id } = useParams();

  useEffect(() => {
    getTableById();
  }, []);

  async function getTableById() {
    if (id) {
      const table = await api.getTableById(id);
      setTables(table);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newTable = {
      number: Number(formData.get("number")) || 0,
    };

    let tableResponse;
    if (!id) {
      tableResponse = await api.postTable(newTable);
    }
    if (tableResponse) {
      navigate("/adminIngredient");
    }
  }

  return (
    <div className="body">
      <form className="formulario" onSubmit={handleSubmit}>
        {id ? "Atualizar mesa" : "Criar nova mesa"}
        <div className="input">
          <input
            defaultValue={tables?.number}
            type="text"
            required
            name="name"
            placeholder="Digite o numero da mesa"
          />
        </div>

        <button type="submit" className="button">
          Criar Mesa
        </button>
      </form>
    </div>
  );
}
