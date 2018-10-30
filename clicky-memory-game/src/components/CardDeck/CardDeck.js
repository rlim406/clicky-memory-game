import React from "react";
import "./CardDeck.css";

const CardDeck = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.handleIncrement(props.id)} className="increment" />
    </div>

  </div>
);

export default CardDeck;