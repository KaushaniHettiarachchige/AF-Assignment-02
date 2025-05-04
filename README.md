# TrackTheEarth🌍

This is a modern web application for explore each and every country around the world. This is built with React, TailwindCSS and the REST countries API.

# Features

1. Browse all countries around the world 🌍
2. Search country by name 🔍
3. Filter country by region 🌐
4. Filter country by language 🗨️
5. Dark Mode Toggle ☀️🌙
6. Responsive design 📱
7. Fast and efficient data loading ⚡

# Technology Stack

- React.js
- Tailwind CSS
- React Router
- REST Countries API

# Pre-requisites

- Node.js
- npm

# Installation

1. Make the project
- make the folder
- cd rest-countries-api

2. Install dependencies
- npm install

3. Start the development server
- npm start

Themn the application will be start at `http://loclahost:3000`

# API Integration

This application uses the REST Countries API (https://restcountries.com/) to fetch the details of country.

Endpoints are,
- `https://restcountries.com/v3.1/all` - Get all countries
- `https://restcountries.com/v3.1/name/:name` - Search country by name
- `https://restcountries.com/v3.1/region/:region` - Get country by region
- `https://restcountries.com/v3.1/language/:language` - Get country by language
- `https://restcountries.com/v3.1/alpha/:code` - Get country by code

# Project Structure

rest-countries-new
└──node_modules/
└──public/
└──src/
    └──components/
        └──ApiTest.jsx
        └──CountryCard.jsx
        └──CountryCard.test.js
        └──DarkModeToggle.jsx
        └──DarkModeToggle.test.js
        └──SearchBar.jsx
    └──pages/
        └──AllCountries.jsx
        └──CountriesByLanguagesPage.jsx
        └──CountriesByRegionPage.jsx
        └──CountryByCodePage.jsx
        └──CountryByNamePage.jsx
        └──CountryDetail.jsx
        └──Home.jsx
        └──Home.test.js
    └──services/
        └──api.js
        └──api.test.js
    └──App.css
    └──App.js
    └──App.test.js
    └──index.css
    └──index.js
    └──setupTests.js

# Available Scripts

- npm start - Run the web application in development mode
- npm test - Launches the test runner

# Usage

- Home page -> View all countries, dark mode, search and find specific country
- CountryDetail page -> View detailed information about a country and access country specific data
- Filtering options
    - search by country name
    - filter by region - /region/:region
    - filter by language - /language/:language
    - filter by code - /alpha/code

# Challenges faced and how they resolved

1. State Management 
Challenge -> Managing user session across components
Solution -> Implemented 'SessionContext' for centralized state management.

2. API Integration
Challenge -> Handling API errors
Solution -> Added loading states.

3. Dark Mode Implementation
Challenge -> Consistent dark mode across components
Solution -> Used css variables for theme colors

# Testing Tools

- React testing library
- Jest
- Async/await for handling asynchronous operations

# Testing files

1. CountryCard.test.js
2. DarkModeToggle.test.js
3. Home.test.js
4. App.test.js

# Run tests

- npm test

# Contribution of Git

- add files - git add .
- commit changes - git commit -m "Message"
- push to the repository - git push origin main

# Acknowledgements

- https://restcountries.com/ (REST Countries API) - for providing the details of countries
- https://create-react-app.dev/ (Create React App) - for the react project set up
- https://tailwindcss.com/ (Tailwind CSS) - for styling framework

# Contact

Github - Kaushani Hettiarachchige - https://github.com/KaushaniHettiarachchige

# URL of github repository

https://github.com/SE1020-IT2070-OOP-DSA-25/af-2-KaushaniHettiarachchige

# Hosting of application

- Link -> 