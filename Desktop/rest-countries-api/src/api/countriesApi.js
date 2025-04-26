import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1/';

export const getAllCountries = async () => {
  try {
    const response = await axios.get(`${baseURL}all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries', error);
    return [];
  }
};

export const getCountryByName = async (name) => {
  try {
    const response = await axios.get(`${baseURL}name/${name}`);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching country by name', error);
    return null;
  }
};

export const getCountriesByRegion = async (region) => {
  try {
    const response = await axios.get(`${baseURL}region/${region}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries by region', error);
    return [];
  }
};
