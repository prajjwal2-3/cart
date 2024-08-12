import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Caraousal from './Caraousal';

interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
      <CardHeader className="relative p-0">
        <Caraousal product={product} />
        <CardTitle className="text-lg font-bold truncate mt-4 px-6 text-gray-800 dark:text-gray-100">
          {product.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-gray-600 dark:text-gray-300">
        <p className="text-sm mb-2 line-clamp-3">{product.description}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
            ${product.price.toFixed(2)}
          </span>
          <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
            {product.category.name}
          </Badge>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Updated: {new Date(product.updatedAt).toLocaleDateString()}
        </div>
      </CardContent>
      <CardFooter>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700">
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;