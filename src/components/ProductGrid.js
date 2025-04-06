"use client";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ category: "", price: [0, 1000], rating: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all products
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);

        // Extract unique categories
        const uniqueCategories = [...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const applyFilters = useCallback(() => {
    let filtered = products;
    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category);
    }
    filtered = filtered.filter(
      (product) => product.price >= filters.price[0] && product.price <= filters.price[1]
    );
if (filters.rating > 0) {
      filtered = filtered.filter((product) => product.rating.rate >= filters.rating);
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    if (name === "priceMin" || name === "priceMax") {
      setFilters({
        ...filters,
        price: name === "priceMin" ? [Number(value), filters.price[1]] : [filters.price[0], Number(value)],
      });
    } else if (name === "rating") {
      setFilters({ ...filters, [name]: Number(value) });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  useEffect(() => {
    applyFilters();
  }, [filters, applyFilters]);

  if (loading) {
    return <p className="text-center font-extrabold text-xl">Products are being retrieved from the API. Please wait a few seconds.</p>;
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full h-1/4 md:w-1/4 bg-gray-50 text-black p-6 rounded-lg shadow-xl">
          <h2 className="text-lg font-bold text-black mb-6">Filters</h2>
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Category</h3>
            <select
              name="category"
              onChange={handleFilterChange}
              value={filters.category}
              className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Price Range</h3>
            <div className="flex gap-4">
              <input
                type="number"
                name="priceMin"
                placeholder="Min"
                value={filters.price[0]}
                onChange={handleFilterChange}
                className="w-1/2 p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="priceMax"
                placeholder="Max"
                value={filters.price[1]}
                onChange={handleFilterChange}
                className="w-1/2 p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Rating</h3>
            <input
              type="range"
              name="rating"
              min="0"
              max="5"
              step="0.5"
              value={filters.rating}
              onChange={handleFilterChange}
              className="w-full p-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-600 mt-2">Rating: {filters.rating}+</p>
          </div>
          <button
            onClick={() => setFilters({ category: "", price: [0, 1000], rating: 0 })}
            className="w-full py-2 text-center text-blue-600 font-semibold border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200"
          >
            Clear All Filters
          </button>
        </div>

        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {filteredProducts.length} items found
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative border rounded-lg  p-4 w-72  bg-white hover:shadow-lg transition duration-300"
              >
                <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="contain"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-base font-medium text-yellow-500">{product.rating.rate} ★</p>
                <p className="text-lg font-semibold text-gray-900">${product.price}</p>
                <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
                <p className="text-sm text-gray-600 mt-2 text-ellipsis line-clamp-6 hover:line-clamp-none ">{product.description}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
