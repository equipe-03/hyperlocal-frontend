import React, { FormEvent } from 'react'
import { api } from '../../API/api';
import './create-form-category'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryPayload } from "../../TYPES/category";

function CreateCategory() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<CategoryPayload>();
  const { id } = useParams();

  useEffect(() => {
    getCategoryById();
  }, []);

  async function getCategoryById() {
    if (id) {
      const category = await api.getCategoryById(id);
      setCategories(category);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newCategory = {
      name: formData.get("name")?.toString() || "",
      imgCategory: formData.get("imgCategory")?.toString() || "",
    };

    let categoryResponse;
    if (id) {
      const categoryToUpdate = { ...newCategory, id: id };
      categoryResponse = await api.putCategory(categoryToUpdate);
    } else {
      categoryResponse = await api.postCategory(newCategory);
    }

    if (categoryResponse) {
      navigate("/category");
    }
  }

  return (
    <div>
      
        <form onSubmit={handleSubmit}>
            <input placeholder='Nome da Categoria' name="nome"/>
            <input  placeholder='Imagem da Categoria' name="imgCategory"/>
            <button type="submit">Enviar</button>
        </form>
    
    </div>
  );
}

export default CreateCategory;
