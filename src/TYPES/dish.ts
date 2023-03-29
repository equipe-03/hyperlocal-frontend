export interface DishPayload {
  id?: string;
  name: string;
  status: string;
  imgDish: string;
  categoryId?: string;
  ingredientId?:string[];
}
