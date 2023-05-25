import React, {useState, useEffect} from 'react';
import { HeroImage } from '../';
import { Link } from 'react-router-dom';

export default function HeroGallery() {
    const [heroes, setHeros] = useState([]);

    useEffect(() => {

        async function displayHeros() {
            const response = await fetch ("https://pokeapi.co/api/v2/pokemon");
            const data = await response.json();
            setHeros(data);
            console.log(data);
        }

        displayHeros();
    }, []);


    return (
        <div className='shows'>
        {heroes.map(hero => <Link to={`${hero.id}`} key={hero.id}><HeroImage data={hero} /></Link>)}
      </div>
    )
}
