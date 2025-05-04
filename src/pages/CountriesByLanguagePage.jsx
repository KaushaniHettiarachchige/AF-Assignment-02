import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountryCard from '../components/CountryCard';
import { getAllCountries } from '../services/api';

const CountriesByLanguagePage = () => {
    const { language } = useParams();
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setLoading(true);
                const data = await getAllCountries();
                const filteredCountries = data.filter(country => 
                    country.languages &&
                    Object.values(country.languages).some(lang => 
                        lang.toLowerCase().includes(language.toLowerCase())
                    )
                );
                setCountries(filteredCountries);
                setError(null);
            } catch (err) {
                setError('Failed to fetch countries');
                console.error('Error fetching countries:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, [language]);

    if (loading) return <div className="text-center py-8">Loading...</div>;
    if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
    if (countries.length === 0) return <div className="text-center py-8">No countries found with language: {language}</div>

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">
                Countries where {language} is spoken
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {countries.map(country => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </div>
    );
};

export default CountriesByLanguagePage;