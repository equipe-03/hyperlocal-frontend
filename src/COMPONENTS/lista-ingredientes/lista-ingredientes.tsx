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
    <article className="card2">
      <img
        className="card__background"
        src="https://uploaddeimagens.com.br/images/004/413/019/full/White_and_Red_%281%29.png?1680225648"
        alt="Foto da Categoria"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
      <div className='lista-categorias'>
              
              <div className='container-buttons'>
                  
              </div>
      </div>
        <div className="card__content--container | flow">
          <h2 className='card__title'>{lista.name}</h2>
          
        </div>
        <button className="noselect"><span className='text'>Deletar</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></span></button>
      </div>
    </article>
  );
}
