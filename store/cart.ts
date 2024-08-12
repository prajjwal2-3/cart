import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Product = {
  id: number;
};

type Cartstore = {
  products: Product[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  emptyCart: () => void;
};

const useCartStore = create<Cartstore>()(
  persist(
    (set) => ({
    products: [],
    addProduct: (id) => {
      set((state) => ({
        products: [
          ...state.products,
          {
            id: id,
          },
        ],
      }));
    },
    removeProduct: (id) => {
      set((state) => ({
        products: state.products.filter((Product) => Product.id !== id),
      }));
    },
    emptyCart: () => {
      set((state) => ({
        products: (state.products = []),
      }));
    },
  }),
  {
    name: "Cartstore-storage",
    storage: createJSONStorage(() => localStorage),
  }
)
);

export default useCartStore;