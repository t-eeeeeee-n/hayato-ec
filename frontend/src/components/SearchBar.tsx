import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-2 border rounded-l-md"
            />
            <button type="submit" className="bg-primary text-white p-2 rounded-r-md">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
