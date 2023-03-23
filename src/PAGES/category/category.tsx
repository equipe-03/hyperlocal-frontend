import "./category.css";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faChampagneGlasses,
  faCookieBite,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import { CardCategory } from "../../COMPONENTS/card-category/card-category";
import { CategoryPayload } from "../../TYPES/category";
import { Header } from "../../COMPONENTS/header/header";
import { FooterHome } from "../../COMPONENTS/footer-home/footer-home";
import ContextSearch from "../../context/contextsearch";
import { useDebounce } from "usehooks-ts";

export function Category() {
  const { search } = useContext(ContextSearch);
  const debouncedSearch = useDebounce(search, 1000);
  const [profiles, setProfiles] = useState<CategoryPayload[]>([]);
  const [filteredProfiles, setFilteredProfiles] = useState<CategoryPayload[]>(
    []
  );
  const [control, setControl] = useState<boolean>(false);
  function updatePage() {
    setControl(!control);
  }
  const categoria = [
    {
      image: <FontAwesomeIcon icon={faBurger} />,
      name: "Burguers",
    },
    {
      image: <FontAwesomeIcon icon={faChampagneGlasses} />,
      name: "Bebidas",
    },
    {
      image: <FontAwesomeIcon icon={faCookieBite} />,
      name: "Sobremesas",
    },
    {
      image: <FontAwesomeIcon icon={faPizzaSlice} />,
      name: "Pizzas",
    },
  ];

  const [categoryList, setCategoryList] =
    useState<CategoryPayload[]>(categoria);

  useEffect(() => {
    if (search !== "") {
      const getFilteredProfiles = profiles.filter((profile) =>
        profile.name.toUpperCase().includes(search.toUpperCase())
      );
      setFilteredProfiles(getFilteredProfiles);
    } else {
      setFilteredProfiles([]);
    }
  }, [debouncedSearch]);

  const hasFilter = filteredProfiles.length === 0;

  return (
    <>
      <Header />
      <div className="categorys">
        <h2 className="category-h2">CATEGORIAS</h2>
        <div className="category-container">
          {categoryList.map((item) => (
            <CardCategory category={item} />
          ))}
        </div>
      </div>
      <FooterHome />
      {hasFilter
        ? profiles.map((profiles) => {
            return <CardCategory category={profiles} key={profiles.name} />;
          })
        : filteredProfiles.map((profiles) => {
            return <CardCategory category={profiles} key={profiles.name} />;
          })}
    </>
  );
}
