import React from 'react';

export default function heroCard ({ hero }) {
    return (
        <div className="hero-card">
            <div>
                <img src={hero.image.medium}></img>
            </div>
            <div>
                <h2>{hero.name}</h2>
                <div dangerouslySetInnerHTML={{ __html: hero.biography }}></div>
            </div>
        </div>
    )
};