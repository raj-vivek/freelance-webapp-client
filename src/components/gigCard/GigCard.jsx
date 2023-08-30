import React from "react";
import "./GigCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { images } from "../../../images";

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["gigUser", item.userId],
    queryFn: () => {
      return newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      });
    },
  });

  return (
    <Link to={`/gig/${item._id}`} className="link gigCardLink">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong"
          ) : (
            <div className="user">
              <img src={data.img ? data.img : images.noavatar} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>
            {item.desc.length > 100
              ? item.desc.slice(0, 90) + "..."
              : item.desc}
          </p>
          <div className="ratings">
            <img src={images.star} alt="" />
            <span>
              {!isNaN(item.starNumber / item.totalStars) &&
                Math.floor(item.starNumber / item.totalStars)}
            </span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src={images.heart} alt="" />
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
