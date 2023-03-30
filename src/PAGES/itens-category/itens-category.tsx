/* eslint-disable no-empty-pattern */
import { useEffect, useState } from "react";
import { api } from "../../API/api";
import { CardItem } from "../../COMPONENTS/card-item/card-item";
import { FooterHome } from "../../COMPONENTS/footer-home/footer-home";
import { Header } from "../../COMPONENTS/header/header";
import { ItensPayload } from "../../TYPES/tables";
import "./itens-category.css";
type Props = {};
export default function ItensCategory({}: Props) {
  const [itens, setItensList] = useState<ItensPayload[]>([]);
  useEffect(() => {
    async function loadItens() {
      const itens = await api.getDish();
      setItensList(itens as unknown as ItensPayload[]);
    }
    loadItens();
  }, []);
  return (
    <div className="page-itens-category">
      <Header />
      <div className="itens-container">
        {itens.map((product) => (
          <CardItem
            key={product.id}
            id={product.id as string}
            name={product.name}
            imgDish={product.imgDish}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
      <FooterHome />
    </div>
  );
}
