import React, { Component } from "react";
import CardDeck from "./components/CardDeck";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cardImages from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    cardImages
  };

  render() {
    return (
      <Wrapper>
        <Title>Card Deck</Title>
        {this.state.cardImages.map(cardImages => (
          <CardDeck
            image={cardImages.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
