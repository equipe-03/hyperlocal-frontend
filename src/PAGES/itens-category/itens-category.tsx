/* eslint-disable no-empty-pattern */
import React, { useEffect, useState } from "react";
import { api } from "../../API/api";
import { CardItem } from "../../COMPONENTS/card-item/card-item";
import { FooterHome } from "../../COMPONENTS/footer-home/footer-home";
import { Header } from "../../COMPONENTS/header/header";
import { ItensPayload } from "../../TYPES/tables";
import "./itens-category.css";
type Props = {};
export default function ItensCategory({}: Props) {
  //   const itens = [
  //     {
  //       id: "najdnaosdnapksda",
  //       image:
  //         "https://www.auau.com.br/image/cache/data/up_system/product-13697/TEXAS-BURGUER-1000x1000.jpg",
  //       title: "X-Salada",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       preco: 20,
  //     },
  //     {
  //       id: "najdnaosdnapksda32322",
  //       image:
  //         "https://www.auau.com.br/image/cache/data/up_system/product-13697/TEXAS-BURGUER-1000x1000.jpg",
  //       title: "X-Salada",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       preco: 20,
  //     },
  //     {
  //       id: "najdnaosdnapksda123213",
  //       image:
  //         "https://www.auau.com.br/image/cache/data/up_system/product-13697/TEXAS-BURGUER-1000x1000.jpg",
  //       title: "X-Salada",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       preco: 20,
  //     },
  //     {
  //       id: "najdnaosdnapksda9283821",
  //       image:
  //         "https://www.auau.com.br/image/cache/data/up_system/product-13697/TEXAS-BURGUER-1000x1000.jpg",
  //       title: "X-Salada",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       preco: 20,
  //     },
  //   ];

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
