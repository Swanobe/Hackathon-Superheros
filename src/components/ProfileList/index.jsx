import React from 'react';
// import { heroCard } from '../';

export default function HeroList ({ heroData }) {

    function renderHeroes() {
        return heroData
            .filter(s => s.name && s.image ? true : false)
            .map(s => <heroCard key={s.id} show={s} />)
    }

    return <div className="hero-list">
        { renderHeroes() }
    </div>
 
};