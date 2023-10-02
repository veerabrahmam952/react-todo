import { createContext } from "react";
import { faker } from "@faker-js/faker";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  inStock: Array<number>;
  fastDelivery: boolean;
  ratings: Array<number>;
};

export function createRandomProduct(): Product {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: [0, 3, 5, 6, 7],
    fastDelivery: faker.datatype.boolean(),
    ratings: [1, 2, 3, 4, 5],
  };
}

export const products: Product[] = faker.helpers.multiple(createRandomProduct, {
  count: 20,
});

export const CartContext = createContext("");
