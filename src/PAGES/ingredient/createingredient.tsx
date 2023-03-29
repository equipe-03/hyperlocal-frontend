import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../API/api";
import { IngredientPayload } from "../../TYPES/ingredient";

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
      navigate("/ingredient");
    }
  }

  return (
    <div>
      <div className=""> {ingredients?.name}</div>
      <div>{ingredients?.status}</div>
    </div>
  );
}
