import React from "react";
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
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesPerView={5} title="Popular professional services">
        {cards.map((card) => (
          <swiper-slide key={card.id}>
            <CategoryCard card={card} />
          </swiper-slide>
        ))}
      </Slide>
      <WebsiteFeatures />
      <MarketPlace />
      <BusinessFeatures />
      <Slide
        slidesPerView={4}
        title="Get inspired with projects made by our freelancers"
      >
        {projects.map((card) => (
          <swiper-slide key={card.id}>
            <ProjectCard card={card} />
          </swiper-slide>
        ))}
        ;
      </Slide>
    </div>
  );
};

export default Home;
