import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12 text-center">
      {/* Copyright Notice */}
      <p>&copy; 2025 ShopEase. All rights reserved.</p>

      {/* Social Media Links */}
      <div className="mt-4 space-x-4">
        <Link href="https://facebook.com" className="hover:text-orange-400">Facebook</Link>
        <Link href="https://twitter.com" className="hover:text-orange-400">Twitter</Link>
        <Link href="https://instagram.com" className="hover:text-orange-400">Instagram</Link>
      </div>
    </footer>
  );
};

export default Footer;
