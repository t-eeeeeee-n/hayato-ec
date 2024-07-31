'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

const Client: React.FC = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const handleRemove = (id: number) => {
        removeFromCart(id);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">カート</h1>
            {cart.length === 0 ? (
                <p className="text-gray-700">カートに商品がありません。</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className="flex items-center mb-4 p-4 bg-white rounded-lg shadow-md">
                            <Image src={item.imageUrl} alt={item.name} width={100} height={100} className="mr-4" />
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold">{item.name}</h2>
                                <p className="text-gray-600">¥{item.price}</p>
                                <p className="text-gray-600">数量: {item.quantity}</p>
                            </div>
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                onClick={() => handleRemove(item.id)}
                            >
                                削除
                            </button>
                        </div>
                    ))}
                    <div className="flex justify-end mt-4">
                        <button
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                            onClick={clearCart}
                        >
                            カートをクリア
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Client;
