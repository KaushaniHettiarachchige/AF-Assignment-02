import React, { useState } from 'react';
import { getCountryByCode } from '../api/countriesApi';

function CountryCard({ country }) {
    const [fullDetails, setFullDetails] = useState(null);

    const handleClick = async () => {
        try {
            const response = await getCountryByCode(country.cca3);
            setFullDetails(response.data[0]);
        } catch (error) {
            console.error('Error fetching full details:', error);
        }
    };

    return (
        <div
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={handleClick}
        >
            <img 
                src={country.flags.svg} 
                alt={country.name.common} 
                className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{country.name.common}</h3>
            <p className="text-gray-700 dark:text-gray-300"><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>Region:</strong> {country.region}</p>

            {fullDetails && (
                <div className="mt-4 border-t border-gray-300 dark:border-gray-600 pt-4">
                    <p className="text-gray-700 dark:text-gray-300"><strong>Subregion:</strong> {fullDetails.subregion}</p>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Area:</strong> {fullDetails.area} km²</p>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Timezones:</strong> {fullDetails.timezones.join(', ')}</p>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Languages:</strong> {fullDetails.languages ? Object.values(fullDetails.languages).join(', ') : "N/A"}</p>
                </div>
            )}
        </div>
    );
}

export default CountryCard;
