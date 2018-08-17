import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import TarotCards from './components/TarotCards';
import gypsies from './TarotCards.json';
// console.log(tarotCards);
import Wrapper from './components/Wrapper/Wrapper'


function shuffleGypsies(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {
  state = {
    gypsies,
    topScore: 0,
    score: 0,
    theAnswer: "",
    clicked: []
  };


//Click function for TarotCards component
handleClick = id => {
if (this.state.clicked.indexOf(id) === -1) {
  console.log(id)
  this.handleIncrement();
  this.setState({clicked: this.state.clicked.concat(id) });
}  else {
  this.handleReset();
  }
};


handleIncrement = () => {
  let updatedScore = this.state.score + 1; 
  this.setState({
    score: updatedScore,
    theAnswer: ""
  });
    if(updatedScore >= this.state.topScore) {
      this.setState({ topScore: updatedScore });
    }
     else if (updatedScore === 12) {
      this.setState({ theAnswer: "You win!"});
    }
    this.handleShuffle();
};

handleReset = () => {
  this.setState({
    score: 0,
    topScore: this.state.topScore,
    theAnswer: "Wrong",
    clicked: []
  });
  this.handleShuffle();
}

handleShuffle = () => {
  let shuffleGypsies = shuffleGypsies(gypsies);
  this.setState({ gypsies: shuffleGypsies });
};

  render() {
    return (
    <div>
      <Navbar
        theAnswer={this.state.theAnswer}
        score={this.state.score}
        topScore={this.state.topScore}
      />
      <Title/>
      <Wrapper>
            {gypsies.map(gypsy => (
                <TarotCards
                  key={gypsy.id}
                  id={gypsy.id}
                  image={gypsy.image}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                />
            ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
