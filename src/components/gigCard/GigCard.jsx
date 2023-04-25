import React from "react";
import "./GigCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="ratings">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h3>{item.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

GigCard.propTypes = {
  item: PropTypes.object,
};

export default GigCard;
