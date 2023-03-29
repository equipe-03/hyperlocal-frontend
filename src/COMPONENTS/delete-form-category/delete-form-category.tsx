import { useNavigate } from "react-router-dom";
import { CategoryPayload } from "../../TYPES/category";
import swal from "sweetalert";
import { api } from "../../API/api";
import { Category } from "../../PAGES/category/category";

interface CategoryProps {
  categories: CategoryPayload;
  updatePage: () => void;
}

export function CardProfile({ categories, updatePage }: CategoryProps) {
  const navigate = useNavigate();
  async function DeleteCard() {
    swal({
      title: "Tem certeza que deseja deletar a categoria?",
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
        const isDeleted = await api.deleteCategory(categories.id ?? "");
        if (isDeleted) {
          updatePage();
        }
      }
    });
  }
}

