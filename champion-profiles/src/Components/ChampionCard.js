import React from "react";

function ChampionCard({ imgSrc, altText, name, profileLink }) {
    return (
        <div className="photo-item">
            <img src={imgSrc} alt={altText} />
            <p>{name}</p>
            <a href={profileLink}><button className="more-button">More</button></a>
        </div>
    );
}

export default ChampionCard;
