import React from "react";
import "./MarketPlace.scss";
import MarketPlaceCard from "../marketPlaceCard/MarketPlaceCard";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MarketPlace = ({ device, data }) => {
  return (
    <div className="marketPlace">
      <div className={`container ${device}`}>
        <h1>Explore the marketplace</h1>
        <div className="row">
          {data.map((cat) => (
            <div className="column" key={cat._id}>
              <Link className="link" to={`/gigs?cat=${cat.value}`}>
                <MarketPlaceCard img={cat.icon} title={cat.name} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

MarketPlace.propTypes = {
  device: PropTypes.string,
  data: PropTypes.array,
};

export default MarketPlace;
