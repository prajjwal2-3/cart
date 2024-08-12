import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const ProductCardShimmer: React.FC = () => {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <CardHeader className="space-y-2">
        <div className="w-full h-48 bg-gray-200 animate-pulse rounded-md" />
        <div className="h-6 bg-gray-200 animate-pulse rounded-md w-3/4" />
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="h-4 bg-gray-200 animate-pulse rounded-md w-full" />
        <div className="h-4 bg-gray-200 animate-pulse rounded-md w-full" />
        <div className="h-4 bg-gray-200 animate-pulse rounded-md w-2/3" />
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-200 animate-pulse rounded-md w-1/4" />
          <div className="h-6 bg-gray-200 animate-pulse rounded-md w-1/4" />
        </div>
        <div className="h-4 bg-gray-200 animate-pulse rounded-md w-1/2" />
      </CardContent>
      <CardFooter>
        <div className="w-full h-10 bg-gray-200 animate-pulse rounded-md" />
      </CardFooter>
    </Card>
  );
};

export default ProductCardShimmer;