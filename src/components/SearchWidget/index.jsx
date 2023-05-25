import React, { useState, useEffect } from 'react';
import { SearchForm, ProfileList } from '../';

export default function SearchWidget () {

    // const [ratingOrder, setRatingOrder] = useState(false);
    // const [englishOnly, setEnglishOnly] = useState(false);

    const [heroData, setHeroData] = useState([]);
    const [searchString, setSearchString] = useState("ditto");

    useEffect(() => {

        async function searchAPI() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchString}`);

            const rawData = await response.json();
            console.log(rawData);
            const data = rawData.map(s => s.hero);
            setHeroData(data);
        }

        searchAPI();

    }, [searchString]);

    function handleSearch(userInput){
        setSearchString(userInput);
    }

    return <>
        <SearchForm handleSearch={handleSearch} lastSearch={searchString}/>
        {<ProfileList heroData={heroData} /> }
    </>
};