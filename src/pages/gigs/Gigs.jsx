import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  // sales = Best Seller
  // createdAt = Newest
  //  We will be "sales" and "createdAt" as query for API requests
  // Like: /api/gigs?sort="sales"
  const [sortType, setSortType] = useState("sales");
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search || "?"}&min=${minRef.current.value}&max=${
            maxRef.current.value
          }&sort=${sortType}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const reSort = (type) => {
    setSortType(type);
    setSortMenuOpen(false);
  };

  const apply = () => {
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [sortType]);

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
          Explore the boundaries of art and technology with Fiwerr{"'"}s AI
          artists
        </p>
        <div className="filters">
          <div className="left">
            <span>Budget:</span>
            <input ref={minRef} type="text" placeholder="min" />
            <input ref={maxRef} type="text" placeholder="max" />
            <button onClick={apply}>Apply</button>
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
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong"
            : data.map((gig) => (
                <div key={gig._id} className="col">
                  <GigCard item={gig} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
