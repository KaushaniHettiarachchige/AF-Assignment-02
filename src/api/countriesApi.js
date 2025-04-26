import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1/';

export const getAllCountries = () => axios.get(`${BASE_URL}/all`);
export const serachCountryByName = (name) => axios.get(`${BASE_URL}/name/${name}`);
export const getCountriesByRegion = (region) => axios.get(`${BASE_URL}/region/${region}`);
export const getCountryByCode = (code) => axios.get(`${BASE_URL}/alpha/${code}`);