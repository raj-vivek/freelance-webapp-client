import React from "react";
import "./MarketPlaceCard.scss";
import { PropTypes } from "prop-types";

const MarketPlaceCard = ({ img, title }) => {
  return (
    <div className="marketPlaceCard">
        <img src={img} alt="" />
        <hr />
        <h4>{title}</h4>
    </div>
  );
};

MarketPlaceCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default MarketPlaceCard;
