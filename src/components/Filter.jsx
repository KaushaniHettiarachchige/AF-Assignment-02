//import React from 'react';

const Filter = ({ onRegionChange }) => {
    return (
        <select
            onChange={(e) => onRegionChange(e.target.value)}
            className="border px-4 py-2 rounded-md"
            >
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
    );
};

export default Filter;