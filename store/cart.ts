import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Product = {
  id: number;
  quantity: number;
};

type CartStore = {
  products: Product[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  emptyCart: () => void;
  getProductQuantity: (id: number) => number;
  decreaseQuantity: (id: number) => void;
};

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],
      addProduct: (id) => {
        set((state) => {
          const existingProduct = state.products.find(p => p.id === id);
          if (existingProduct) {
            return {
              products: state.products.map(p =>
                p.id === id ? { ...p, quantity: p.quantity + 1 } : p
              ),
            };
          }
          return {
            products: [...state.products, { id, quantity: 1 }],
          };
        });
      },
      removeProduct: (id) => {
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        }));
      },
      emptyCart: () => {
        set({ products: [] });
      },
      getProductQuantity: (id) => {
        const product = get().products.find(p => p.id === id);
        return product ? product.quantity : 0;
      },
      decreaseQuantity: (id) => {
        set((state) => ({
          products: state.products.map(p =>
            p.id === id ? { ...p, quantity: Math.max(0, p.quantity - 1) } : p
          ).filter(p => p.quantity > 0)
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