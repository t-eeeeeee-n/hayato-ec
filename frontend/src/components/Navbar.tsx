import Link from 'next/link';
import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold">
                    Fresh Market
                </Link>
                <div className="flex space-x-4">
                    <Link href="/products" className="text-gray-300 hover:text-white">
                        Products
                    </Link>
                    <Link href="/cart" className="text-gray-300 hover:text-white flex items-center">
                        {/*<FaShoppingCart className="mr-2" />*/}
                        Cart
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
