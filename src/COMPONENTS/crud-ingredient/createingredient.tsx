import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../API/api";
import { ListIngradientes } from "../lista-ingredientes/lista-ingredientes";
import { IngredientPayload } from "../../TYPES/ingredient";
import "./ingredient.css";

export function CreateIngredient() {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState<IngredientPayload>();
  const { id } = useParams();

  useEffect(() => {
    getIngredientById();
  }, []);

  async function getIngredientById() {
    if (id) {
      const ingredient = await api.getIngredientById(id);
      setIngredients(ingredient);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newIngredient = {
      name: formData.get("name")?.toString() || "",
      status: formData.get("status")?.toString() || "",
    };

    let ingredientResponse;
    if (id) {
      const ingredientToUpdate = { ...newIngredient, id: id };
      ingredientResponse = await api.patchIngredient(ingredientToUpdate);
    } else {
      ingredientResponse = await api.postIngredient(newIngredient);
    }

    if (ingredientResponse) {
      navigate("/adminIngredient");
    }
  }

  return (
    <div className="body">
      <form className="formulario" onSubmit={handleSubmit}>
        {id ? "Atualizar ingrediente" : "Criar novo ingrediente"}
        <div className="input">
          <input
            defaultValue={ingredients?.name}
            type="text"
            required
            name="name"
            placeholder="Digite o ingrediente"
          />
        </div>
        <div className="input">
          <select name="status" defaultValue={ingredients?.status} required>
            <option value="Active">Ativo</option>
            <option value="Inactive">Inativo</option>
          </select>
        </div>
        <button type="submit" className="button">
          Criar Ingrediente
        </button>
      </form>
    </div>
  );
}
