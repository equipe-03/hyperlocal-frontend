import React from "react";
import { useNavigate } from "react-router-dom";
import { CategoryPayload } from "../../TYPES/category";
import "./card-category.css";

interface CardCategoryProps {
  category: CategoryPayload;
}

export function CardCategory({ category }: CardCategoryProps) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="category-card"
        // onClick={() => navigate("/itens-category/" + category.id)}
        onClick={() => navigate("/itens-category")}
      >
        <img
          className="img-category"
          src={category.imgCategory}
          alt="Imagem Categoria"
        />
        <div className="title-category">{category.name}</div>
      </div>
    </>
  );
}
