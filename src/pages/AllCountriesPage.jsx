import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../services/api';
import CountryCard from '../components/CountryCard';

const AllCountriesPage = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAllCountries();
        setCountries(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch countries');
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

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
      <h2 className="text-2xl font-bold mb-6 dark:text-white">All Countries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default AllCountriesPage; 