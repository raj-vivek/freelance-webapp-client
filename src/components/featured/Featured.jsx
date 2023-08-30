import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { images } from "../../../images";

const Featured = ({ device }) => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/gigs?search=${input}`);
  };

  return (
    <div
      className={
        device == "desktop" || device == "laptop"
          ? "featured"
          : "featured tablet"
      }
    >
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> service for your business
          </h1>
          <form className="search" onSubmit={(e) => handleSubmit(e)}>
            <div className="searchInput">
              <img className="searchImage" src={images.search} alt="" />
              <input
                type="text"
                placeholder='Try "building mobile app"'
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </div>
            <button type="submit">Search</button>
          </form>
          <div className="popular">
            <span>Popular:</span>
            <button
              onClick={() => {
                navigate(`/gigs?cat=web`);
              }}
            >
              Web Design
            </button>
            <button
              onClick={() => {
                navigate(`/gigs?cat=design`);
              }}
            >
              Graphic Design
            </button>
            <button
              onClick={() => {
                navigate(`/gigs?cat=logo`);
              }}
            >
              Logo Design
            </button>
            <button
              onClick={() => {
                navigate(`/gigs?cat=ai`);
              }}
            >
              AI Services
            </button>
          </div>
        </div>
        {(device == "desktop" || device == "laptop") && (
          <div className="right">
            <img src={images.man} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

Featured.propTypes = {
  device: PropTypes.string,
};

export default Featured;
