import React, { useState } from "react";
import { FooterProduct } from "../../COMPONENTS/footer-product/footer-product";
import FoodCard from "./food-card";
import "./product-detail.css";

const food = {
  name: "X-Salada",
  subtitle: "lorem ipsum dolor sit amet",
  image:
    "https://www.auau.com.br/image/cache/data/up_system/product-13697/TEXAS-BURGUER-1000x1000.jpg",
  price: 10,
  extras: [
    { name: "Alface", price: 1.5 },
    { name: "Bacon", price: 1 },
  ],
};
const FoodScreen = () => {
  const [selectedExtras, setSelectedExtras] = useState<boolean[]>(
    new Array(food.extras.length).fill(false)
  );

  const toggleExtra = (index: number) => {
    const newSelectedExtras = [...selectedExtras];
    newSelectedExtras[index] = !newSelectedExtras[index];
    setSelectedExtras(newSelectedExtras);
  };

  const calculateTotal = () => {
    let total = food.price;
    selectedExtras.forEach((selected, index) => {
      if (selected) {
        total += food.extras[index].price;
      }
    });
    return total;
  };

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
      <div className="add">
        <button className="adicionar">Adicionar R${calculateTotal()}</button>
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
