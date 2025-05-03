import React from 'react';

const SearchBar = ({ onSearch, onFilterRegion, onFilterLanguage, regions, languages }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div className="relative flex-1">
                <input
                    type="text"
                    placeholder="Search for a country..."
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full px-4 py-2 pl-12 rounded-md shadow-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLineCap="round"
                        strokeLineJoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            <select
                onChange={(e) => onFilterRegion(e.target.value)}
                className="px-4 py-2 rounded-md shadow-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Filter By Region</option>
                {regions.map((region) => (
                    <option key={region} value={region}>
                        {region}
                    </option>
                ))}
            </select>
            <select
                onChange={(e) => onFilterLanguage(e.target.value)}
                className="px-4 py-2 rounded-md shadow-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Filter by Language</option>
                {languages.map((lang) => (
                    <option key={lang} value={lang}>
                        {lang}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SearchBar;