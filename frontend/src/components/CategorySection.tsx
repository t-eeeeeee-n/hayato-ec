import React from "react";
import {Category} from "@/types";

interface CategorySectionProps {
    categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
    return (
        <div className="my-8">
            <h2 className="text-3xl font-bold text-center mb-4">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map(category => (
                    <div key={category.id} className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${category.imageUrl})` }}>
                        <div className="absolute inset-0 bg-black opacity-25"></div>
                        <div className="relative z-10 flex items-center justify-center h-full">
                            <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategorySection;
