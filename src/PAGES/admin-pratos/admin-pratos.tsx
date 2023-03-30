import React, { useEffect, useState } from "react";
import { api } from "../../API/api";
import { ListaPratos } from "../../COMPONENTS/lista-pratos/lista-pratos";
import { DishPayload } from "../../TYPES/dish";

export function AdminPratos() {
  const [ingredientList, setIngredientList] = useState<
    DishPayload[] | undefined
  >();

  async function AllDishs() {
    const dishs = await api.getDish();
    setIngredientList(dishs);
  }

  useEffect(() => {
    AllDishs();
  }, [ingredientList]);

  return (
    <div className="admin-pratos">
      <div>
        {ingredientList?.map((prato) => (
          <ListaPratos key={prato.id} lista={prato} />
        ))}
      </div>
      <button>Novo Prato</button>
    </div>
  );
}
