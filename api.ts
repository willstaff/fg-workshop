import { Product } from "./types";

const urlBase = "https://frasers-workshop-api.vercel.app";

const api = {
  product: {
    list: async (): Promise<Product[]> =>
      fetch(`${urlBase}/api/products`).then((res) => res.json()),
    fetch: async (handle: string): Promise<Product> => {
      return fetch(`${urlBase}/api/products/${handle}`).then((res) =>
        res.json(),
      );
    },
  },
};

export default api;