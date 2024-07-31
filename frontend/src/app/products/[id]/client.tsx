"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { FaShoppingCart, FaTruck, FaStar } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import { Product, Review } from '@/types';

interface ClientProps {
    product: Product;
}

const Client: React.FC<ClientProps> = ({ product }) => {
    const [activeTab, setActiveTab] = useState('description');
    const [mainImage, setMainImage] = useState(product.imageUrl);
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCart();

    const renderTabContent = () => {
        switch (activeTab) {
            case 'description':
                return <p className="text-gray-700">{product.details}</p>;
            case 'shipping':
                return (
                    <div className="flex items-center">
                        <FaTruck className="text-blue-500 mr-2"/>
                        <p className="text-gray-700">{product.shippingInfo}</p>
                    </div>
                );
            case 'reviews':
                return (
                    <div>
                        {product.reviews.map((review, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex items-center mb-2">
                                    {Array.from({ length: review.rating }, (_, i) => (
                                        <FaStar key={i} className="text-yellow-500"/>
                                    ))}
                                </div>
                                <p className="text-gray-700"><strong>{review.user}:</strong> {review.comment}</p>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="hidden md:flex md:flex-col items-center p-4">
                    {[product.imageUrl, ...product.thumbnails].map((image, index) => (
                        <div key={index} className="w-full p-2">
                            <Image src={image} alt={product.name} width={100} height={100} className="cursor-pointer" onClick={() => setMainImage(image)}/>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-3/4 p-8">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full relative mb-8 md:mb-0">
                            <Image src={mainImage} alt={product.name} layout="responsive" width={500} height={500} objectFit="contain"/>
                            <div className="flex md:hidden justify-center mt-4">
                                {[product.imageUrl, ...product.thumbnails].map((image, index) => (
                                    <div key={index} className="w-1/4 p-2">
                                        <Image src={image} alt={product.name} width={100} height={100} className="cursor-pointer" onClick={() => setMainImage(image)}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:pl-8">
                            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
                            <p className="mt-4 text-2xl font-semibold text-gray-600">¥{product.price}</p>
                            <div className="flex items-center mb-4">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <FaStar key={i} className={`text-yellow-500 ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`} />
                                ))}
                                <span className="ml-2 text-gray-600">(75件のレビュー)</span>
                            </div>
                            <p className="mt-4 text-gray-700">{product.description}</p>
                            <div className="mt-6 flex items-center">
                                <label className="mr-2">数量:</label>
                                <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="border rounded w-16 text-center"/>
                            </div>
                            <button onClick={handleAddToCart} className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                                <FaShoppingCart className="mr-2"/> カートに追加する
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex">
                        <button onClick={() => setActiveTab('description')} className={`text-gray-500 hover:text-gray-700 py-4 px-6 block ${activeTab === 'description' ? 'border-b-2 border-blue-500 font-medium text-gray-700' : ''}`}>商品説明</button>
                        <button onClick={() => setActiveTab('shipping')} className={`text-gray-500 hover:text-gray-700 py-4 px-6 block ${activeTab === 'shipping' ? 'border-b-2 border-blue-500 font-medium text-gray-700' : ''}`}>配送情報</button>
                        <button onClick={() => setActiveTab('reviews')} className={`text-gray-500 hover:text-gray-700 py-4 px-6 block ${activeTab === 'reviews' ? 'border-b-2 border-blue-500 font-medium text-gray-700' : ''}`}>レビュー ({product.reviews.length}件)</button>
                    </nav>
                </div>
                <div className="bg-white rounded-lg shadow-lg mt-8 p-8">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
}

export default Client;
