import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinStars, faSmileWink } from '@fortawesome/free-solid-svg-icons';

const Instructions = (props) => {
  if (props.stage==='pregame') {
    return (
      <div className="instructions">
        <h1>Instrucciones</h1>
        <p className="lead">En este juego debes descubrir una secuencia aleatoria de 4 dígitos distintos.</p>
        <p><b><FontAwesomeIcon icon={faSmileWink} /> Toque:</b> Uno de tus dígitos pertenece a la secuencia, pero su ubicación es incorrecta.</p> 
        <p><b><FontAwesomeIcon icon={faGrinStars} /> Fama:</b> Uno de tus dígitos coincide con un dígito de la secuencia, en la ubicación correcta.</p>
      </div>
    );
  } else if (props.stage==='playing'){
    return (
      <div className="instructions">
        <h1>Instrucciones</h1>
        <p className="lead">En este juego debes descubrir una secuencia aleatoria de 4 dígitos distintos.</p>
        <p><b><FontAwesomeIcon icon={faSmileWink} /> Toque:</b> Uno de tus dígitos pertenece a la secuencia, pero su ubicación es incorrecta.</p> 
        <p><b><FontAwesomeIcon icon={faGrinStars} /> Fama:</b> Uno de tus dígitos coincide con un dígito de la secuencia, en la ubicación correcta.</p>
    </div>
    );
  }
}

export default Instructions;