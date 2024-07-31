import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Product } from '@/types';

interface ProductCardProps {
    product: Product;
    addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
    const handleAddToCart = () => {
        addToCart({ ...product, quantity: 1 });
    };

    return (
        <div
            className="border rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:shadow-2xl hover:border-blue-500">
            <Link href={`/products/${product.id}`} className="block">
                <div className="relative h-64">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="mt-2 text-gray-600">¥{product.price}</p>
                </div>
            </Link>
            <div className="p-4">
                <button
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
                    onClick={handleAddToCart}
                >
                    <FaShoppingCart className="mr-2"/> カートに追加する
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
