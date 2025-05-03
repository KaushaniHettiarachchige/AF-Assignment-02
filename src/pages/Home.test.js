import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
  const renderHome = () => {
    return render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  };

  test('renders search input', () => {
    renderHome();
    const searchInput = screen.getByPlaceholderText(/search for a country/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('renders region filter dropdown', () => {
    renderHome();
    const regionFilter = screen.getByRole('combobox');
    expect(regionFilter).toBeInTheDocument();
  });

  test('updates search input value', () => {
    renderHome();
    const searchInput = screen.getByPlaceholderText(/search for a country/i);
    fireEvent.change(searchInput, { target: { value: 'Canada' } });
    expect(searchInput.value).toBe('Canada');
  });

  test('updates region filter value', () => {
    renderHome();
    const regionFilter = screen.getByRole('combobox');
    fireEvent.change(regionFilter, { target: { value: 'Americas' } });
    expect(regionFilter.value).toBe('Americas');
  });
}); 