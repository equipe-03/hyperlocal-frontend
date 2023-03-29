import React from "react";
import { useNavigate } from "react-router-dom";
import { ItensPayload } from "../../TYPES/tables";
// import { ItemPayload } from '../../TYPES/item'
import "./card-item.css";

// interface CardItemProps {
//   item: ItemPayload
// }

export function CardItem({
  id,
  imgDish,
  name,
  description,
  price,
}: ItensPayload) {
  const navigate = useNavigate();

  return (
    <div className="card-item" onClick={() => navigate("/product/" + id)}>
      {/* // <div className="card-item" onClick={console.log(`${title}`)}> */}
      <img className="img-card-item" src={imgDish} alt="Foto do Prato" />
      <div className="information">
        <h2 className="title-card-item">{name}</h2>
        <div className="description-card-item">{description}</div>
        <div className="preco-card-item">R$ {price}</div>
      </div>
    </div>
  );
}
