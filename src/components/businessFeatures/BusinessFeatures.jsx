import React from "react";
import "./BusinessFeatures.scss";
import { PropTypes } from "prop-types";
import { fiverrMedia, images } from "../../../images";

const BusinessFeatures = ({ device }) => {
  return (
    <div className="businessFeatures">
      <div className="container">
        <div className="left">
          <div className="semi-heading">
            <h2>fiwerr business.</h2>
            <p>NEW</p>
          </div>
          <h1>
            A business solution designed for <i>teams</i>
          </h1>
          <h3>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </h3>
          <div className="feature">
            <span>
              <img src={images.check} alt="" />
            </span>
            <p>Connect to freelancers with proven business experience</p>
          </div>
          <div className="feature">
            <span>
              <img src={images.check} alt="" />
            </span>
            <p>
              Get matched with the perfect talent by a customer success manager{" "}
            </p>
          </div>
          <div className="feature">
            <span>
              <img src={images.check} alt="" />
            </span>
            <p>
              Manage teamwork and boost productivity with one powerful workspace
            </p>
          </div>
          <button>Explore Fiwerr Business</button>
        </div>
        {(device == "desktop" || device == "laptop") && (
          <div className="right">
            <img
              src={fiverrMedia.businessFeauresImage}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

BusinessFeatures.propTypes = {
  device: PropTypes.string,
};

export default BusinessFeatures;
