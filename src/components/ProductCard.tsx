
"use client";

import React from "react";
import Link from "next/link";
import { useWishlist } from '@/context/WishlistContext'

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleWishlist } = useWishlist()

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer">
        <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
        <h2 className="text-lg font-semibold truncate">{product.title}</h2>
        <p className="text-blue-600 font-bold mt-2">${product.price}</p>
       
      </div>
    </Link>
  );
};

export default ProductCard;
