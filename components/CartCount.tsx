'use client'
import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import useCartStore from "@/store/cart";
export default function CartCount() {
    const products = useCartStore()
    const cartItemCount = products.products.length
  return (
   <Link href='/cart'>
    <Button variant="ghost" size="icon" className="relative">
    <ShoppingCart className="h-5 w-5" />
    <Badge variant="secondary" className="absolute -top-2 -right-2">
      {cartItemCount?cartItemCount:0}
    </Badge>
  </Button>
   </Link>
  )
}
