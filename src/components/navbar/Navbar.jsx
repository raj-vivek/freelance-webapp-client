import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  // active is false when page is not scrolled, true when page is scrolled. We are changing the navbar styles for if it is scrolled or not.
  const [BGactive, setBGActive] = useState(false);
  // const [menuActive, setMenuActive] = useState(false);

  // open is true when user menu dropdown should be open, false when not open.
  const [open, setOpen] = useState(false);

  const checkScreenSize = (size) => {
    if (size < 480) {
      return "mobile";
    } else if (size >= 480 && size < 767) {
      return "tablet";
    } else if (size >= 767 && size < 1024) {
      return "tabletPortrait";
    } else if (size >= 1024 && size < 1280) {
      return "laptop";
    } else {
      return "desktop";
    }
  };

  const [device, setDevice] = useState(checkScreenSize(window.innerWidth));

  const location = useLocation();
  const pathName = location.pathname;

  const isActive = () => {
    window.scrollY > 50 ? setBGActive(true) : setBGActive(false);
    // window.scrollY > 50 ? setMenuActive(true) : setMenuActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    const handleWindowResize = () => {
      setDevice(checkScreenSize(window.innerWidth));
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("scroll", isActive);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    await newRequest.post("auth/logout");
    localStorage.setItem("currentUser", null);
    navigate("/");
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
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
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
                <Link className="link" to="/" key={cat._id}>
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
