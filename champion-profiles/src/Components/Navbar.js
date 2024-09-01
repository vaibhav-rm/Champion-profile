import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Make sure to import your CSS file

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                <Link to="/">
                    <button className="navbar-button">Home</button>
                </Link>
                <Link to="/aboutus">
                    <button className="navbar-button">About</button>
                </Link>
                <Link to="/contact">
                    <button className="navbar-button">Contact</button>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;
