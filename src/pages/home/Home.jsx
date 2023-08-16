import React, { useEffect, useRef } from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/swiperSlider/Slide";
import { cards, projects } from "../../data";
import WebsiteFeatures from "../../components/websiteFeatures/WebsiteFeatures";
import MarketPlace from "../../components/marketPlace/MarketPlace";
import BusinessFeatures from "../../components/businessFeatures/BusinessFeatures";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
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

  let device = useRef(checkScreenSize(window.innerWidth));

  useEffect(() => {
    const handleWindowResize = () => {
      device = checkScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="home">
      <Featured device={device.current} />
      <TrustedBy />
      <div className="popularServices">
        <div className="homePageSliderContainer">
          <Slide
            slidesPerView={
              device.current == "desktop"
                ? 5
                : device.current == "laptop"
                ? 4
                : device.current == "tabletPortrait"
                ? 3
                : device.current == "tablet"
                ? 2
                : 1
            }
            slidesPerGroup={device.current == "mobile" ? 1 : 2}
            mousewheel={true}
            title={"Popular Services"}
          >
            {cards.map((card) => (
              <swiper-slide key={card.id}>
                <CategoryCard card={card} />
              </swiper-slide>
            ))}
          </Slide>
        </div>
      </div>
      <WebsiteFeatures device={device.current} />
      <MarketPlace device={device.current} />
      <BusinessFeatures device={device.current} />
      <div className="homePageGigSlider">
        <div className="homePageSliderContainer">
          <Slide
            slidesPerView={
              device.current == "desktop"
                ? 4
                : device.current == "laptop"
                ? 3
                : device.current == "tabletPortrait"
                ? 2
                : 1
            }
            slidesPerGroup={2}
            mousewheel={true}
            title={"Inspiring work made on Fiverr"}
          >
            {projects.map((card) => (
              <swiper-slide key={card.id}>
                <ProjectCard card={card} />
              </swiper-slide>
            ))}
            ;
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Home;
