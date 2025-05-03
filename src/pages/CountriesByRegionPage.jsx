import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountriesByRegion } from '../services/api';
import CountryCard from '../components/CountryCard';

const CountriesByRegionPage = () => {
    const { region } = useParams();
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                cosnt data = await getCountriesByRegion(region);
                setCountry(data);
                setLoading(false);
            } catch (err) {
                setError('No countries found in that region');
                setLoading(false);
            }
        };
        fetchCountries();
    }, [region]);

    if (loading) return 
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>;
    if (error) return
        <div className="flex justify-center items-center min-h-screen">
            <p className="text-red-500 text-xl">{error}</p>
        </div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Countries in {region}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {countries.map((country) => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </div>
    );
};

export default countriesByRegionPage;