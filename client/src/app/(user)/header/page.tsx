'use client';

import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

// Define the props interface for the Header component
interface HeaderProps {
  cart: { id: number; name: string; price: number; image: string }[];
  searchQuery: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ cart = [], searchQuery, handleSearchChange }) => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="NepLoom Logo" height={100} width={100} className="right-4" />
        </Link>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-orange-500">Home</Link>
          <Link href="/shop" className="text-gray-700 hover:text-orange-500">Shop</Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-500">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-orange-500">Contact</Link>
        </nav>

        {/* Search Input */}
        <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

        {/* Cart Icon with Badge */}
        <Link href="/cart" className="relative">
          <FiShoppingCart className="text-gray-700 text-2xl" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>

        {/* Sign Up / Sign In Buttons */}
        <div className="flex space-x-4">
          {/* <Link href="/register">
            <Button className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-600 transition cursor-pointer">
              Sign Up
            </Button>
          </Link> */}
          <Link href="/login">
            <Button className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600 transition cursor-pointer">
              Sign In
            </Button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
