"use client";

import useCartStore from "@/store/cart";

export default function AddtoCart({ id }: { id: number }) {
  const cart = useCartStore();
  
  const isInCart = cart.products.find((productId) => productId.id === id);

  return (
    <button
      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
      onClick={() => {
        if (isInCart) {
          cart.removeProduct(id); 
        } else {
          cart.addProduct(id);
        }
      }}
    >
      {isInCart ? 'Remove from cart' : 'Add to Cart'}
    </button>
  );
}
