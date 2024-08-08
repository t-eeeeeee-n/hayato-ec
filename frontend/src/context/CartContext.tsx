"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from "@/types";

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
                );
            }
            return [...prevCart, product];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getCartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};