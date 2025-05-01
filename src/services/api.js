// import axios from 'axios';

// const baseURL = 'https://restcountries.com/v3.1/';

// export const getAllCountries = () => axios.get(`${baseURL}/all`);
// export const searchCountryByName = (name) => axios.get(`${baseURL}/name/${name}`);
// export const getCountriesByRegion = (region) => axios.get(`${baseURL}/region/${region}`);
// export const getCountryByCode = (code) => axios.get(`${baseURL}/alpha/${code}`);

import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';

export const fetchAllCountries = async () => {
  const res =  await fetch(`${BASE_URL}/all`);
  return res.json();
};

export const fetchByName = async (name) => {
  const res = await fetch(`${BASE_URL}/name/${name}`);
  return res.json();
};

export const fetchByRegion = async (region) => {
  const res = await fetch(`${BASE_URL}/region/${region}`);
  return res.json();
};

export const fetchByAlphaCode = async (code) => {
  const res = await fetch(`${BASE_URL}/alpha/${code}`);
  return res.json();
};