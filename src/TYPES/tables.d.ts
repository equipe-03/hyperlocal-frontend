export type TablesPayload = {
  id?: string;
  number: number;
};

export type ItensPayload = {
  id: string;
  imgDish: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
};

export type ProductPayload = {
  id: string;
  name: string;
  description: string;
  price: number;
  imgDish: string;
  categoryId: string;
  ingredients: [];
  status: string;
};
