import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1/';

export const getAllCountries = () => axios.get(`${baseURL}/all`);
export const serachCountryByName = (name) => axios.get(`${baseURL}/name/${name}`);
export const getCountriesByRegion = (region) => axios.get(`${baseURL}/region/${region}`);
export const getCountryByCode = (code) => axios.get(`${baseURL}/alpha/${code}`);