
'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from "../../../components/ImageGallery";
import { useWishlist } from "../../../context/WishlistContext";
import { useCart } from "../../../context/CartContext"; 
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  images: string[];
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductDetailProps {
  params: { id: string };
}

const ProductDetailPage = ({ params }: ProductDetailProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart(); // 
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
      setProduct({ ...res.data, images: [res.data.image] }); 
    };
    fetchProduct();
  }, [params.id]);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  // const isInWishlist = wishlist.some((item: Product) => item.id === product.id);
  const isInWishlist = (wishlist as Product[]).some(item => item.id === product.id);


  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 max-w-5xl mx-auto">
        {/* Title & Category */}
        <div className="mb-8 border-b pb-5">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
          {product.category && (
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
              {product.category}
            </span>
          )}
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="flex justify-center items-start">
            <div className="w-full max-w-sm rounded overflow-hidden border border-gray-200 p-2 bg-gray-50">
              <ImageGallery images={product.images} />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              {/* Price */}
              <p className="text-2xl font-semibold text-green-600">${product.price.toFixed(2)}</p>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-yellow-500 font-medium">{product.rating.rate} ⭐</span>
                  <span className="text-gray-500">({product.rating.count} reviews)</span>
                </div>
              )}

              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">Description</h2>
                <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col md:flex-row gap-3">
          

              <button
                onClick={() => {
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    qty: 1,
                  });
                  router.push('/checkout'); 
                }}
                className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md shadow-sm transition"
              >
                Buy Now
              </button>

              <button
                className={`w-full md:w-auto px-6 py-3 ${isInWishlist ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  } text-sm font-semibold rounded-md transition`}
                onClick={() => toggleWishlist(product)}
              >
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

