import React from 'react';

function Filter ({ setRegion }) {
    return (
        <div className="mb-4">
            <select
            className="w-full px-4 py-2 border border-gray-300 rounded"
            onChange={(e) => setRegion(e.target.value)}
            >
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
}

export default Filter;