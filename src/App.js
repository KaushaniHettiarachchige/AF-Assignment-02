import React , { useState, useEffect } from 'react';
import CountryCard from './components/CountryCard';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (region ? country.region === region : true)
    );
  });
  
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
      <div className="flex justify-end mb-4">
        <button onClick={toggleDarkMode} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          {darkMode ? 'Light Mode 🌞' : 'Dark Mode 🌙'}
        </button>
      </div>
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Country Explorer 🌎</h1>
      <div className="max-w-5xl mx-auto mb-8">
        <SearchBar setSearch={setSearch} />
        <Filter steRegion={setRegion} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;