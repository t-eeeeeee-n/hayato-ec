"use client"

import Link from 'next/link';
import React from "react";
import { useCart } from '@/context/CartContext';

const Navbar: React.FC = () => {
    const { getCartCount } = useCart();

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold">
                    Fresh Market
                </Link>
                <div className="flex space-x-4">
                    <Link href="/products" className="text-white hover:text-light">
                        Products
                    </Link>
                    <Link href="/cart" className="text-white hover:text-light flex items-center relative">
                        Cart
                        <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute -top-4 -right-4">
                            {getCartCount()}
                        </span>
                    </Link>
                    <Link href="/contact" className="text-white hover:text-light">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
