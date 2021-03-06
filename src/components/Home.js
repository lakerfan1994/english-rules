import React from 'react';
import {Link} from 'react-router-dom';
import GameCartridge from './GameCartridge';
import './Home.css';

export function Home(props) {

    const gameCartridges = [];

    for (let i = 0; i < props.games.length; i++) {
        let link = "/" + props.games[i].split(' ').join('').toLowerCase();
        gameCartridges.push(
            <li key={i}>
                <Link to={link}><GameCartridge title={props.games[i]} /></Link>
            </li>
        )
    }

    return (
        <div className='home__wrapper'>
            <div className="home__library">
                <ul>
                    {gameCartridges}
                </ul>
            </div>
        </div>
    )

}