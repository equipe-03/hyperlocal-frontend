import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./footer-product.css";
type FooterProductProps = {
  price: number;
};
export function FooterProduct(product: FooterProductProps) {
  const navigate = useNavigate();
  const [qtd, setQtd] = useState(1);

  return (
    <div className="footer-product">
      <div className="quant-adc">
        <FontAwesomeIcon icon={faMinus} onClick={() => setQtd(qtd - 1)} />
        <div className="qtd">{qtd}</div>
        <FontAwesomeIcon icon={faPlus} onClick={() => setQtd(qtd + 1)} />
      </div>
      <div className="btn-adc" onClick={() => navigate(`/order/`)}>
        <div>Adicionar</div>
        <div>R$ {qtd * product.price}</div>
      </div>
    </div>
  );
}
