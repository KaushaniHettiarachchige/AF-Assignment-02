import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="h-48 w-full overflow-hidden">
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 dark:text-white">{country.name.common}</h2>
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Languages:</span> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard; 