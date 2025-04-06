"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaUser,
  FaShoppingCart,
  FaBars,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="shadow-md bg-white">
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <button>
          <FaBars className="text-xl" />
        </button>
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <h1 className="text-lg font-bold text-blue-500">Brand</h1>
        </div>
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-xl" />
          <FaUser className="text-xl" />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-xl font-bold text-blue-500">Brand</h1>
        </div>
        <div className="flex items-center border rounded-md overflow-hidden w-full max-w-lg">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-full outline-none text-sm"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 text-sm hover:bg-blue-600"
          >
            Search
          </button>
        </div>
<div className="flex items-center space-x-6 text-gray-700">
          <div className="flex flex-col items-center cursor-pointer">
            <FaUser className="text-lg" />
            <p className="text-xs mt-1">Profile</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <FaEnvelope className="text-lg" />
            <p className="text-xs mt-1">Messages</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <FaHeart className="text-lg" />
            <p className="text-xs mt-1">Wishlist</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <FaShoppingCart className="text-lg" />
            <p className="text-xs mt-1">Cart</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between text-black px-4 py-2 text-sm">
        <div className="flex flex-wrap items-center space-x-4">
          <FaBars className="cursor-pointer" />
          <span className="hover:underline cursor-pointer">All Categories</span>
          <span className="hover:underline cursor-pointer hidden sm:inline-block">
            Hot Offers
          </span>
          <span className="hover:underline cursor-pointer hidden md:inline-block">
            Gift Boxes
          </span>
          <span className="hover:underline cursor-pointer hidden lg:inline-block">
            Projects
          </span>
          <span className="hover:underline cursor-pointer hidden xl:inline-block">
            Menu Item
          </span>
          <span className="hover:underline cursor-pointer hidden xl:inline-block">
            Help
          </span>
        </div>

        <div className="flex items-center text-black space-x-4 mt-2 md:mt-0">
          <span>English, PKR</span>
          <div className="flex items-center space-x-1">
            <span>Ship to:</span>
            <span className="font-medium">Pakistan</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
