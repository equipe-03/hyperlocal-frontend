import { useState } from "react";

interface Extra {
  name: string;
  price: number;
}
interface FoodCardprops {
  extra: Extra;
}

const FoodCard: React.FC<FoodCardprops> = ({ extra }) => {
  const [quantity, setQuantity] = useState<number>();
  const [adicional, setadicional] = useState(0);

  function aumentar() {
    setadicional(adicional + 1);
  }

  function diminuir() {
    setadicional(adicional - 1);
  }

  return (
    <div className="card" key={extra.name}>
      <div className="cardinfo">
        <div className="foodname"> {extra.name}</div>
        <div className="foodprice">R${extra.price}</div>
      </div>
      <div className="cardquantity">
        <button className="adicionar" onClick={aumentar}>+</button>
        <div  >0</div>
        <button className="diminuir" onClick={diminuir}>-</button>
        <div>{quantity}</div>
      </div>
    </div>
  );
};

export default FoodCard;
