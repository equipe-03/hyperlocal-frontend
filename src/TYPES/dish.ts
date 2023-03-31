export interface DishPayload {
  id?: string | undefined;
  name: string;
  description: string;
  price: number;
  imgDish: string;
  categoryId?: string;
  ingredientId?: string;
  status: string;
}
