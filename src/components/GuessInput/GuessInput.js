import React from 'react';

class GuessInput extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            guess: ''
        };
    }
    
    setGuess = event => {
        this.setState({guess: event.target.value});
    }

    handleSubmit = () => {
        this.props.submitHandler(this.state.guess);
        this.setState({guess: ''});
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit();
        };
    }
    
    render() {
        const isEnabled = this.state.guess >= 0  && this.state.guess.length === 4 && this.state.guess;
        return (
            <div>
                <label htmlFor="number" className="">Ingresa un número de cuatro dígitos</label>
                <div className="input-group mb-3 input">
                    <input type="number" className="form-control" id="number" value={this.state.guess} placeholder="Número" onChange={this.setGuess} onKeyDown={isEnabled?this.handleKeyDown:null} min="0" max="9999" />
                    <input type="submit" disabled={!isEnabled} className="btn btn-primary" onClick={this.handleSubmit} value="Intentar" />
                </div>
            </div>
        );
    }
}

export default GuessInput;