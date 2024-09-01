// src/pages/AddAthlete.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddAthlete() {
    const [athleteName, setAthleteName] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setAthleteName(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (athleteName.trim() === '') {
            setError('Please enter an athlete name.');
            return;
        }

        try {
            const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(athleteName + ' sports athlete')}&format=json&origin=*`);
            const data = await response.json();
            if (data.query.search.length > 0) {
                const pageTitle = data.query.search[0].title;
                // Navigate to the home page and include the athlete's name in the state
                navigate('/', { state: { newAthlete: pageTitle } });
            } else {
                setError('No results found.');
            }
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Failed to fetch data.');
        }
    };

    return (
        <div>
            <h1>Add New Athlete</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter athlete name"
                    value={athleteName}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Athlete</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default AddAthlete;
