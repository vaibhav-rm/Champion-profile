import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AthleteProfile = () => {
    const { name } = useParams();
    const [athleteData, setAthleteData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAthleteData = async () => {
            setLoading(true);
            try {
                // Fetch data from Wikipedia API
                const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`);
                const data = await response.json();
                setAthleteData(data);
            } catch (error) {
                console.error('Error fetching athlete data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAthleteData();
    }, [name]);

    if (loading) return <p>Loading athlete data...</p>;
    if (!athleteData) return <p>No data found.</p>;

    return (
        <div>
            <header>
                <h1>{athleteData.title}</h1>
            </header>
            <main>
                <section id="bio">
                    <h2>Biography</h2>
                    <p>{athleteData.extract}</p>
                </section>
                <section id="gallery">
                    <h2>Gallery</h2>
                    <div className="photo-gallery">
                        {athleteData.thumbnail && (
                            <img src={athleteData.thumbnail.source} alt={athleteData.title} />
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AthleteProfile;
