import { useNavigate } from "react-router-dom";

import swal from "sweetalert";
import { api } from "../../API/api";
import React from "react";
import { TablePayload } from "../../TYPES/table";

interface TableProps {
  tables: TablePayload;
  updatePage: () => void;
}

export function CardTable({ tables, updatePage }: TableProps) {
  const navigate = useNavigate();
  async function DeleteCard() {
    swal({
      title: "Tem certeza que deseja deletar a tabela?",
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
        const isDeleted = await api.deleteIngredient(tables.id ?? "");
        if (isDeleted) {
          updatePage();
        }
      }
    });
  }
}
