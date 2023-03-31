import React, { useEffect, useState } from "react";
import { api } from "../../API/api";
import { ListIngradientes } from "../../COMPONENTS/lista-ingredientes/lista-ingredientes";
import { IngredientPayload } from "../../TYPES/ingredient";
import "./admin-ingredient.css";
import { AdminHome } from "../admin-home/admin-home";
import { useNavigate } from "react-router";

export function AdminIngredient() {
  const navigate = useNavigate();

  const [ingredientList, setIngredientList] = useState<
    IngredientPayload[] | undefined
  >();

  async function AllIngredients() {
    const ingredients = await api.getIngredient();
    setIngredientList(ingredients);
  }

  useEffect(() => {
    AllIngredients();
  }, []);

  return (
    <div>
      <AdminHome />
      <body className="Background">
        <div className="admin-ingredient">
          <h2 className="text_title">Ingredientes</h2>

          <button
            onClick={() => navigate(`/createingredient`)}
            className="noselect3"
          >
            <span className="text">Novo</span>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <polygon points="24 11 13 11 13 0 11 0 11 11 0 11 0 13 11 13 11 24 13 24 13 13 24 13 24 11" />
              </svg>
            </span>
          </button>

          <div className="list-container">
            {ingredientList?.map((ingrediente) => (
              <ListIngradientes key={ingrediente.id} lista={ingrediente} />
            ))}
          </div>
        </div>
      </body>
    </div>
  );
}
