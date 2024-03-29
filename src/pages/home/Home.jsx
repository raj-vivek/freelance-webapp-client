import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/swiperSlider/Slide";
import WebsiteFeatures from "../../components/websiteFeatures/WebsiteFeatures";
import MarketPlace from "../../components/marketPlace/MarketPlace";
import BusinessFeatures from "../../components/businessFeatures/BusinessFeatures";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import useResponsive from "../../customHooks/useResponsive/useResponsive";

const Home = () => {
  const device = useResponsive();

  const { isLoading, data, error } = useQuery({
    queryKey: ["categories"],
  });

  const {
    isLoading: gigsIsLoading,
    data: gigData,
    error: gigError,
  } = useQuery({
    queryKey: ["gigs", "homePage"],
    queryFn: () => newRequest.get("/gigs").then((res) => res.data),
  });

  return (
    <div className="home">
      <Featured device={device} />
      <TrustedBy />
      <div className="popularServices">
        {isLoading ? (
          "Loading"
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="homePageSliderContainer">
            <Slide
              device={device}
              slidesPerView={
                device == "desktop"
                  ? 5
                  : device == "laptop"
                  ? 4
                  : device == "tabletPortrait"
                  ? 3
                  : device == "tablet"
                  ? 2
                  : 1
              }
              slidesPerGroup={device == "mobile" ? 1 : 2}
              // mousewheel={true}
              title={"Popular Services"}
            >
              {data.map((cat) => (
                <swiper-slide key={cat._id}>
                  <CategoryCard cat={cat} />
                </swiper-slide>
              ))}
            </Slide>
          </div>
        )}
      </div>
      <WebsiteFeatures device={device} />
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <MarketPlace device={device} data={data} />
      )}
      <BusinessFeatures device={device} />
      {gigsIsLoading ? (
        "Loading"
      ) : gigError ? (
        "Something went wrong"
      ) : (
        <div className="homePageGigSlider">
          <div className="homePageSliderContainer">
            <Slide
              slidesPerView={
                device == "desktop"
                  ? 4
                  : device == "laptop"
                  ? 3
                  : device == "tabletPortrait"
                  ? 2
                  : 1
              }
              slidesPerGroup={2}
              // mousewheel={true}
              title={"Inspiring work made on Fiwerr"}
            >
              {gigData.map((gig) => (
                <swiper-slide key={gig._id}>
                  <ProjectCard gig={gig} />
                </swiper-slide>
              ))}
            </Slide>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
