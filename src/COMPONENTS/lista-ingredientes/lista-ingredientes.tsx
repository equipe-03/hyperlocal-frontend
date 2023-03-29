import React from "react";
import "./lista-ingredientes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { IngredientPayload } from "../../TYPES/ingredient";
import { CardDelete } from "../crud-ingredient/deleteingredient";

interface ListIngredientesProps {
  lista: IngredientPayload;
}

export function ListIngradientes({ lista }: ListIngredientesProps) {
  return (
    <div className="lista-ingredientes">
      <div className="container-name-buttons">
        <div className="nome-lista">{lista.name}</div>
        <div className="container-buttons">
          <button onClick={() => CardDelete}>
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
