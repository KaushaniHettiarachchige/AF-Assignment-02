/* import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import RegionFilter from './components/Filter';
import CountryCard from './components/CountryCard';
import DarkModeToggle from './components/DarkModeToggle';
import { getAllCountries, getCountryByName, getCountriesByRegion, getCountryByCode } from './services/api';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [code, setCode] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  //Fetch all countries
  const fetchCountries = async () => {
    try {
      setLoading(true);
      setError('');
      //const response = await getAllCountries();
      //setCountries(response.data);
    } catch (error) {
      setError('Failed to fetch countries');
    } finally {
      setLoading(false);
    }
  };

  //Search country by name
  const handleSearch = async (name) => {
    try {
      setLoading(true);
      setError('');
      const response = await getCountryByName(name);
      setCountries(response.data);
    } catch (error) {
      setError('No country found');
    } finally {
      setLoading(false);
    }
  };

  //Filter countries by region
  const handleRegion = async (region) => {
    try {
      setLoading(true);
      setError('');
      const response = await getCountriesByRegion(region);
      setCountries(response.data);
    } catch (error) {
      setError('No countries found in this region');
    } finally {
      setLoading(false);
    }
  };

  //Filter countries by code
  const handleCountryCode = async (code) => {
    try {
      setLoading(true);
      setError('');
      const response = await getCountryByCode(code);
      setCountries(response ? [response] : []);
    } catch (error) {
      setError('No country found with this code');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      handleSearch(search);
    } else if (region) {
      handleRegion(region);
    } else if (code){
      handleCountryCode(code);
    } else {
      fetchCountries();
    }
  }, [search, region, code]);

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen p-4`}>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
        <SearchBar search={search}  setSearch={setSearch} />
        <RegionFilter region={region} setRegion={setRegion} />
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Country Explorer 🌍
      </h1>

      {loading && <p className="text-center text-lg text-gray-700 dark:text-gray-300">Loading countries...</p>}
      {error && <p className="text-center text-lg text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries
        .filter((country) => country && country.flags && country.name && country.cca3)
        .map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
