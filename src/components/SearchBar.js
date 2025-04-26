import React from 'react';

function SearchBar({ setSearch }) {
    return (
        <div className="mb-4">
            <input 
            type="text"
            placeholder="Search by country name"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            onChange={(e) => setSearch(e.target.value)} 
            />
        </div>
    );
}

export default SearchBar;