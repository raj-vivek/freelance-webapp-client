import React, { useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";

const Gigs = () => {
  // sales = Best Seller
  // createdAt = Newest
  //  We will be "sales" and "createdAt" as query for API requests
  // Like: /api/gigs?sort="sales"
  const [sortType, setSortType] = useState("sales");
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const reSort = (type) => {
    setSortType(type);
    setSortMenuOpen(false);
  };

  const toggleSortMenu = () => {
    if (sortMenuOpen) {
      setSortMenuOpen(false);
    } else {
      setSortMenuOpen(true);
    }
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          FIVERR {">"} GRAPHICS & DESINGN {">"}{" "}
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr{"'"}s AI
          artists
        </p>
        <div className="filters">
          <div className="left">
            <span>Budget:</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <div className="sort" onClick={toggleSortMenu}>
              <span className="sortType">
                {sortType === "sales" ? "Best Selling" : "Newest"}
              </span>
              <img src="./img/down.png" alt="" />
            </div>
            {sortMenuOpen && (
              <div className="sortMenu">
                {sortType != "sales" && (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                {sortType != "createdAt" && (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="row">
          {gigs.map((gig) => (
            <div key={gig.id} className="col">
              <GigCard item={gig} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
