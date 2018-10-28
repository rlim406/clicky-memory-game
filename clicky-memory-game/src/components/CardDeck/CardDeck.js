import React from "react";
import "./CardDeck.css";

const CardDeck = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default CardDeck;