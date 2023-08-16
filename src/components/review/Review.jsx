import React from "react";
import "./Review.scss";
import { PropTypes } from "prop-types";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Review = ({ data }) => {
  const {
    isLoading,
    data: dataUser,
    error,
  } = useQuery({
    queryKey: ["user", data.userId],
    queryFn: () => {
      return newRequest.get(`/users/${data.userId}`).then((res) => {
        return res.data;
      });
    },
  });

  return (
    <div className="review">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="user">
          <img src={dataUser.img || "../img/noavatar.jpg"} alt="" />
          <div className="info">
            <span>{dataUser.username}</span>
            <div className="country">
              <span>{dataUser.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(data.star)
          .fill()
          .map((info, i) => (
            <img src="/img/star.png" alt="" key={i} />
          ))}
        <span>{data.star}</span>
      </div>
      <p>
        {data.desc}
      </p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/img/like.png" alt="" />
        <span>Yes</span>
        <img src="/img/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

Review.propTypes = {
  data: PropTypes.object,
};

export default Review;
