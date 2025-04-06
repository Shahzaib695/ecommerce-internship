"use client"
import Image from "next/image";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6">
      <div className="mt-2 border bg-white">
        <div className="container  mx-auto px-3 flex flex-wrap justify-between items-start py-8">
        
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h4 className="text-blue-700 font-bold text-lg">Brand</h4>
            <p className="text-black text-sm ">
              Best information about the company goes here but now lorem ipsum.
            </p>
          </div>
          <div className="w-full sm:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-5">
            <div>
              <h5 className="font-semibold text-gray-800">About</h5>
              <ul className="mt-2 text-sm text-gray-700 space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Find Store</a></li>
                <li><a href="#" className="hover:underline">Categories</a></li>
                <li><a href="#" className="hover:underline">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800">Partnership</h5>
              <ul className="mt-2 text-sm text-gray-700 space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Find Store</a></li>
                <li><a href="#" className="hover:underline">Categories</a></li>
                <li><a href="#" className="hover:underline">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800">Information</h5>
              <ul className="mt-2 text-sm text-gray-700 space-y-2">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Money Refund</a></li>
                <li><a href="#" className="hover:underline">Shipping</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800">For Users</h5>
              <ul className="mt-2 text-sm text-gray-700 space-y-2">
                <li><a href="#" className="hover:underline">Login</a></li>
                <li><a href="#" className="hover:underline">Register</a></li>
                <li><a href="#" className="hover:underline">Settings</a></li>
                <li><a href="#" className="hover:underline">My Orders</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <p className="text-base font-semibold  text-gray-700">© 2025 Ecommerce Web . All rights reserved By Munawar Khan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
