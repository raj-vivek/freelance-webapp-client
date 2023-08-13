import React from "react";
import "./CategoryCard.scss";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const CategoryCard = ({ card }) => {
  return (
    <div className="categoryCard">
      <Link className="link" to="/gigs?cat=design">
        <img src={card.img} alt="" />
        <p className="desc">{card.desc}</p>
        <h1 className="title">{card.title}</h1>
      </Link>
    </div>
  );
};

CategoryCard.propTypes = {
  card: PropTypes.object,
};

export default CategoryCard;
