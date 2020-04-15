import React from 'react';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Instructions from '../Instructions/Instructions';
import LivesInput from '../LivesInput/LivesInput';

import RemainingLives from '../RemainingLives/RemainingLives';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      stage: 'pregame',
      lives: '8',
      secret: '',
      Guesses: []
    }
  }

  setLives = (lives) => {
    this.setState({lives: lives});
  }

  startGame = () => {
    this.setState ({stage: 'playing', secret: this.generateSecret()});
  }

  generateSecret() {
    const w = Math.floor(Math.random()*10);

    let x = Math.floor(Math.random()*10);
    while (w === x){
      x = Math.floor(Math.random()*10);
    }

    let y = Math.floor(Math.random()*10);
    while (y === x || y === w){
      y = Math.floor(Math.random()*10);
    }
    
    let z = Math.floor(Math.random()*10);
    while (z === y || z === x || z === w){
      z = Math.floor(Math.random()*10);
    }
    return ""+w+x+y+z;
  }

  guessHandler = (guess) => {
    let history = this.state.Guesses;
    history.unshift(guess);
    this.setState({Guesses: history});

    if (this.famas(guess)!==4) {
      if (this.state.lives<=1){
        this.setState({stage: 'lost'})
      }
      this.setState({lives: this.state.lives-1})
    }

    if (this.famas(guess)===4) {
      this.setState({stage: 'won'})
    }
  }

  famas = (number) => {
    let famas = 0;
    const secretString = this.state.secret;

    for (const digit of secretString){
      if (String(number).search(digit)===secretString.search(digit)) {
        famas++;
      }
    }
    return famas;
  }

  toques = (number) => {
    let toques = 0;
    const secretString = this.state.secret;

    for (const digit of secretString){
      if (String(number).includes(digit)) {
        toques++;
      }
    }
    toques = toques - this.famas(number);
    return toques;
  }

  render = () => {
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
    return (
      <main className="container">
        <Instructions stage="pregame" />
        <LivesInput lives={this.state.lives} setLives={this.setLives} onSubmit={this.startGame}/>
      </main>
    );
  }

  renderGame = () => {
    return (
      <main className="container">
        <Instructions stage="playing" />
        <RemainingLives lives={this.state.lives} />
        <GuessInput submitHandler={this.guessHandler} />
        <GuessList history={this.state.Guesses} toques={this.toques} famas={this.famas} />
      </main>
    );
  }

  renderWon = () => {
    return (
    <main className="container"> 
      <h1>Ganaste!</h1>
      <p className="lead">El número secreto era {this.state.secret}, te tomó {this.state.Guesses.length} intentos</p>
      <p className="lead">¿Crees que puedes con menos intentos?</p>
      <a href="./"><input type="submit" className="btn btn-primary" value="Jugar de nuevo" /></a>
    </main>
    );
  }

  renderLost = () => {
    return (
    <main className="container"> 
      <h1>Perdiste!</h1>
      <p className="lead">El número secreto era {this.state.secret}, utilizaste {this.state.Guesses.length} intentos</p>
      <p className="lead">¿Podrías con {this.state.Guesses.length+1} intentos?</p>
      <a href="./"><input type="submit" className="btn btn-primary" value="Jugar de nuevo" /></a>
    </main>
    );
  }
}

export default App;