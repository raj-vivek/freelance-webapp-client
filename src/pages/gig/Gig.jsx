import React from "react";
import "./Gig.scss";
import Slide from "../../components/swiperSlider/Slide";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { Link, useOutletContext, useParams } from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";

const Gig = () => {
  const { id } = useParams();
  const [device] = useOutletContext();

  console.log(device);

  const { isLoading, data, error } = useQuery({
    queryKey: ["gig", id],
    queryFn: () => {
      return newRequest.get(`/gigs/single/${id}`).then((res) => {
        res.data.stars = isNaN(res.data.starNumber / res.data.totalStars)
          ? 0
          : Math.floor(res.data.starNumber / res.data.totalStars);

        return res.data;
      });
    },
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    data: dataUser,
    error: errorUser,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => {
      return newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      });
    },
    enabled: !!userId,
  });

  return (
    <div className="gig">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className={`container ${device}`}>
          <div className="left">
            <span className="breadCrumbs">
              FIVERR {">"} GRAPHICS & DESIGN {">"}
            </span>
            <h1>{data.title}</h1>

            {isLoadingUser ? (
              "Loading User"
            ) : errorUser ? (
              "Something went wrong"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={dataUser.img || "../img/noavatar.jpg"}
                  alt=""
                />
                <h4>{dataUser.username}</h4>
                <div className="stars">
                  {Array(data.stars)
                    .fill()
                    .map((item, i) => (
                      <img src="/img/star.png" alt="" key={i} />
                    ))}
                  <span>{data.stars}</span>
                </div>
              </div>
            )}
            <Slide slidesPerView={1} slidesPerGroup={1}>
              <swiper-slide>
                <img className="sliderImg" src={data.cover} alt="" />
              </swiper-slide>
              {data.images.map((img) => (
                <swiper-slide key={img}>
                  <img className="sliderImg" src={img} alt="" />
                </swiper-slide>
              ))}
            </Slide>
            <h2>About this gig</h2>
            <p>{data.desc}</p>
            {isLoadingUser ? (
              "Loading"
            ) : errorUser ? (
              "Something sent wrong"
            ) : (
              <div className="seller">
                <h2>About the seller</h2>

                <div className="user">
                  <img src={dataUser.img || "../img/noavatar.jpg"} alt="" />
                  <div className="userInfo">
                    <h3>Victor Krum</h3>
                    <div className="stars">
                      {Array(data.stars)
                        .fill()
                        .map((item, i) => (
                          <img src="/img/star.png" alt="" key={i} />
                        ))}
                      <span>{data.stars}</span>
                    </div>
                    <button>Contact Me</button>
                  </div>
                </div>

                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">1 hour</span>
                    </div>
                    <div className="item">
                      <span className="title">Member Since</span>
                      <span className="desc">Nov 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Last Delivery</span>
                      <span className="desc">about 11 hours ago</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser.desc}</p>
                </div>
              </div>
            )}
            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="box">
              <div className="pricing">
                <h3>{data.shortTitle}</h3>
                <h2>₹{data.price}</h2>
              </div>
              <p>{data.shortDesc}</p>
              <div className="details">
                <div className="item">
                  <img src="/img/clock.png" alt="" />
                  <span>{data.deliveryTime} Days Delivery</span>
                </div>
                <div className="item">
                  <img src="/img/recycle.png" alt="" />
                  <span>{data.revisionNumber} Revisions</span>
                </div>
              </div>

              <div className="features">
                {data.features.map((feature) => (
                  <div className="item" key={feature}>
                    <img src="/img/greencheck.png" alt="" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link to={`/pay/${id}`}>
                <button>Continue</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
