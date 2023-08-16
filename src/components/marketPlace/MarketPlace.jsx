import React from "react";
import "./MarketPlace.scss";
import { marketPlaceCards } from "../../data";
import MarketPlaceCard from "../marketPlaceCard/MarketPlaceCard";
import PropTypes from "prop-types";

const MarketPlace = ({ device }) => {
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

MarketPlace.propTypes = {
  device: PropTypes.string,
};

export default MarketPlace;
