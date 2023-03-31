import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./card-adicional.css";
import { AdicionalPayload } from "../../TYPES/adicional";

interface AdicionalProps {
  adicional: AdicionalPayload;
}

export function CarAdicional({ adicional }: AdicionalProps) {
  const [qtd, setQtd] = useState(0);
  return (
    <div className="card-adicional">
      <div className="tipo-adc">
        <div className="nome-adc">{adicional.nome}</div>
        <div className="preco-adc">+ R$ {adicional.preco}</div>
      </div>
      <div className="qtd-adc">
        <div>
          <FontAwesomeIcon icon={faMinus} onClick={() => setQtd(qtd - 1)} />
        </div>
        <div className="qtd">{qtd}</div>
        <div>
          <FontAwesomeIcon icon={faPlus} onClick={() => setQtd(qtd + 1)} />
        </div>
      </div>
    </div>
  );
}
