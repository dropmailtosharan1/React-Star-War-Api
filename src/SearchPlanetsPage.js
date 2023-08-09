import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios

function SearchPlanetsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/planets/?search=${searchTerm}`
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.error("An error occurred while searching for planets", error);
        // Handle the error
      }
    };
    if (searchTerm) {
      fetchPlanets();
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Search Planets</h1>
      <input
        type="text"
        placeholder="Search planets"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="planet-list">
        {searchResults.map((planet) => (
          <div key={planet.name}>
            <span>{planet.name}</span>
            <span className="population-icon">{planet.population}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPlanetsPage;
