/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { PropTypes } from "prop-types";
import "./Slide.scss";

// Best document ever
// https://dev.to/ivadyhabimana/customizing-swiperjs-prevnext-arrow-buttons-and-pagination-bullets-in-react-3gkh

// register Swiper custom elements
register();

const Slide = ({
  children,
  slidesPerView,
  slidesPerGroup,
  mousewheel,
  title,
}) => {
  const swiperRef = useRef(null);
  // console.count("slide");

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      slidesPerView: slidesPerView,
      slidesPerGroup: slidesPerGroup,
      rewind: true,
      mousewheel: mousewheel,

      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            padding: 0px 8px;
            border-radius: 100%;
            color: black;
            font-size: 1px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
          }

          .swiper-button-next:after,
          .swiper-button-prev:after{
            font-size: 15px;
            font-weight: bold;
          }

          .swiper-wrapper{
            overflow: visible;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, [slidesPerView]);

  return (
    <div className="slide">
      <div className="slideContainer">
        {title && (
          <div className="title">
            <h1>{title}</h1>
          </div>
        )}
        <div className="sliderContainer">
          <swiper-container ref={swiperRef} init="false">
            {children}
          </swiper-container>
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  children: PropTypes.array,
  slidesPerView: PropTypes.number,
  slidesPerGroup: PropTypes.number,
  mousewheel: PropTypes.bool,
  title: PropTypes.string,
};

export default Slide;
