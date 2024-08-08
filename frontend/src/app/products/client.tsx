// src/app/products/client.tsx
"use client";

import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import { Product, Category } from '@/types';
import { useCart } from '@/context/CartContext';

interface ClientProps {
    products: Product[];
    categories: Category[];
}

const Client: React.FC<ClientProps> = ({ products, categories }) => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const { addToCart } = useCart();

    const handleSearch = (query: string) => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const handleCategorySelect = (categoryId: number) => {
        const filtered = products.filter(product => product.categoryId === categoryId);
        setFilteredProducts(filtered);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">商品一覧</h1>
            <SearchBar onSearch={handleSearch} />
            <CategoryFilter categories={categories} onSelectCategory={handleCategorySelect} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default Client;
