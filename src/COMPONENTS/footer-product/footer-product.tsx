import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./footer-product.css";
import { useNavigate } from "react-router-dom";
import { DishPayload } from "../../TYPES/dish";

export function FooterProduct() {
  const navigate = useNavigate();
  const [qtd, setQtd] = useState(0);

  return (
    <div className="footer-product">
      <div className="quant-adc">
        <button onClick={() => setQtd(Math.max(qtd - 1, 0))}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <div className="qtd">{qtd}</div>
        <button onClick={() => setQtd(qtd + 1)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="btn-adc" onClick={() => navigate(`/order/`)}>
        <div>Adicionar</div>
        <div>R$ 12,00</div>
      </div>
    </div>
  );
}
