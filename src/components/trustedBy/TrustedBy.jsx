import React from "react";
import "./TrustedBy.scss";
import { trustedByPhotos } from "../../../images";

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <span>Trusted By:</span>
        <img src={trustedByPhotos.facebook} />
        <img src={trustedByPhotos.google} />
        <img src={trustedByPhotos.netflix} />
        <img src={trustedByPhotos.paypal} />
      </div>
    </div>
  );
};

export default TrustedBy;
