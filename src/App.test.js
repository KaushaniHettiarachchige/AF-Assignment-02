import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

jest.mock('./pages/Home', () => () => <div data-testid="home-page">Home Page</div>);
jest.mock('./pages/CountryDetail', () => () => <div data-testid="country-detail">Country Detail</div>);
jest.mock('./components/DarkModeToggle', () => () => <button data-testid="dark-mode-toggle">Toggle</button>);

describe('App Component', () => {
  const renderApp = () => {
    return render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  };

  test('renders header with title and dark mode toggle', () => {
    renderApp();

    const title = screen.getByText('TrackTheEarth🌍...');
    expect(title).toBeInTheDocument();

    const darkModeToggle = screen.getByTestId('dark-mode-toggle');
    expect(darkModeToggle).toBeInTheDocument();
  });


  test('renders footer eith copyright information', () => {
    renderApp();

    const copyrightText = screen.getByText(/© 2025 TrackTheEarth/i);
    expect(copyrightText).toBeInTheDocument();

    const creatorText = screen.getByText(/Created By Kaushani Hettiarachchige/i);
    expect(creatorText).toBeInTheDocument();
  });

  test('renders main content area', () => {
    renderApp();

    const mainContent = screen.getByTestId('home-page');
      expect(mainContent).toBeInTheDocument();
  });
});