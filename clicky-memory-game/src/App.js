import React, { Component } from "react";
import CardDeck from "./components/CardDeck";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cardImages from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    cardImages,
    score: 0
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
    cardImages.sort(function (a, b) { return 0.5 - Math.random() });
  }

  // still trying to figure out the match function to determine if what the user clicked had been clicked before...

  render() {
    return (
      <Wrapper>
        <Title>Card Deck<p>Score:{this.state.score}</p> </Title>
        {this.state.cardImages.map(cardImages => (
          <CardDeck
            handleIncrement={this.handleIncrement}
            image={cardImages.image}
          />
        ))}
      </Wrapper>

    );
  }



}


export default App;
