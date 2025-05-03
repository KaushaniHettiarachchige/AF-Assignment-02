import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import ApiTest from './components/ApiTest';
import AllCountriesPage from './pages/AllCountriesPage';
import CountryByNamePage from './pages/CountryByNamePage';
import CountriesByRegionPage from './pages/CountriesByRegionPage';
import CountryByCodePage from './pages/CountryByCodePage';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-blue-600 dark:bg-blue-900 shadow-md">
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold dark:text-white">TrackTheEarth🌍...</h1>
            <DarkModeToggle />
          </div>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:code" element={<CountryDetail />} />
            <Route path="/api-test" element={<ApiTest />} />
            <Route path="/all" element={<AllCountriesPage />} />
            <Route path="/name/:name" element={<CountryByNamePage />} />
            <Route path="/region/:region" element={<CountriesByRegionPage />} />
            <Route path="/alpha/:code" element={<CountryByCodePage />} />
          </Routes>
        </main>
        <footer className="bg-blue-600 dark:bg-blue-900 text-white dark:text-gray-200 py-4 mt-8 shadow-inner">
          <div className="container mx-auto px-4 text-center">
            © 2025 TrackTheEarth🌍 All rights reserved.<br />
            Created by Kaushani Hettiarachchige
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
