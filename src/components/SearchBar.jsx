//import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <input 
            type="text"
            placeholder="Search country..."
            onChange={(e) => onSearch(e.target.value)} 
            className="border px-4 py-2 w-full rounded-md"
        />
    );
};

export default SearchBar;