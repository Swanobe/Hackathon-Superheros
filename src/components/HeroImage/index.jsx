import React from 'react';  

export default function HeroImage({ data }) {
    return (
        <div className='hero-image'>
            <img src={data.image.medium} alt={data.name} />
        </div>
    )
};
