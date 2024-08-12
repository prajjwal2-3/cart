import { getProducts } from "@/actions/product.action";
import ProductCard from "./ProductCard";
import ProductCardShimmer from "./ProductCardShimmer";

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {products.length === 0
          ? Array.from({ length: 9 }).map((_, index) => (
              <ProductCardShimmer key={index} />
            ))
          : products.slice(0, 9).map((e: any, index: number) => (
              <ProductCard key={index} product={e} />
            ))}
      </div>
    </div>
  );
}