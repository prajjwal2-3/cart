"use client";
import { SetStateAction, useState } from "react";
import useCartStore from "@/store/cart";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import CartCard from "./CartCard";
import { Products } from "@/data/products";
import { Card } from '@/components/ui/card';
import Empty from "./Empty";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
export default function CartPage() {
  const [couponCode, setCouponCode] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const cart = useCartStore();
  const router = useRouter()
  const {toast} = useToast()
  const cartProducts = cart.products.map((cartItem) => {
    const product = Products.find((p) => p.id === cartItem.id);
    return product ? { ...product, quantity: cartItem.quantity } : undefined;
  }).filter((product): product is NonNullable<typeof product> => product !== undefined);

  if (cartProducts.length === 0) {
    return <Empty />;
  }

  const handleCouponCodeChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setCouponCode(e.target.value);
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === "HIREME") {
      setShowAlert(false);
      setIsApplied(true);
    } else {
      setIsApplied(false);
      setShowAlert(true);
    }
  };

  const calculateTotalPrice = () => {
    return cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const subtotal = calculateTotalPrice();
  const discount = isApplied ? 10 : 0;
  const totalPrice = subtotal - discount;

  return (
    <div className="p-10 flex flex-col lg:flex-row gap-5">
      <section className="flex flex-col lg:max-w-[65%]">
        {cartProducts.map((product) => (
          <CartCard key={product.id} data={product} />
        ))}
      </section>
      <Card className="w-full lg:max-w-[35%] h-fit p-4 flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-center"> Cart Summary</h1>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-gray-600">Subtotal:</p>
            <p className="font-semibold">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Shipping:</p>
            <p className="font-semibold text-green-400">FREE</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Taxes:</p>
            <p className="font-semibold text-green-400">I ain&lsquo;t nirmala tai</p>
          </div>
          {isApplied && (
            <div className="flex justify-between">
              <p className="text-gray-600">Discount:</p>
              <p className="font-semibold ">-$10</p>
            </div>
          )}
        </div>
        <div className="flex justify-between flex-col gap-3 mb-4">
          <div className="flex w-full items-center">
            <Input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={handleCouponCodeChange}
              className="mr-2"
            />
            <Button onClick={handleApplyCoupon}>Apply</Button>
          </div>
          <p className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
        </div>
        {showAlert && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
            <p>Invalid coupon code. Try using &quot;HIREME&quot;.</p>
          </div>
        )}
        {isApplied && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
            <p>You Saved $10.</p>
          </div>
        )}
       
        <div className="flex justify-end lg:mt-8">
          <Button className="px-8 py-4 text-lg font-bold" onClick={()=>{
            cart.emptyCart()
            router.push('/')
            toast({
              title: "Shopping Complete",
              description: "Thank you for shopping with SpaceX. You are off to MARS now 🚀🚀",
            
            })
          }}>Checkout</Button>
        </div>
        
      </Card>
    </div>
  );
}