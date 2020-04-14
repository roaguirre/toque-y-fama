import React from 'react';
import './Guesses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinStars, faSmileWink } from '@fortawesome/free-solid-svg-icons';

const Guesses = (props) => {
    return (
        <div className={(props.history.length === 0) ? 'history mt-5 hidden' : 'history mt-5'}>
            <h2>Intentos</h2>
            <ul className="list-group">
                {
                props.history.map((guess, index) => 
                <li className="list-group-item guess" key={index}>
                    <div className="row">
                        <div className="col">#{props.history.length-index}</div>
                        <div className="col"><b>{guess}</b></div>
                        <div className="col"><FontAwesomeIcon icon={faSmileWink} /> {props.toques(guess)}</div>
                        <div className="col"><FontAwesomeIcon icon={faGrinStars} /> {props.famas(guess)}</div>
                    </div>
                </li>)
                }
            </ul>
        </div>
    );
}

export default Guesses;