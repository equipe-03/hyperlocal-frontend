import { useNavigate } from "react-router-dom";

import swal from "sweetalert";
import { api } from "../../API/api";

import { DishPayload } from "../../TYPES/dish";

interface DishProps {
  dishs: DishPayload;
  updatePage: () => void;
}

export function CardProfile({ dishs, updatePage }: DishProps) {
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
        const isDeleted = await api.deleteDish(dishs.id ?? "");
        if (isDeleted) {
          updatePage();
        }
      }
    });
  }
}
