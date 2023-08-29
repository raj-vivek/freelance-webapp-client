import React from "react";
import "./ProjectCard.scss";
import { PropTypes } from "prop-types";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { Link } from "react-router-dom";

const ProjectCard = ({ gig }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["gigUser", gig.userId],
    queryFn: () => {
      return newRequest.get(`/users/${gig.userId}`).then((res) => {
        return res.data;
      });
    },
  });

  return (
    <div className="projectCard">
      <Link className="link projectCardLink" to={`/gig/${gig._id}`}>
        <img className="mainImg" src={gig.cover} />
        {isLoading ? (
          "Loading"
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="info">
            <img src={data.img} alt="" />
            <div className="textInfo">
              <h4>{gig.shortTitle}</h4>
              <span>by {data.username}</span>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

ProjectCard.propTypes = {
  gig: PropTypes.object,
};

export default ProjectCard;
