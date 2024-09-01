import React from "react";
import { Link } from "react-router-dom";

function ChampionCard({ imgSrc, altText, name }) {
    return (
        <div className="photo-item">
            <img src={imgSrc} alt={altText} />
            <p>{name}</p>
            <Link to={`/athlete-profile/${name}`}><button className="more-button">More</button></Link>
        </div>
    );
}

export default ChampionCard;
