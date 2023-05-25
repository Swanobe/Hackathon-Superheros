import React, {useState, useEffect} from 'react';
import { HeroImage } from '../';
import { Link } from 'react-router-dom';

export default function HeroGallery() {
    const [heros, setHeros] = useState([]);

    useEffect(() => {

        async function displayHeros() {
            const response = await fetch ();
            const data = await response.json();
            setHeros(data);
            console.log(data);
        }

        displayHeros();
    }, []);


    return (
        <section>
            <h2>Hero Gallery</h2>
            <ul>
                {heros.map(hero => (
                    <li key={hero.id}>
                        <Link to={`/profiles/${hero.id}`}>
                            <HeroImage hero={hero} />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}
