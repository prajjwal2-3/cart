'use client'
import { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
export default function Caraousal({product}:{
    product:Product
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = product.images.map(img => img.replace(/[\[\]"]/g, ''));
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
  return (
    <div className="relative h-48">
          <img 
            src={images[currentImageIndex]} 
            alt={`${product.title} - Image ${currentImageIndex + 1}`} 
            className="w-full h-full object-contain"
          />
          <button 
            onClick={prevImage} 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full dark:bg-gray-600 p-1 shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextImage} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full dark:bg-gray-600 p-1 shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
  )
}
