import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../API/api";
import { DishPayload } from "../../TYPES/dish";

export function CreateDish() {
  const navigate = useNavigate();
  const [dishs, setDish] = useState<DishPayload>();
  const { id } = useParams();
  const { ingredientId } = useParams();

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
      description: formData.get("description")?.toString() || "",
      price: Number(formData.get("price")),
      imgDish: formData.get("img")?.toString() || "",
      categoryId: id,
      ingredientId: ingredientId,
    };

    let dishResponse;
    if (id) {
      const dishToUpdate = { ...newDish, id: id };
      dishResponse = await api.patchIngredient(dishToUpdate);
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
        {id ? "Atualizar prato" : "Criar novo prato"}
        <div className="input">
          <input
            defaultValue={dishs?.name}
            type="text"
            required
            name="name"
            placeholder="Digite o nome do prato"
          />
        </div>
        <div className="input">
          <select name="status" defaultValue={dishs?.status} required>
            <option value="Active">Ativo</option>
            <option value="Inactive">Inativo</option>
          </select>
        </div>
        <div className="input">
          <input
            defaultValue={dishs?.imgDish}
            type="text"
            name="image"
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
