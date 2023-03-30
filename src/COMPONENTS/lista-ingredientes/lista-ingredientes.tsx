import React from "react";
import "./lista-ingredientes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { IngredientPayload } from "../../TYPES/ingredient";
import { CardDelete } from "../crud-ingredient/deleteingredient";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { api } from "../../API/api";

interface ListIngredientesProps {
  lista: IngredientPayload;
}

export function ListIngradientes({ lista }: ListIngredientesProps) {
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
        const isDeleted = await api.deleteIngredient(lista.id ?? "");
        if (isDeleted) {
          const element = document.getElementById(`lista-${lista.id}`);
          element?.parentNode?.removeChild(element);
        }
      }
    });
  }

  return (
    <div id={`lista-${lista.id}`} className="lista-ingredientes">
      <div className="container-name-buttons">
        <div className="nome-lista">{lista.name}</div>
        <div className="container-buttons">
          <button onClick={DeleteCard}>
            <FontAwesomeIcon icon={faTrash} />{" "}
          </button>
        </div>
      </div>
      {lista.status == "Active" ? (
        <button className="btn-actv">Desativar</button>
      ) : (
        <button className="btn-actv">Ativar</button>
      )}
    </div>
  );
}
