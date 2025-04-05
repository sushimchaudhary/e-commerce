'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const HomePage: React.FC = () => {
  
  // Define cart state with an array of products
  const [cart, setCart] = useState<{ id: number; name: string; price: number; image: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Load cart data from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  
  // Save cart data to localStorage whenever the cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Function to add items to the cart
  const addToCart = (product: { id: number; name: string; price: number; image: string }) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      return updatedCart;
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on the search query
  const filteredProducts = [
    // Products as before
    { id: 1, category: "Home Decor", name: "Modern Table Lamp", price: 49.99, image: "/lamp.jpg" },
    { id: 2, category: "Home Decor", name: "Minimalist Wall Clock", price: 39.99, image: "/clock.jpg" },
    { id: 3, category: "Home Decor", name: "Wooden Coffee Table", price: 119.99, image: "/coffee-table.jpg" },
    { id: 4, category: "Home Decor", name: "Cozy Floor Rug", price: 89.99, image: "/floor-rug.jpg" },
    { id: 5, category: "Home Decor", name: "LED String Lights", price: 24.99, image: "/string-lights.jpg" },
    { id: 6, category: "Beauty", name: "Luxury Skincare Set", price: 89.99, image: "/skincare.jpg" },
    { id: 7, category: "Beauty", name: "Matte Lipstick Pack", price: 29.99, image: "/lipstick.jpg" },
    { id: 8, category: "Beauty", name: "Perfume Collection", price: 119.99, image: "/perfume.jpg" },
    { id: 9, category: "Beauty", name: "Organic Face Mask", price: 19.99, image: "/face-mask.jpg" },
    { id: 10, category: "Beauty", name: "Hair Straightener", price: 59.99, image: "/hair-straightener.jpg" },
    { id: 11, category: "Electronics", name: "Wireless Headphones", price: 99.99, image: "/headphone.jpg" },
    { id: 12, category: "Electronics", name: "Smartwatch", price: 199.99, image: "/smartwatch.jpg" },
    { id: 13, category: "Electronics", name: "Gaming Keyboard", price: 79.99, image: "/keyboard.jpg" },
    { id: 14, category: "Electronics", name: "4K Smart TV", price: 499.99, image: "/smart-tv.jpg" },
    { id: 15, category: "Electronics", name: "Bluetooth Speaker", price: 49.99, image: "/bluetooth-speaker.jpg" },
    { id: 16, category: "Electronics", name: "Noise Cancelling Earbuds", price: 129.99, image: "/earbuds.jpg" },
    { id: 17, category: "Fashion", name: "Leather Jacket", price: 129.99, image: "/jacket.jpg" },
    { id: 18, category: "Fashion", name: "Sneakers", price: 89.99, image: "/sneakers.jpg" },
    { id: 19, category: "Fashion", name: "Classic Sunglasses", price: 59.99, image: "/sunglasses.jpg" },
    { id: 20, category: "Fashion", name: "Denim Jeans", price: 79.99, image: "/denim-jeans.jpg" },
    { id: 21, category: "Fashion", name: "Casual Hoodie", price: 49.99, image: "/hoodie.jpg" },
  ].filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md fixed w-full top-0 z-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="aonasapna Logo" height={100} width={100} className="right-4" />
          </Link>
          <nav className="space-x-6">
            <Link href="/" className="text-gray-700 hover:text-orange-500">Home</Link>
            <Link href="/shop" className="text-gray-700 hover:text-orange-500">Shop</Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-500">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500">Contact</Link>
          </nav>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
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
            <Link href="/register">
              <Button className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-600 transition cursor-pointer">
                Sign Up
              </Button>
            </Link>
            <Link href="/login">
              <Button className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600 transition cursor-pointer">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-white text-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-bold">Discover Amazing Products</h2>
          <p className="mt-4 text-lg">Shop the latest trends at unbeatable prices.</p>
          <Link href="/shop">
            <Button className="mt-6 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image src={product.image} alt={product.name} width={200} height={150} className="mx-auto" />
              <h4 className="text-lg font-semibold mt-4">{product.name}</h4>
              <p className="text-orange-500 font-bold text-lg">${product.price}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <Button
                  onClick={() => addToCart(product)}
                  className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
                >
                  Add to Cart
                </Button>
                <Link href={`/checkout?product=${product.id}`}>
                  <Button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                    Buy Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default HomePage;
