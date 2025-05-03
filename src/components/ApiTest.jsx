import React, { useState, useEffect } from 'react';
import {
    getAllCountries,
    getCountryByName,
    getCountriesByRegion,
    getCountryBycode
} from '../services/api';

const ApiTest = () => {
    const [testResults, setTestResults] = useState({
        allCountries: null,
        countryByName: null,
        countriesByRegion: null,
        countryByCode: null
    });
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const testEndpoints = async () => {
            try {
                const allCountries = await getAllCountries();
                setTestResults(prev => ({ ...prev, allCountries: allCountries.length }));

                const countryByName = await getCountryByName('canada');
                setTestResults(prev => ({ ...prev, countryByName: countryByName[0]?.name?.common }));

                const countriesByRegion = await getCountriesByRegion('europe');
                setTestResults(prev => ({ ...prev, countriesByRegion: countriesByRegion.length }));

                const countryByCode = await getCountryByCode('usa');
                setTestResults(prev => ({ ...prev, countryByCode: countryByCode[0]?.name?.common }));

                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        testEndpoints();
    }, []);

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
          <h2 className="text-2xl font-bold mb-6 dark:text-white">API Endpoint Test Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">GET /all</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Total countries fetched: {testResults.allCountries}
              </p>
            </div>
    
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">GET /name/canada</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Country found: {testResults.countryByName}
              </p>
            </div>
    
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">GET /region/europe</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Countries in Europe: {testResults.countriesByRegion}
              </p>
            </div>
    
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">GET /alpha/usa</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Country found: {testResults.countryByCode}
              </p>
            </div>
          </div>
        </div>
      );
};

export default ApiTest;