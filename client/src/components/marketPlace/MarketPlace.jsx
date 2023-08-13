import React from "react";
import "./MarketPlace.scss";
import { marketPlaceCards } from "../../data";
import MarketPlaceCard from "../marketPlaceCard/MarketPlaceCard";

const MarketPlace = () => {
  return (
    <div className="marketPlace">
      <div className="container">
        <h1>Explore the marketplace</h1>
        <div className="row">
          {marketPlaceCards.map((card) => (
            <div className="column" key={card.id}>
              <MarketPlaceCard img={card.img} title={card.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
