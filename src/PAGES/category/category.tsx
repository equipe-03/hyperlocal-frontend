import "./category.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { CardCategory } from "../../COMPONENTS/card-category/card-category";
import { CategoryPayload } from "../../TYPES/category";
import { Header } from "../../COMPONENTS/header/header";
import { FooterHome } from "../../COMPONENTS/footer-home/footer-home";
import { api } from "../../API/api";

export function Category() {
  const [categoryList, setCategoryList] = useState<
    CategoryPayload[] | undefined
  >([]);

  async function AllCategorys() {
    const categorias = await api.getCategory();
    setCategoryList(categorias);
  }

  useEffect(() => {
    AllCategorys();
  }, []);

  return (
    <>
      <Header />
      <div className="categorys">
        <h2 className="category-h2">CATEGORIAS</h2>
        <div className="category-container">
          {categoryList?.map((item) => (
            <CardCategory key={item.id} category={item} />
          ))}
        </div>
      </div>
      <FooterHome />
    </>
  );
}
