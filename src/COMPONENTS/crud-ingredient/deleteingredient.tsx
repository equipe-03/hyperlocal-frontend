import { useNavigate } from "react-router-dom";
import { IngredientPayload } from "../../TYPES/ingredient";
import swal from "sweetalert";
import { api } from "../../API/api";
import React from "react";

interface IngredientProps {
  ingredients: IngredientPayload;
  updatePage: () => void;
}

export function CardDelete({ ingredients, updatePage }: IngredientProps) {
  const navigate = useNavigate();
  async function DeleteCard() {
    swal({
      title: "Tem certeza que deseja deletar o ingrediente?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: {
          text: "Cancelar",
          value: null,
          visible: true,
          closeModal: true,
          className: "",
        },
        confirm: {
          text: "Confirmar",
          value: true,
          visible: true,
          closeModal: true,
        },
      },
    }).then(async (res) => {
      if (res) {
        const isDeleted = await api.deleteIngredient(ingredients.id ?? "");
        if (isDeleted) {
          updatePage();
        }
      }
    });
  }
}
