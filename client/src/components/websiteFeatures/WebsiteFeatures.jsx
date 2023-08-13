import React from "react";
import "./WebsiteFeatures.scss";

const WebsiteFeatures = () => {
  return (
    <div className="websiteFeatures">
      <div className="container">
        <div className="left">
          <h2>A whole world of freelance talent at your fingertips</h2>
          <div className="features">
            <div className="featureTitle">
              <img src="./img/check.png" alt="" />
              <h3>The best for every budget</h3>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="features">
            <div className="featureTitle">
              <img src="./img/check.png" alt="" />
              <h3>Quality work done quickly</h3>
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
          </div>
          <div className="features">
            <div className="featureTitle">
              <img src="./img/check.png" alt="" />
              <h3>Protected payments, every time</h3>
            </div>
            <p>
              Always know what you&apos;ll pay upfront. Your payment isn&apos;t released
              until you approve the work.
            </p>
          </div>
          <div className="features">
            <div className="featureTitle">
              <img src="./img/check.png" alt="" />
              <h3>24/7 support</h3>
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="right">
          <video
            src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default WebsiteFeatures;
