import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DishPayload } from "../../TYPES/dish";
import React, { useState } from "react";
import { api } from "../../API/api";
import swal from "sweetalert";


interface ListaPratosProps {
  lista: DishPayload;
}

export function ListaPratos({ lista }: ListaPratosProps) {
  const handleClick = (id: any) => {
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
        await api.deleteDish(id ?? "");
      }
    });
  };
  return (
    <div>
      <div className="container-name-buttons">
        <div className="nome-lista">{lista.name}</div>
        <div className="container-buttons">
          <button>
            {" "}
            <FontAwesomeIcon icon={faPencil} />{" "}
          </button>

          <button onClick={() => handleClick(lista.id)}>
            {" "}
            <FontAwesomeIcon icon={faTrash} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
