import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./SearchPage.css"; // Import the CSS file for styling

function SearchPage() {
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");

    useEffect(() => {
        if (query) {
            const fetchResults = async () => {
                try {
                    const response = await fetch(
                        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
                    );
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    const data = await response.json();
                    setResults(data);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchResults();
        }
    }, [query]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div>
                        <Navbar />
        <div className="search-container">
            <header className="search-header">
                <h1>Search Results</h1>
            </header>
            <main>
                {results ? (
                    <div className="search-results">
                        <h2>{results.title}</h2>
                        <img src={results.thumbnail?.source} alt={results.title} />
                        <p>{results.extract}</p>
                        <a href={results.content_urls?.desktop?.page} target="_blank" rel="noopener noreferrer">
                            Read more on Wikipedia
                        </a>
                    </div>
                ) : (
                    <p>No results found for "{query}"</p>
                )}
            </main>

        </div>
        <footer className="search-footer">
                <p>&copy; 2024 Favorite Sports Person</p>
            </footer>
        </div>
    );
}

export default SearchPage;
