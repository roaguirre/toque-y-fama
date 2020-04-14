import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinStars, faSmileWink } from '@fortawesome/free-solid-svg-icons';

const Instructions = () =>{
    return (
      <div className="instructions">
        <h1>Toque y Fama</h1>
        <p className="lead">Debes adivinar una secuencia de 4 dígitos distintos, recibiendo información de la cantidad de toques y famas por intento.</p>
        <p><b><FontAwesomeIcon icon={faSmileWink} /> Toque:</b> Un dígito coincide con un dígito de la secuencia, pero sin calzar en su ubicación.</p> 
        <p><b><FontAwesomeIcon icon={faGrinStars} /> Fama:</b> Un dígito coincide con un dígito de la secuencia en su ubicación.</p>
      </div>
    );
}

export default Instructions;