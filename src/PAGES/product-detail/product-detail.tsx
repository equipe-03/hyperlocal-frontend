import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../API/api";
import { BtnGarcom } from "../../COMPONENTS/btn-garcom/btn-garcom";
import { CarAdicional } from "../../COMPONENTS/card-adicional/card-adicional";
import { FooterProduct } from "../../COMPONENTS/footer-product/footer-product";
import { AdicionalPayload } from "../../TYPES/adicional";
import { ProductPayload } from "../../TYPES/tables";
import "./product-detail.css";

export default function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState<ProductPayload>({
    name: "",
    description: "",
    price: 0,
    imgDish: "",
    categoryId: "",
    id: "",
    ingredients: [],
    status: "",
  });
  useEffect(() => {
    async function LoadProductById() {
      const response = await api.getDishById(params.id as string);
      setProduct({
        name: response.name,
        description: response.description,
        price: response.price,
        imgDish: response.imgDish,
        categoryId: response.categoryId,
        id: response.id,
        status: response.status,
        ingredients: response.ingredients,
      });
      console.log(response);
    }
    LoadProductById();
  }, []);

  const adds = [
    {
      id: "ASSDAS1232344",
      nome: "Bacon",
      preco: 3,
    },
    {
      id: "ASSDAS12323",
      nome: "Ovo",
      preco: 2,
    },
    {
      id: "ASSDAS2132",
      nome: "Molho",
      preco: 2,
    },
  ];

  const [adcList, setAdcList] = useState<AdicionalPayload[]>(adds);

  return (
    <>
      <div className="detalhe-produto">
        <img
          className="img-detalhe-produto"
          src={product.imgDish}
          alt="imagem do produto"
        />
        <h2 className="titulo-detalhe-produto">{product.name}</h2>
        <div className="preco-detalhe-produto">R$ {product.price}</div>
        <div className="descricao-detalhe-produto">{product.description}</div>
        <div className="titulo-adicionais">Adicionais</div>
        <div className="adicionais-container">
          {adcList.map((adc) => (
            <CarAdicional key={adc.id} adicional={adc} />
          ))}
        </div>
      </div>
      <div className="container-btn-garcom">< BtnGarcom /></div>
      <FooterProduct />
    </>
  );
}
