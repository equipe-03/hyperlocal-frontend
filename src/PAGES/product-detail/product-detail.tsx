import React, { useState } from "react";
import { FooterProduct } from "../../COMPONENTS/footer-product/footer-product";
import FoodCard from "./food-card";
import "./product-detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const food = {
  name: "X-Salada",
  subtitle: "lorem ipsum dolor sit amet",
  image:
    "https://www.auau.com.br/image/cache/data/up_system/product-13697/TEXAS-BURGUER-1000x1000.jpg",
  price: 10,
  extras: [
    { name: "Alface", price: 2 },
    { name: "Bacon", price: 1.0 },
  ],
};
const FoodScreen = () => {
  const [selectedExtras, setSelectedExtras] = useState<boolean[]>(
    new Array(food.extras.length).fill(false)
  );

  return (
    <div className="body">
      <img className="image" src={food.image} alt={food.name} />
      <div>
        <div className="titulo">{food.name}</div>
      </div>
      <div>
        <div className="subtitulo">{food.subtitle}</div>
      </div>
      <div>Adicionais</div>
      <div>
        {food.extras.map((extra, index) => (
          <FoodCard key={index} extra={extra} />
        ))}
      </div>
      <div className="footer-product">
        <div className="qtd-adc">
          <div>
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <div className="qtd">0</div>
          <div>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div className="btn-adc">
          <div>Adicionar</div>
          <div>R$ 0,00</div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <FoodScreen />
      <FooterProduct />
    </div>
  );
}
