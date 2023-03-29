import axios from "axios";
import swal from "sweetalert";
import { CategoryPayload } from "../TYPES/category";
import { DishPayload } from "../TYPES/dish";
import { IngredientPayload } from "../TYPES/ingredient";
import { OrderPayload } from "../TYPES/order";
import { TablePayload } from "../TYPES/table";
import { ProductPayload } from "../TYPES/tables";
import { UserPayload } from "../TYPES/user";

axios.defaults.baseURL = "https://hyperlocal-backend-production.up.railway.app";
axios.defaults.headers.post["Content-Type"] = "application/json";

function handleError(text: string, description: string) {
  swal({
    title: text,
    text: description,
    icon: "warning",
    timer: 5000,
  });
}

export const api = {
  // Ingredientes

  getIngredient: async (): Promise<IngredientPayload[] | undefined> => {
    try {
      const getIngredient = await axios.get("/ingredient/find");
      return getIngredient.data;
    } catch (err: any) {
      handleError(
        "Erro ao buscar ingredientes",
        "Erro ao buscar ingredientes tente novamente"
      );
    }
  },

  getIngredientById: async (
    ingredientId: string
  ): Promise<IngredientPayload | undefined> => {
    try {
      const ingredientid = await axios.get("/ingredient/find/" + ingredientId);
      return ingredientid.data;
    } catch (err) {
      handleError(
        "Ingrediente não foi encontrado",
        "Não há um ingrediente com este id no servidor "
      );
    }
  },

  postIngredient: async (
    ingredient: IngredientPayload
  ): Promise<IngredientPayload | undefined> => {
    try {
      const newIngredient = await axios.post("/ingredient/create", ingredient, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return newIngredient.data;
    } catch (err: any) {
      console.log(err);
      handleError("Erro ao criar o ingrediente", err.response.data.message[0]);
    }
  },

  patchIngredient: async (
    ingredient: IngredientPayload
  ): Promise<IngredientPayload | undefined> => {
    try {
      const updateIngredient = await axios.patch(
        "/ingredient/update/",
        ingredient,
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      return updateIngredient.data;
    } catch (err: any) {
      handleError("Erro ao editar o ingrediente", err.response.data.message[0]);
    }
  },

  deleteIngredient: async (
    ingredientId: string
  ): Promise<boolean | undefined> => {
    try {
      const deleteIngredient = await axios.delete(
        "/ingredient/delete/" + ingredientId,
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      if (deleteIngredient.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        "Erro ao deletar o ingrediente",
        "Ocorreu um erro, tente novamente mais tarde"
      );
    }
  },

  // Table

  getTable: async (): Promise<TablePayload[] | undefined> => {
    try {
      const getTable = await axios.get("/table/find");
      return getTable.data;
    } catch (err: any) {
      handleError(
        "Erro ao buscar tabela",
        "Erro ao buscar tabela, tente novamente"
      );
    }
  },
  getTableById: async (tableId: string): Promise<TablePayload | undefined> => {
    try {
      const tableid = await axios.get("/table/find/" + tableId);
      return tableid.data;
    } catch (err) {
      handleError(
        "Tabela não foi encontrado",
        "Não há um tabela com este id no servidor "
      );
    }
  },

  postTable: async (table: TablePayload): Promise<TablePayload | undefined> => {
    try {
      const newTable = await axios.post("/table/create", table, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return newTable.data;
    } catch (err: any) {
      console.log(err);
      handleError("Erro ao criar o tabela", err.response.data.message[0]);
    }
  },

  deleteTable: async (tableId: string): Promise<boolean | undefined> => {
    try {
      const deleteTable = await axios.delete("/table/delete/" + tableId, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      if (deleteTable.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        "Erro ao deletar o tabela",
        "Ocorreu um erro, tente novamente mais tarde"
      );
    }
  },

  // PRATOS

  getDish: async (): Promise<DishPayload[] | undefined> => {
    try {
      const getDish = await axios.get("/dish/find");
      return getDish.data;
    } catch (err: any) {
      handleError(
        "Erro ao buscar pratos",
        "Erro ao buscar pratos tente novamente"
      );
    }
  },

  getDishById: async (dishId: string): Promise<ProductPayload> => {
    try {
      const dishid = await axios.get("/dish/find/" + dishId);
      if (!dishid) {
        throw new Error("Prato não encontrado");
      }
      return dishid.data;
    } catch (err) {
      handleError(
        "Prato não foi encontrado",
        "Não há um prato com este id no servidor "
      );
      return {
        id: "",
        name: "",
        description: "",
        price: 0,
        imgDish: "",
        ingredients: [],
        categoryId: "",
        status: "",
      };
    }
  },

  postDish: async (dish: DishPayload): Promise<DishPayload | undefined> => {
    try {
      const newDish = await axios.post("/dish/create", dish, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return newDish.data;
    } catch (err: any) {
      console.log(err);
      handleError("Erro ao criar o prato", err.response.data.message[0]);
    }
  },

  putDish: async (dish: DishPayload): Promise<DishPayload | undefined> => {
    try {
      const updateDish = await axios.put("/dish/update/", dish, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return updateDish.data;
    } catch (err: any) {
      handleError("Erro ao editar o prato", err.response.data.message[0]);
    }
  },

  deleteDish: async (dishId: string): Promise<boolean | undefined> => {
    try {
      const deleteDish = await axios.delete("/dish/delete/" + dishId, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      if (deleteDish.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        "Erro ao deletar o prato",
        "Ocorreu um erro, tente novamente mais tarde"
      );
    }
  },
  // CATEGORIAS

  getCategory: async (): Promise<CategoryPayload[] | undefined> => {
    try {
      const getcategory = await axios.get("/category/find");
      return getcategory.data;
    } catch (err: any) {
      handleError(
        "Erro ao buscar categorias",
        "Erro ao buscar categorias tente novamente"
      );
    }
  },

  getCategoryById: async (
    categoryId: string
  ): Promise<CategoryPayload | undefined> => {
    try {
      const categoryid = await axios.get("/category/find/" + categoryId);
      return categoryid.data;
    } catch (err) {
      handleError(
        "Categoria não foi encontrada",
        "Não há uma categoria com este id no servidor "
      );
    }
  },

  postCategory: async (
    category: CategoryPayload
  ): Promise<CategoryPayload | undefined> => {
    try {
      const newCategory = await axios.post("/category/create", category, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return newCategory.data;
    } catch (err: any) {
      console.log(err);
      handleError("Erro ao criar categoria", err.response.data.message[0]);
    }
  },

  putCategory: async (
    category: CategoryPayload
  ): Promise<CategoryPayload | undefined> => {
    try {
      const updateCategory = await axios.put("/category/update/", category, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return updateCategory.data;
    } catch (err: any) {
      handleError("Erro ao editar categoria", err.response.data.message[0]);
    }
  },

  deleteCategory: async (categoryId: string): Promise<boolean | undefined> => {
    try {
      const deleteCategory = await axios.delete(
        "/category/delete/" + categoryId,
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      if (deleteCategory.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        "Erro ao deletar a categoria",
        "Ocorreu um erro, tente novamente mais tarde"
      );
    }
  },

  // Usuário
  getUser: async (): Promise<UserPayload[] | undefined> => {
    try {
      const getUser = await axios.get("/user/find", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return getUser.data;
    } catch (err: any) {
      handleError(
        "Erro ao buscar usuário",
        "Erro ao buscar usuário tente novamente"
      );
    }
  },
  getUserById: async (userId: string): Promise<UserPayload | undefined> => {
    try {
      const userid = await axios.get("/user/find/" + userId, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return userid.data;
    } catch (err) {
      handleError(
        "Usário não foi encontrado",
        "Não há um usuário com este id no servidor "
      );
    }
  },

  postUser: async (user: UserPayload): Promise<UserPayload | undefined> => {
    try {
      const newUser = await axios.post("/user/create", user, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return newUser.data;
    } catch (err: any) {
      console.log(err);
      handleError("Erro ao criar usuário", err.response.data.message[0]);
    }
  },

  patchUser: async (user: UserPayload): Promise<UserPayload | undefined> => {
    try {
      const updateUser = await axios.patch("/user/update/", user, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return updateUser.data;
    } catch (err: any) {
      handleError("Erro ao editar usuário", err.response.data.message[0]);
    }
  },
  deleteUser: async (userId: string): Promise<boolean | undefined> => {
    try {
      const deleteUser = await axios.delete("/user/delete/" + userId, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      if (deleteUser.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        "Erro ao deletar usuário",
        "Ocorreu um erro, tente novamente mais tarde"
      );
    }
  },

  // Pedido

  getOrder: async (): Promise<OrderPayload[] | undefined> => {
    try {
      const getorder = await axios.get("/orders/find", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return getorder.data;
    } catch (err: any) {
      handleError(
        "Erro ao buscar pedido",
        "Erro ao buscar pedido tente novamente"
      );
    }
  },

  getOrderById: async (orderId: string): Promise<OrderPayload | undefined> => {
    try {
      const orderid = await axios.get("/orders/find/" + orderId, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return orderid.data;
    } catch (err) {
      handleError(
        "Pedido não foi encontrado",
        "Não há um pedido com este id no servidor "
      );
    }
  },

  postOrder: async (order: OrderPayload): Promise<OrderPayload | undefined> => {
    try {
      const newOrder = await axios.post("/orders/create", order);
      return newOrder.data;
    } catch (err: any) {
      console.log(err);
      handleError("Erro ao criar pedido", err.response.data.message[0]);
    }
  },

  putOrder: async (order: OrderPayload): Promise<OrderPayload | undefined> => {
    try {
      const updateOrder = await axios.put("/orders/update/", order, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return updateOrder.data;
    } catch (err: any) {
      handleError("Erro ao editar pedido", err.response.data.message[0]);
    }
  },

  deleteOrder: async (orderId: string): Promise<boolean | undefined> => {
    try {
      const deleteOrder = await axios.delete("/orders/delete/" + orderId, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      if (deleteOrder.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        "Erro ao deletar o pedido",
        "Ocorreu um erro, tente novamente mais tarde"
      );
    }
  },
};
