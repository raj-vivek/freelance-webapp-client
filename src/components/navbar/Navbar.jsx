import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  // active is false when page is not scrolled, true when page is scrolled. We are changing the navbar styles for if it is scrolled or not.
  const [BGactive, setBGActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  // open is true when user menu dropdown should be open, false when not open.
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const pathName = location.pathname;

  const isActive = () => {
    window.scrollY > 0 ? setBGActive(true) : setBGActive(false);
    window.scrollY > 50 ? setMenuActive(true) : setMenuActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    userName: "Vivek",
    isSeller: true,
  };

  return (
    <div className={BGactive || pathName !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <Link to="/" className="link">
          <div className="logo">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </div>
        </Link>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser.isSeller && <span>Become a Seller</span>}
          {!currentUser && <span>Sign In</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div
              className="user"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <img
                src=".\img\profilePicture.jpg"
                alt=""
              />
              <span>{currentUser.userName}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/addgig">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(menuActive || pathName!=="/") && (
          <>
            <hr />
            <div className="menu">
              <Link className="link" to="/">
                Graphics & Design
              </Link>
              <Link className="link" to="/">
                Video & Animation
              </Link>
              <Link className="link" to="/">
                Writing & Translation
              </Link>
              <Link className="link" to="/">
                AI Services
              </Link>
              <Link className="link" to="/">
                Music & Audio
              </Link>
              <Link className="link" to="/">
                Programming & Tech
              </Link>
              <Link className="link" to="/">
                Business
              </Link>
              <Link className="link" to="/">
                Lifestyle
              </Link>
            </div>
            <hr />
          </>
        )}
    </div>
  );
};

export default Navbar;
