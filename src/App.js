import React , { useState, useEffect } from 'react';
import { getAllCountries, getCountryByName, getCountriesByRegion } from './api/countriesApi';
import CountryCard from './components/CountryCard';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries();
      setCountries(data);
      setFilteredCountries(data);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (region) {
      const fetchRegion = async () => {
        const data = await getCountriesByRegion(region);
        setFilteredCountries(data);
      };
      fetchRegion();
    } else {
      setFilteredCountries(countries);
    }
  }, [region, countries]);

  useEffect(() => {
    if (search) {
      const fetchSearch = async () => {
        const data = await getCountryByName(search);
        setFilteredCountries(data ? [data] : []);
    };
    fetchSearch();
    } else {
      setFilteredCountries(countries);
    }
  }, [search, countries]);
  
  return (
    <div className="container mx-auto p-4">
      <SearchBar setSearch={setSearch} />
      <Filter steRegion={setRegion} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;