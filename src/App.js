import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import ApiTest from './components/ApiTest';
import AllCountriesPage from './pages/AllCountriesPage';
import CountryByNamePage from './pages/CountryByNamePage';
import CountriesByRegionPage from './pages/CountriesByRegionPage';
import CountryByCodePage from './pages/CountryByCodePage';
import CountriesByLanguagePage from './pages/CountriesByLanguagePage';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import DarkModeToggle from './components/DarkModeToggle';
import { SessionProvider, useSession } from './context/SessionContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSession();
  
  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

function AppContent() {
  const { isAuthenticated } = useSession();

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-blue-600 dark:bg-blue-900 shadow-md">
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold dark:text-white">TrackTheEarth🌍...</h1>
            <div className="flex items-center space-x-4">
              {isAuthenticated && <UserProfile />}
              <div className="ml-4">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/country/:code" element={
              <ProtectedRoute>
                <CountryDetail />
              </ProtectedRoute>
            } />
            <Route path="/api-test" element={
              <ProtectedRoute>
                <ApiTest />
              </ProtectedRoute>
            } />
            <Route path="/all" element={
              <ProtectedRoute>
                <AllCountriesPage />
              </ProtectedRoute>
            } />
            <Route path="/name/:name" element={
              <ProtectedRoute>
                <CountryByNamePage />
              </ProtectedRoute>
            } />
            <Route path="/region/:region" element={
              <ProtectedRoute>
                <CountriesByRegionPage />
              </ProtectedRoute>
            } />
            <Route path="/language/:language" element={
              <ProtectedRoute>
                <CountriesByLanguagePage />
              </ProtectedRoute>
            } />
            <Route path="/alpha/:code" element={
              <ProtectedRoute>
                <CountryByCodePage />
              </ProtectedRoute>
            } />
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

function App() {
  return (
    <SessionProvider>
      <AppContent />
    </SessionProvider>
  );
}

export default App;
