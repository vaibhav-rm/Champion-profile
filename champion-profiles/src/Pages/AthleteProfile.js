import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AthleteProfile.css';
        
const AthleteProfile = () => {
    const { name } = useParams();
    const [athleteData, setAthleteData] = useState({
        title: 'N/A',
        description: 'N/A',
        imageFullUrl: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`)}`);
                const data = JSON.parse(response.data.contents);

               
                setAthleteData({
                    title: data.title || 'N/A',
                    description: data.extract || 'N/A',
                    imageFullUrl: data.originalimage ? data.originalimage.source : '',
                });

            } catch (error) {
                console.error('Error fetching Wikipedia data:', error);
            }
        };

        fetchData();
    }, [name]);

    return (
        <div className="athlete-profile">
            <h1>{athleteData.title}</h1>
            {athleteData.imageFullUrl && <img src={athleteData.imageFullUrl} alt={athleteData.title} />}
            <p>{athleteData.description}</p>
        </div>
    );
};

export default AthleteProfile;
