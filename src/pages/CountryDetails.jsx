import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchByAlphaCode } from '../services/api';

const CountryDetails = () => {
    const { code } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        fetchByAlphaCode(code).then((data) => setCountry(data[0]));
    }, [code]);

    if (!country) return <div className="p-4">Loading...</div>;

    return (
        <div className="p-4">
            <img src={country.flags.svg} alt={country.name.common} className="w-60 h-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">{country.name.common}</h1>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
        </div>
    );
};

export default CountryDetails;