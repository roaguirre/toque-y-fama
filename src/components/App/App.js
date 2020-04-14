import React from 'react';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Instructions from '../Instructions/Instructions';
import Guesses from '../Guesses/Guesses';
import Lives from '../Lives/Lives';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      stage: 'pregame',
      lives: '8',
      secret: '',
      guess: '',
      GuessHistory: []
    }

    this.setLives = this.setLives.bind(this);
    this.startGame = this.startGame.bind(this);
    this.guessHandler = this.guessHandler.bind(this);

    this.generateSecret = this.generateSecret.bind(this);
    this.famas = this.famas.bind(this);
    this.toques = this.toques.bind(this);

    this.renderMain = this.renderMain.bind(this);
    this.renderPregame = this.renderPregame.bind(this);
    this.renderGame = this.renderGame.bind(this);
    this.renderLost = this.renderLost.bind(this);
    this.renderWon = this.renderWon.bind(this);
  }

  setLives = event => {
    this.setState({lives: event.target.value});
  }

  startGame = event => {
    this.setState ({stage: 'playing', secret: this.generateSecret()});
  }

  generateSecret() {
    const w = Math.floor(Math.random()*10);

    let x = Math.floor(Math.random()*10);
    while (w===x){
      x = Math.floor(Math.random()*10);
    }

    let y = Math.floor(Math.random()*10);
    while (y===x || y===w){
      y = Math.floor(Math.random()*10);
    }
    
    let z = Math.floor(Math.random()*10);
    while (z===y || z===x || z===w){
      z = Math.floor(Math.random()*10);
    }

    return Number(""+w+x+y+z)
  }

  setGuess = event => {
    this.setState({guess: event.target.value});
  }

  guessHandler = () => {
    let history = this.state.GuessHistory;
    history.unshift(this.state.guess);
    this.setState({GuessHistory: history});

    if (this.famas(this.state.guess)!==4) {
      if (this.state.lives<=1){
        this.setState({stage: 'lost'})
      }
      this.setState({lives: this.state.lives-1})
    }

    if (this.famas(this.state.guess)===4) {
      this.setState({stage: 'won'})
    }
  }

  famas(number) {
    let famas = 0;
    const secretString = String(this.state.secret);

    for (const digit of secretString){
      if (String(number).search(digit)===secretString.search(digit)) {
        famas++;
      }
    }
    return famas;
  }

  toques(number) {
    let toques = 0;
    const secretString = String(this.state.secret);

    for (const digit of secretString){
      if (String(number).includes(digit)) {
        toques++;
      }
    }
    toques = toques - this.famas(number);
    return toques;
  }

  render() {
    return (
      <div id="root">
        <Header />
        {this.renderMain()}
        <Footer />
      </div>
    );
  }

  renderMain = () => {
    if (this.state.stage==='pregame') {
      return this.renderPregame();
    } else if (this.state.stage==='playing') {
      return this.renderGame();
    } else if (this.state.stage==='won') {
      return this.renderWon();
    } else if (this.state.stage==='lost'){
      return this.renderLost();
    }
  }

  renderPregame = () =>{
    const isEnabled = this.state.lives > 0 && this.state.lives <= 20;

    return (
      <main className="container">
        <Instructions />

        <label htmlFor="lives" className="">Ingresa cantidad de vidas</label>
        <div className="input-group mb-3 input">
          <div className="input-group-prepend">
            <span className="input-group-text" id="hearth-addon1"><FontAwesomeIcon icon={faHeart} color="red">2</FontAwesomeIcon></span>
          </div>
          <input type="number" className="form-control" id="lives" value={this.state.lives} onChange={this.setLives} min="1" max="20" aria-label="lives" aria-describedby="hearth-addon" />
          <input type="submit" disabled={!isEnabled} className="btn btn-primary" onClick={this.startGame} value="Comenzar" />
        </div>
      </main>
    );
  }

  renderGame = () => {
    const isEnabled = this.state.guess >= 0  && this.state.guess !=='' && this.state.guess.length === 4;

    return (
      <main className="container">
        <Instructions />
        <Lives lives={this.state.lives} />
        <label htmlFor="number" className="">Ingresa un número de cuatro dígitos</label>
        <div className="input-group mb-3 input">
          <input type="number" className="form-control" id="number" value={this.state.guess} placeholder="Número" onChange={this.setGuess} min="0" max="9999" />
          <input type="submit" disabled={!isEnabled} className="btn btn-primary" onClick={this.guessHandler} value="Intentar" />
        </div>
       <Guesses history={this.state.GuessHistory} toques={this.toques} famas={this.famas} />
      </main>
    );
  }

  renderWon(){
    return (
    <main className="container"> 
      <h1>Ganaste!</h1>
      <p className="lead">El número secreto era {this.state.secret}, te tomó {this.state.GuessHistory.length} intentos</p>
      <p className="lead">¿Crees que puedes con menos intentos?</p>
      <a href="./"><input type="submit" className="btn btn-primary" value="Jugar de nuevo" /></a>
    </main>
    );
  }

  renderLost(){
    return (
    <main className="container"> 
      <h1>Perdiste!</h1>
      <p className="lead">El número secreto era {this.state.secret}, utilizaste {this.state.GuessHistory.length} intentos</p>
      <p className="lead">¿Crees que puedes si tienes más intentos?</p>
      <a href="./"><input type="submit" className="btn btn-primary" value="Jugar de nuevo" /></a>
    </main>
    );
  }

}

export default App;