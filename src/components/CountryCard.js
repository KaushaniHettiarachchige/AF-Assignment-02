import React from 'react';

function CountryCard({ country }) {
    return (
        <div className="border border-gray-300 p-4 rounded-lg shadow-md">
            <img src={country.flags.svg} alt={country.name.common} className="w-full h-32 object-cover mb-4" />
            <h3 classSName="text-xl font-bold">{country.name.common}</h3>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Population:</strong> {country.population}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
        </div>
    );
}

export default CountryCard;