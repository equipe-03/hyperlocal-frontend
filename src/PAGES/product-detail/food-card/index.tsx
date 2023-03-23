import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

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
    if (adicional > 0) {
      setadicional(adicional - 1);
    }
  }

  return (
    <div className="body">
      <div className="card" key={extra.name}>
        <div className="namepriceinfo">
          <div className="foodname"> {extra.name}</div>
          <div className="foodprice">R${extra.price}</div>
        </div>
        <div className="cardquantity">
          <button className="diminuir" onClick={diminuir}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <p className="número">{adicional}</p>
          <button className="adicionar" onClick={aumentar}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <div>{quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
