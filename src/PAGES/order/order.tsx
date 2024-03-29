import React from "react";
import { useNavigate } from "react-router-dom";
import { BtnGarcom } from "../../COMPONENTS/btn-garcom/btn-garcom";
import { CardItemOrder } from "../../COMPONENTS/card-item-order/card-item-order";
import FooterOrder from "../../COMPONENTS/footer-order/footer-order";
import { HeaderMesa } from "../../COMPONENTS/header-mesa/header-mesa";
import { Header } from "../../COMPONENTS/header/header";
import "./order.css";

export default function Order() {
  const navigate = useNavigate();
  return (
    <div className="page-order">
      <HeaderMesa />
      <div className="itens-adc">
        <CardItemOrder />
        <button
          className="btn-adicionar-mais"
          onClick={() => navigate(`/categorys`)}
        >
          Adicionar mais itens
        </button>
      </div>
      <div className="container-btn-garcom">
        <BtnGarcom />
      </div>
      <FooterOrder />
    </div>
  );
}
