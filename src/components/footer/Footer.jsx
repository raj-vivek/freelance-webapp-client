import React from "react";
import "./Footer.scss";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { Link } from "react-router-dom";
import { images } from "../../../images";

const Footer = ({ device }) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => newRequest.get("categories").then((res) => res.data),
  });

  return (
    <>
      <hr />
      <div className={`footer ${device}`}>
        <div className="container">
          <div className="top">
            <div className="item">
              <h4>Categories</h4>
              {isLoading ? (
                <span>Loading</span>
              ) : error ? (
                <span>Something went wrong</span>
              ) : (
                data.map((item) => (
                  <span key={item._id}>
                    <Link className="link" to={`/gigs?cat=${item.value}`}>
                      {item.name}
                    </Link>
                  </span>
                ))
              )}
            </div>
            <div className="item">
              <h4>About</h4>
              <span>Careers</span>
              <span>Press & News</span>
              <span>Partnerships</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Intellectual Property Claims</span>
              <span>Investor Relations</span>
            </div>
            <div className="item">
              <h4>Support and Education</h4>
              <span>Help & Support</span>
              <span>Trust & Safety</span>
              <span>Selling on Fiwerr</span>
              <span>Buying on Fiwerr</span>
              <span>Fiwerr Guides</span>
              <span>Fiwerr Workspace</span>
              <span>Learn</span>
            </div>
            <div className="item">
              <h4>Community</h4>
              <span>Customer Success Stories</span>
              <span>Community Hub</span>
              <span>Forum</span>
              <span>Events</span>
              <span>Blog</span>
              <span>Influencers</span>
              <span>Affiliates</span>
              <span>Podcast</span>
              <span>Invite a Friend</span>
              <span>Become a Seller</span>
              <span>Community Standards</span>
            </div>
            <div className="item">
              <h4>Business Solutions</h4>
              <span>About Business Solutions</span>
              <span>Fiwerr Pro</span>
              <span>Fiwerr Certified</span>
              <span>Fiwerr Enterprise</span>
              <span>ClearVoice</span>
              <span>Working Not Working</span>
              <span>Contact Sales</span>
            </div>
          </div>
          <hr />
          <div className="bottom">
            <div className="left">
              <h2>fiwerr.</h2>
              <span>© Fiwerr International Ltd. 2023</span>
            </div>
            <div className="right">
              <div className="social">
                <img src={images.twitter} alt="" />
                <img src={images.facebook} alt="" />
                <img src={images.linkedin} alt="" />
                <img src={images.pinterest} alt="" />
                <img src={images.instagram} alt="" />
              </div>
              <div className="info">
                <div className="link">
                  <img src={images.language} alt="" />
                  <span>English</span>
                </div>
                <div className="link">
                  <img src={images.coin} alt="" />
                  <span>INR</span>
                </div>
                <img src={images.accessibility} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Footer.propTypes = {
  device: PropTypes.string,
};

export default Footer;
