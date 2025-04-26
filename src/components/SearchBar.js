import React from 'react';

function SearchBar({ setSearch }) {
    return (
        <div className="mb-6">
            <input 
            type="text"
            placeholder="Search by country name"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSearch(e.target.value)} 
            />
        </div>
    );
}

export default SearchBar;