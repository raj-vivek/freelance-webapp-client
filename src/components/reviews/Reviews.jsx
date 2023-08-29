import React, { useState } from "react";
import "./Reviews.scss";
import Review from "../review/Review";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { PropTypes } from "prop-types";

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();

  const { isLoading, data, error } = useQuery({
    queryKey: ["reviews", gigId],
    queryFn: () => {
      return newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      });
    },
  });

  const [newReviewError, setNewReviewError] = useState("");

  const [newReview, setNewReview] = useState({
    desc: "",
    star: 5,
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("reviews", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newReview.desc == "") {
      setNewReviewError("No review text entered.");
      return;
    }
    mutation.mutate({ ...newReview, gigId });
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "Loading"
        : error
        ? "Something went wrong"
        : data.map((review) => <Review key={review._id} data={review} />)}
      <div className="addReview">
        <h3>Add a review</h3>
        <div className="reviewError">{newReviewError}</div>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your review"
            value={newReview.desc}
            onFocus={() => {
              setNewReviewError("");
            }}
            onChange={(e) =>
              setNewReview({ ...newReview, desc: e.target.value })
            }
          />
          <div className="bottomRow">
            <select
              name=""
              id=""
              value={newReview.star}
              onChange={(e) =>
                setNewReview({ ...newReview, star: e.target.value })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5"> 5</option>
            </select>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  gigId: PropTypes.string,
};

export default Reviews;
