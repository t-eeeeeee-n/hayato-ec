import React from 'react';
import { Category } from '@/types';

interface CategoryFilterProps {
    categories: Category[];
    onSelectCategory: (categoryId: number) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onSelectCategory }) => {
    return (
        <div className="flex space-x-4 mb-6">
            {categories.map(category => (
                <button
                    key={category.id}
                    onClick={() => onSelectCategory(category.id)}
                    className="p-2 border rounded bg-light text-dark hover:bg-primary hover:text-white"
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
