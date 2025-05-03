import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import ApiTest from './components/ApiTest';
import AllCountriesPage from './pages/AllCountriesPage';
import CountriesByRegionPage from './pages/CountriesByRegionPage';
import CountryByCodePage from './pages/CountryByCodePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold dark:text-white">TrackTheEarth🌍...</h1>
          </div>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:code" element={<CountryDetail />} />
            <Route path="/api-test" element={<ApiTest />} />
            <Route path="/all" element={<AllCountriesPage />} />
            <Route path="/region/:region" element={<CountriesByRegionPage />} />
            <Route path="/alpha/:code" element={<CountryByCodePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
