import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class RemainingLives extends React.Component {
    render() {
    return <h1>{<FontAwesomeIcon icon={faHeart} color="red" />} {this.props.lives}</h1>;
    }
}

export default RemainingLives;