import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import logout from "../../utils/logout";
import { images } from "../../../images";
import useResponsive from "../../customHooks/useResponsive/useResponsive";

const Navbar = () => {
  // BGactive is false when page is not scrolled, true when page is scrolled. We are changing the navbar styles for if it is scrolled or not.
  const [BGactive, setBGActive] = useState(false);

  // open is true when user menu dropdown should be open, false when not open.
  const [open, setOpen] = useState(false);

  const device = useResponsive();
  const location = useLocation();
  const pathName = location.pathname;

  // console.count("nav")

  const isActive = () => {
    window.scrollY > 50
      ? !BGactive
        ? setBGActive(true)
        : {}
      : BGactive
      ? setBGActive(false)
      : {};
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, [device, BGactive]);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const { isLoading, data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => newRequest.get("categories").then((res) => res.data),
  });

  return (
    <div className={BGactive || pathName !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <Link to="/" className="link">
          <div className="logo">
            <span className="text">fiwerr</span>
            <span className="dot">.</span>
          </div>
        </Link>
        <div className="links">
          {(device == "laptop" || device == "desktop") && (
            <>
              <span>Fiwerr Business</span>
              <span>Explore</span>
              <span>English</span>
              {currentUser && !currentUser.isSeller && (
                <span>Become a Seller</span>
              )}
            </>
          )}
          {currentUser ? (
            <div
              className="user"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <img src={currentUser.img || images.noavatar} alt="" />
              <span>{currentUser.username}</span>
              {open && (
                <div className="options">
                  {currentUser && currentUser.isSeller && (
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
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                Sign in
              </Link>
              <Link className="link" to="/register">
                <button
                  className={BGactive || pathName !== "/" ? "bgactive" : ""}
                >
                  Join
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {(device == "laptop" || device == "desktop") && (
        <div className="menuSection">
          <hr />
          {isLoading ? (
            "Loading"
          ) : error ? (
            "Something went wrong"
          ) : (
            <div className="menu">
              {data.map((cat) => (
                <Link
                  className="link"
                  to={`/gigs?cat=${cat.value}`}
                  key={cat._id}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}

          <hr />
        </div>
      )}
    </div>
  );
};

export default Navbar;
