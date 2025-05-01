import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CountryCard from './CountryCard';

const mockCountry = {
  cca3: 'USA',
  name: {
    common: 'United States'
  },
  flags: {
    png: 'https://flagcdn.com/w320/us.png'
  },
  population: 329484123,
  region: 'Americas',
  capital: ['Washington, D.C.']
};

describe('CountryCard', () => {
  it('renders country information correctly', () => {
    render(
      <BrowserRouter>
        <CountryCard country={mockCountry} />
      </BrowserRouter>
    );

    // Check if the country name is rendered
    expect(screen.getByText('United States')).toBeInTheDocument();

    // Check if the population is rendered with correct formatting
    expect(screen.getByText(/329,484,123/)).toBeInTheDocument();

    // Check if the region is rendered
    expect(screen.getByText('Americas')).toBeInTheDocument();

    // Check if the capital is rendered
    expect(screen.getByText('Washington, D.C.')).toBeInTheDocument();

    // Check if the flag image is rendered with correct alt text
    const flagImage = screen.getByAltText('United States flag');
    expect(flagImage).toBeInTheDocument();
    expect(flagImage).toHaveAttribute('src', 'https://flagcdn.com/w320/us.png');
  });

  it('links to the correct country detail page', () => {
    render(
      <BrowserRouter>
        <CountryCard country={mockCountry} />
      </BrowserRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/country/USA');
  });
}); 