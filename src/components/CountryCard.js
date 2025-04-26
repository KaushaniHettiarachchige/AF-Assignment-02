import React from 'react';

function CountryCard({ country }) {
    return (
        <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <img src={country.flags.svg} alt={country.name.common} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">{country.name.common}</h3>
            <p className="text-gray-700"><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
            <p className="text-gray-700"><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p className="text-gray-700"><strong>Region:</strong> {country.region}</p>
            <p className="text-gray-700"><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : "N/A"}</p>
        </div>
    );
}

export default CountryCard;