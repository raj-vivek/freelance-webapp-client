import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation, useOutletContext } from "react-router-dom";
import { images } from "../../../images";

const Gigs = () => {
  // sales = Best Seller
  // createdAt = Newest
  //  We will be "sales" and "createdAt" as query for API requests
  // Like: /api/gigs?sort="sales"
  const [sortType, setSortType] = useState("sales");
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const [device] = useOutletContext();

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

  const {
    isLoading: catIsLoading,
    data: catData,
    error: catError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => newRequest.get("categories").then((res) => res.data),
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
  }, [sortType, search]);

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
        {catIsLoading ? (
          "Loading"
        ) : catError ? (
          "Something went wrong"
        ) : (
          <>
            <span className="breadcrumbs">
              FIVERR {">"}{" "}
              {search.includes("cat")
                ? catData
                    .filter((cat) => cat.value == search.split("cat=")[1])[0]
                    ?.name.toUpperCase()
                : "Fiwerr Services"}{" "}
              {">"}{" "}
            </span>
            <h1>
              {search.includes("cat")
                ? catData.filter(
                    (cat) => cat.value == search.split("cat=")[1]
                  )[0]?.name
                : "Fiwerr Services"}
            </h1>
            <p>
              Explore the boundaries of art and technology with{" "}
              {search.includes("cat")
                ? catData
                    .filter((cat) => cat.value == search.split("cat=")[1])[0]
                    ?.name.toLowerCase()
                : "Fiwerr's"}{" "}
              solutions
            </p>
          </>
        )}
        <div className={`filters ${device}`}>
          <div className="left">
            <span>Budget:</span>
            <div className="inputs">
              <input ref={minRef} type="text" placeholder="min" />
              <input ref={maxRef} type="text" placeholder="max" />
              <button onClick={apply}>Apply</button>
            </div>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <div className="sort" onClick={toggleSortMenu}>
              <span className="sortType">
                {sortType === "sales" ? "Best Selling" : "Newest"}
              </span>
              <img src={images.down} alt="" />
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
        <div className={`row ${device}`}>
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
