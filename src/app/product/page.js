"use client"; 
import React, { useState, useEffect } from "react";
import ProductGrid from "@/components/ProductGrid.js";
import ProductList from "@/components/ProductList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Category = () => {
  const [viewMode, setViewMode] = useState("grid"); 
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); 
        console.log("Fetched products:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); }
    };

    fetchProducts();
  }, []);

  return (
    <div className="category-page bg-gray-100 min-h-screen font-sans">
      <Header />
      <div className="main-content w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        <div className="view-controls flex justify-between items-center mb-8">
          <div className="flex gap-8">
            <button
              aria-pressed={viewMode === "grid"}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setViewMode("grid")}
            >
              Grid View
            </button>
            <button
              aria-pressed={viewMode === "list"}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                viewMode === "list"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setViewMode("list")}
            >
              List View
            </button>
          </div>
          <div className="text-sm text-gray-600">Choose your view mode</div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
          </div>
        ) : (
          <div className="product-container grid gap-">
            {viewMode === "grid" ? (
              <ProductGrid products={products} />
            ) : (
              <ProductList products={products} />
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Category;
