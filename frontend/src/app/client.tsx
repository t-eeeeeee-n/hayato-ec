"use client"

import ProductCard from "@/components/ProductCard";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import React from "react";
import { useCart } from "@/context/CartContext";
import { Product, Category } from "@/types";

interface ClientProps {
    products: Product[];
    categories: Category[];
}

const Client: React.FC<ClientProps> = ({ products, categories }) => {
    const { addToCart } = useCart();

    return (
        <div>
            <Hero />
            <div className="container mx-auto px-4">
                <CategorySection categories={categories} />
                <h1 className="text-4xl font-bold text-center my-8">Featured Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Client;
