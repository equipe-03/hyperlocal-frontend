import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Tag } from "@chakra-ui/react";

type Ingredient = {
  name: string;
  available: boolean;
};
type Props = {
  products: Product[];
};

type Product = {
  name: string;
  ingredients: Ingredient[];
};


const RestaurantTable: React.FC<Props> = ({ products }) => {
  return (
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          <Th>Produto</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {products.map((product) => (
          <Tr key={product.name}>
            <Td>{product.name}</Td>
            <Td>
              {product.ingredients.map((ingredient) => (
                <Tag
                  key={ingredient.name}
                  variant="subtle"
                  colorScheme={ingredient.available ? "green" : "red"}
                  mr={1}
                  mb={1}
                >
                  {ingredient.name}
                </Tag>
              ))}
            </Td>
            <Td>
              {product.ingredients.every(
                (ingredient) => ingredient.available
              ) ? (
                <Tag colorScheme="green">Disponível</Tag>
              ) : (
                <Tag colorScheme="red">Indisponível</Tag>
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default RestaurantTable;
