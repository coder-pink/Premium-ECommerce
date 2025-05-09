
// 'use client';
// import { FC, useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "../../components/ProductCard";
// import SkeletonLoader from "../../components/SkeletonLoader";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   category: string;
//   image: string;
// }

// const ProductsPage: FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch products when the component mounts
//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching products", err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Browse Products</h1>
//       {loading ? (
//         <SkeletonLoader />
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductsPage;



'use client';
import { FC, useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import SkeletonLoader from "../../components/SkeletonLoader";
import { getProducts } from '@/lib/products'; // Assuming getProducts is defined in /services/product.ts

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const ProductsPage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<{ category: string }>({ category: 'all' });
  const [sortOption, setSortOption] = useState<string>('default');

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (filters.category === 'all') return true;
    return product.category === filters.category;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === 'price-asc') {
      return a.price - b.price;
    } else if (sortOption === 'price-desc') {
      return b.price - a.price;
    } else if (sortOption === 'title-asc') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'title-desc') {
      return b.title.localeCompare(a.title);
    }
    return 0; // Default sort (no sorting)
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Browse Products</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          value={filters.category}
          onChange={handleCategoryChange}
          className="p-2 border rounded-md"
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <select
          value={sortOption}
          onChange={handleSortChange}
          className="p-2 border rounded-md"
        >
          <option value="default">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="title-asc">Title: A to Z</option>
          <option value="title-desc">Title: Z to A</option>
        </select>
      </div>

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
