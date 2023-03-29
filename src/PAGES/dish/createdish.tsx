import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../API/api";
import { ListIngradientes } from "../../COMPONENTS/lista-ingredientes/lista-ingredientes";
import { DishPayload } from "../../TYPES/dish";

export function CreateDish() {
  const navigate = useNavigate();
  const [dishs, setDish] = useState<DishPayload>();
  const { id } = useParams();

  useEffect(() => {
    getDishById();
  }, []);

  async function getDishById() {
    if (id) {
      const dish = await api.getDishById(id);
      setDish(dish);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newDish = {
      name: formData.get("name")?.toString() || "",
      status: formData.get("status")?.toString() || "",
      imgDish: formData.get("img")?.toString() || "",
    };

    let dishResponse;
    if (id) {
      const ingredientToUpdate = { ...newDish, id: id };
      dishResponse = await api.patchIngredient(ingredientToUpdate);
    } else {
      dishResponse = await api.postIngredient(newDish);
    }

    if (dishResponse) {
      navigate("/adminDish");
    }
  }

  return (
    <div className="body">
      <form className="formulario" onSubmit={handleSubmit}>
        {id ? "Atualizar ingrediente" : "Criar novo ingrediente"}
        <div className="input">
          <input
            defaultValue={dishs?.name}
            type="text"
            required
            name="name"
            placeholder="Digite o ingrediente"
          />
        </div>
        <div className="input">
          <input
            defaultValue={dishs?.status}
            type="text"
            name="status"
            required
            placeholder="Digite o status"
          />
        </div>
        <div className="input">
          <input
            defaultValue={dishs?.imgDish}
            type="text"
            name="image"
            required
            placeholder="Link da Foto"
          />
        </div>
        <button type="submit" className="button">
          Criar Prato
        </button>
      </form>
    </div>
  );
}