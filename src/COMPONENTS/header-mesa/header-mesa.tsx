import React from "react";
import "./header-mesa.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function HeaderMesa() {
  const navigate = useNavigate();
  return (
    <div className="header-mesa">
      <div className="btn-arrow">
        {" "}
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => navigate(`/categorys`)}
        />{" "}
      </div>
      <div className="mesa">Mesa/Comanda</div>
    </div>
  );
}
