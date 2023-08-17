import React from "react";
import "./CategoryCard.scss";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const CategoryCard = ({ cat }) => {
  return (
    <div className="categoryCard">
      <Link className="link" to={`/gigs?cat=${cat.value}`}>
        <img src={cat.coverImg} alt="" />
        <h2 className="title">{cat.name}</h2>
      </Link>
    </div>
  );
};

CategoryCard.propTypes = {
  cat: PropTypes.object,
};

export default CategoryCard;
