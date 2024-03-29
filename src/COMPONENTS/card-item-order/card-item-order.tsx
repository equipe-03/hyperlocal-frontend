import React from "react";
import { ItemPayload } from "../../TYPES/item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./card-item-order.css";

interface CardItemProps {
  item: ItemPayload;
}

export function CardItemOrder() {
  return (
    <div className="card-item-order">
      <img
        className="img-card-item-order"
        src="https://www.auau.com.br/image/cache/data/up_system/product-13697/TEXAS-BURGUER-1000x1000.jpg"
        alt=""
      />
      <div className="information-item">
        <div className="box-title-lixeira">
          <div className="title-card-item-order">X-Salada</div>
          <div className="lixeira-card-item">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
        <div className="description-card-item-order">
          Um delicioso sanduíche de hambúrguer grelhado, com queijo, alface,
          tomate fresco e maionese caseira, servido em um pão de hambúrguer
          macio.
        </div>
        <div className="box-preco-qtd">
          <div className="preco-card-item-order">R$ 12,00</div>
          <div className="qtd-card-item">Qtd: 1</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
