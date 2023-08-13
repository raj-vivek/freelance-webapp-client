import React from "react";
import "./BusinessFeatures.scss";

const BusinessFeatures = () => {
  return (
    <div className="businessFeatures">
      <div className="container">
        <div className="left">
          <div className="semi-heading">
            <h2>fiverr business.</h2>
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
              <img src="./img/check.png" alt="" />
            </span>
            <p>Connect to freelancers with proven business experience</p>
          </div>
          <div className="feature">
            <span>
              <img src="./img/check.png" alt="" />
            </span>
            <p>
              Get matched with the perfect talent by a customer success manager{" "}
            </p>
          </div>
          <div className="feature">
            <span>
              <img src="./img/check.png" alt="" />
            </span>
            <p>
              Manage teamwork and boost productivity with one powerful workspace
            </p>
          </div>
          <button>Explore Fiverr Business</button>
        </div>
        <div className="right">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessFeatures;
