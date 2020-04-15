import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const LivesInput = (props) => {

  const setLives = event => {
    props.setLives(event.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        props.onSubmit();
    };
  }

  const isEnabled = props.lives > 0 && props.lives <= 20;

  return(
    <div>
      <label htmlFor="lives" className="">Ingresa cantidad de intentos</label>
      <div className="input-group mb-3 input">
        <div className="input-group-prepend">
          <span className="input-group-text" id="hearth-addon1"><FontAwesomeIcon icon={faHeart} color="red">2</FontAwesomeIcon></span>
        </div>
        <input type="number" className="form-control" id="lives" value={props.lives} onChange={setLives} onKeyDown={isEnabled?handleKeyDown:null} min="1" max="20" aria-label="lives" aria-describedby="hearth-addon" />
        <input type="submit" disabled={!isEnabled} className="btn btn-primary" onClick={props.onSubmit} value="Comenzar" />
      </div>
    </div>
  );
}

export default LivesInput;