import axios from 'axios';
import {
  getAllCountries,
  getCountryByName,
  getCountriesByRegion,
  getCountryByCode
} from './api';

// Mock axios
jest.mock('axios');

describe('API Service', () => {
  const mockCountries = [
    {
      name: { common: 'United States' },
      population: 329484123,
      region: 'Americas',
      capital: ['Washington, D.C.'],
      flags: { png: 'https://flagcdn.com/w320/us.png' }
    }
  ];

  beforeEach(() => {
    axios.get.mockClear();
  });

  describe('getAllCountries', () => {
    it('fetches all countries successfully', async () => {
      axios.get.mockResolvedValueOnce({ data: mockCountries });

      const result = await getAllCountries();

      expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v3.1/all');
      expect(result).toEqual(mockCountries);
    });

    it('handles errors when fetching all countries', async () => {
      const error = new Error('Network error');
      axios.get.mockRejectedValueOnce(error);

      await expect(getAllCountries()).rejects.toThrow('Network error');
    });
  });

  describe('getCountryByName', () => {
    it('fetches country by name successfully', async () => {
      axios.get.mockResolvedValueOnce({ data: mockCountries });

      const result = await getCountryByName('united');

      expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v3.1/name/united');
      expect(result).toEqual(mockCountries);
    });

    it('handles errors when fetching country by name', async () => {
      const error = new Error('Country not found');
      axios.get.mockRejectedValueOnce(error);

      await expect(getCountryByName('nonexistent')).rejects.toThrow('Country not found');
    });
  });

  describe('getCountriesByRegion', () => {
    it('fetches countries by region successfully', async () => {
      axios.get.mockResolvedValueOnce({ data: mockCountries });

      const result = await getCountriesByRegion('americas');

      expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v3.1/region/americas');
      expect(result).toEqual(mockCountries);
    });

    it('handles errors when fetching countries by region', async () => {
      const error = new Error('Region not found');
      axios.get.mockRejectedValueOnce(error);

      await expect(getCountriesByRegion('nonexistent')).rejects.toThrow('Region not found');
    });
  });

  describe('getCountryByCode', () => {
    it('fetches country by code successfully', async () => {
      axios.get.mockResolvedValueOnce({ data: mockCountries });

      const result = await getCountryByCode('usa');

      expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v3.1/alpha/usa');
      expect(result).toEqual(mockCountries);
    });

    it('handles errors when fetching country by code', async () => {
      const error = new Error('Country code not found');
      axios.get.mockRejectedValueOnce(error);

      await expect(getCountryByCode('xxx')).rejects.toThrow('Country code not found');
    });
  });
}); 