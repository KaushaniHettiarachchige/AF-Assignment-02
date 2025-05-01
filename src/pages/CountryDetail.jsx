import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountryByCode } from '../services/api';

const CountryDetail = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const data = await getCountryByCode(code);
        setCountry(data[0]);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch country details');
        setLoading(false);
      }
    };

    fetchCountry();
  }, [code]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 dark:text-gray-300 text-xl">Country not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 mb-8 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="w-full">
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold dark:text-white">{country.name.common}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="dark:text-gray-300">
                <span className="font-semibold">Native Name:</span>{' '}
                {Object.values(country.name.nativeName)[0]?.common || 'N/A'}
              </p>
              <p className="dark:text-gray-300">
                <span className="font-semibold">Population:</span>{' '}
                {country.population.toLocaleString()}
              </p>
              <p className="dark:text-gray-300">
                <span className="font-semibold">Region:</span> {country.region}
              </p>
              <p className="dark:text-gray-300">
                <span className="font-semibold">Sub Region:</span> {country.subregion || 'N/A'}
              </p>
              <p className="dark:text-gray-300">
                <span className="font-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="dark:text-gray-300">
                <span className="font-semibold">Top Level Domain:</span>{' '}
                {country.tld?.join(', ') || 'N/A'}
              </p>
              <p className="dark:text-gray-300">
                <span className="font-semibold">Currencies:</span>{' '}
                {Object.values(country.currencies || {})
                  .map((currency) => currency.name)
                  .join(', ') || 'N/A'}
              </p>
              <p className="dark:text-gray-300">
                <span className="font-semibold">Languages:</span>{' '}
                {Object.values(country.languages || {}).join(', ') || 'N/A'}
              </p>
            </div>
          </div>

          {country.borders && country.borders.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">Border Countries:</h2>
              <div className="flex flex-wrap gap-2">
                {country.borders.map((borderCode) => (
                  <Link
                    key={borderCode}
                    to={`/country/${borderCode}`}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {borderCode}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail; 