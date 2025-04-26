import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import CountryCard from './components/CountryCard';
import { getAllCountries, searchCountryByName, getCountriesByRegion } from './api/countriesApi';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  useEffect(() => {
    if (search) {
      fetchCountryByName(search);
    } else if (region) {
      fetchCountriesByRegion(region);
    } else {
      fetchAllCountries();
    }
  }, [search, region]);

  const fetchAllCountries = async () => {
    try {
      const response = await getAllCountries();
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching all countries:', error);
    }
  };

  const fetchCountryByName = async (name) => {
    try {
      const response = await searchCountryByName(name);
      setCountries(response.data);
    } catch (error) {
      console.error('Error searching country:', error);
    }
  };

  const fetchCountriesByRegion = async (region) => {
    try {
      const response = await getCountriesByRegion(region);
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries by region:', error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-all">
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleDarkMode}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {darkMode ? 'Light Mode 🌞' : 'Dark Mode 🌙'}
        </button>
      </div>

      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Country Explorer 🌍
      </h1>

      <div className="max-w-5xl mx-auto mb-8">
        <SearchBar setSearch={setSearch} />
        <Filter setRegion={setRegion} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
