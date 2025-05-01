import { useEffect, useState } from "react";
import { fetchAllCountries, fetchByName, fetchByRegion } from "../services/api";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

const Home  = () => {
    const [countries, setCountries] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        fetchAllCountries().then((data) => {
            if (Array.isArray(data)) {
                setCountries(data);
                setFiltered(data);
            }
        });
    }, []);

    const handleSearch = (query) => {
        if (query === "") {
            setFiltered(countries);
        } else {
            fetchByName(query)
            .then((data) => {
                setFiltered(Array.isArray(data) ? data : []);
            })
            .catch (() => setFiltered([]));
        }
    };

    const handleFilter = (region) => {
        if (region === "") {
            setFiltered(countries);
        } else {
            fetchByRegion(region)
            .then((data) => {
                setFiltered(Array.isArray(data) ? data : []);
            })
            .catch(() => setFiltered([]));
        }
    };

    return (
        <div className="p-4">
            <div className="flex gap-4 mb-4">
                <SearchBar onSearch={handleSearch} />
                <Filter onRegionChange={handleFilter} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(filtered.length ? filtered : countries).map((country) => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </div>
    );
};

export default Home;