'use client'

import React, { createContext, useContext, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface WishlistContextType {
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

interface WishlistProviderProps {
  children: React.ReactNode; 
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const toggleWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === product.id)) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};


export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
