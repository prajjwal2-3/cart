import React from 'react'
import { Product } from '@/types/basic'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import Caraousal from './Caraousal';
import useCartStore from '@/store/cart';
interface CartCardProps {
  data: Product;
}

export default function CartCard({ data }: CartCardProps) {
    const cart = useCartStore()
  return (
   
    <Card className="mb-8  lg:flex  justify-center  items-center">
        <Caraousal product={data}/>
    <section className='lg:w-9/12'>
    <CardHeader>
      <h2 className="text-2xl font-bold">{data.title}</h2>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm mb-2 line-clamp-2 w-11/12">{data.description}</p>
        <p className="text-xl font-bold">${data.price}</p>
      </div>
      <Separator className="my-4" />
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Button variant="ghost" className="mr-2">
            -
          </Button>
          <span className="text-lg font-bold">1</span>
          <Button variant="ghost" className="ml-2">
            +
          </Button>
        </div>
        <Button variant="outline" className="ml-4" onClick={()=>{
            cart.removeProduct(data.id)
        }}>
          Remove
        </Button>
      </div>
    </CardContent>
    </section>
  </Card>
  )
}
