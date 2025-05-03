import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryByCode } from '../services/api';

const CountryByCodePage = () => {
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
                setError('No country found with that code');
                setLoading(false);
            }
        };
        fetchCountry();
    }, [code]);

    if (loading) return 
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>;
    if (error) return
        <div className="flex justify-center items-center min-h-screen">
            <p className="text-red-500 text-xl">{error}</p>
        </div>;
    if (!country) return null;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Country Details for {code.toUpperCase()}</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">{country.name.common}</h3>
                <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-32 h-20 object-cover mb-4" />
                <p className="text-gray-600 dark:text-gray-300"><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p className="text-gray-600 dark:text-gray-300"><strong>Region:</strong> {country.region}</p>
                <p className="text-gray-600 dark:text-gray-300"><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
                <p className="text-gray-600 dark:text-gray-300"><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
            </div>
        </div>
    );
};

export default CountryByCodePage;