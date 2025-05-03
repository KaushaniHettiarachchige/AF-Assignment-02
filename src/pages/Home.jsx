import React, { useState, useEffect } from 'react';
import { getAllCountries, getCountryByName, getCountriesByRegion } from '../services/api';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAllCountries();
        setCountries(data);
        setFilteredCountries(data);
        
        const uniqueRegions = [...new Set(data.map(country => country.region))];
        setRegions(uniqueRegions);

        const langSet = new Set();
        data.forEach(country => {
          if (country.languages) {
            Object.values(country.languages).forEach(lang => langSet.add(lang));
          }
        });
        setLanguages([...langSet].sort());
        
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch countries');
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = async (searchTerm) => {
    if (!searchTerm) {
      setFilteredCountries(countries);
      return;
    }

    try {
      const data = await getCountryByName(searchTerm);
      setFilteredCountries(data);
    } catch (err) {
      setFilteredCountries([]);
    }
  };

  const handleFilterRegion = async (region) => {
    if (!region) {
      setFilteredCountries(countries);
      return;
    }

    try {
      const data = await getCountriesByRegion(region);
      setFilteredCountries(data);
    } catch (err) {
      setFilteredCountries([]);
    }
  };

  const handleFilterLanguage = (language) => {
    if (!language) {
      setFilteredCountries(countries);
      return;
    }
    const filtered = countries.filter(country =>
      country.languages && Object.values(country.languages).includes(language)
    );
    setFilteredCountries(filtered);
  };

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

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar 
        onSearch={handleSearch} 
        onFilterRegion={handleFilterRegion}
        onFilterLanguage={handleFilterLanguage}
        regions={regions}
        languages={languages}
        />
      
      {filteredCountries.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300 text-xl">
          No countries found matching your criteria
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home; 