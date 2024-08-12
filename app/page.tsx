import ProductCard from "@/components/ProductCard";
import ProductPage from "@/components/ProductPage";
import Image from "next/image";

export default function Home() {
  const productData = {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers...",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
    
     <ProductPage/>
    </main>
  );
}
