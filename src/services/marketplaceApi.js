import { products } from "../data/products";

export const marketplaceApi = {
  getProducts: async () => {
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    return products;
  },

  getProductById: async (id) => {
    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return products.find(
      (product) => product.id === Number(id)
    );
  },
};