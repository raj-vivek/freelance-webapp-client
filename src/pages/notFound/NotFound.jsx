import React, { useEffect } from "react";
import "./NotFound.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, []);

  return (
    <div className="notFound">
      <div className="fof">
        <h1>Error 404: Page not found</h1>
        <h2>Hold on! Redirecting you to home page</h2>
      </div>
    </div>
  );
};

export default NotFound;
