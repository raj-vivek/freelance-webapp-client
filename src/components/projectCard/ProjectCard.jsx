import React from "react";
import "./ProjectCard.scss";
import { PropTypes } from "prop-types";

const ProjectCard = ({ card }) => {
  return (
    <div className="projectCard">
      <img src={card.img} alt="" />
      <div className="info">
        <img src={card.pp} alt="" />
        <div className="textInfo">
          <h4>{card.gig}</h4>
          <span>by {card.username}</span>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  card: PropTypes.object,
};

export default ProjectCard;
