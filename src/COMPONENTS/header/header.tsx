import React from "react";
import "./header.css";

export function Header() {
  return (
    <header className="header">
      <h2 className="title">Olá, </h2>
      <h1 className="title2">Seja Bem Vindo(a)</h1>
      <input
        className="search"
        placeholder="Qual comida você está procurando?"
        type="text"
      />
    </header>
  );
}
