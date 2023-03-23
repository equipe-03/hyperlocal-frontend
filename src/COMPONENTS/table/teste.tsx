import { ChakraProvider } from "@chakra-ui/react";
import RestaurantTable from "./table";

const products = [
  {
    name: "Hambúrguer",
    ingredients: [
      { name: "Pão de hambúrguer", available: true },
      { name: "Carne de hambúrguer", available: false },
      { name: "Queijo", available: true },
    ],
  },
  {
    name: "Pizza",
    ingredients: [
      { name: "Molho de tomate", available: true },
      { name: "Queijo", available: true },
      { name: "Massa de pizza", available: true },
      { name: "Pepperoni", available: true },
    ],
  },
  {
    name: "Salada",
    ingredients: [
      { name: "Alface", available: true },
      { name: "Tomate", available: false },
      { name: "Cenoura", available: true },
      { name: "Croutons", available: true },
      { name: "Molho para salada", available: true },
    ],
  },
];

function Teste() {
  return (
    <ChakraProvider>
      <RestaurantTable products={products} />
    </ChakraProvider>
  );
}

export default Teste;
