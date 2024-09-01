import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css'; // Ensure this path is correct

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            try {
                const searchResponse = await fetch(
                    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchQuery + " sports athlete")}&format=json&origin=*`
                );
                const searchData = await searchResponse.json();
                
                if (searchData.query.search.length > 0) {
                    const pageTitle = searchData.query.search[0].title;
                    navigate(`/search?query=${encodeURIComponent(pageTitle)}`);
                } else {
                    alert("No results found related to sports.");
                }
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header className="navbar">
            <div className="navbar-header">
                <h1>Champion</h1>
                <button className="navbar-hamburger" onClick={toggleMenu}>
                    &#9776;
                </button>
            </div>
            <div className={`navbar-controls ${isMenuOpen ? 'open' : ''}`}>
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-bar"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                </form>
                <button className="navbar-button" onClick={() => navigate("/")}>Home</button>
                <button className="navbar-button" onClick={() => navigate("/aboutus")}>About</button>
                <button className="navbar-button" onClick={() => navigate("/contact")}>Contact</button>
            </div>
        </header>
    );
}

export default Navbar;
