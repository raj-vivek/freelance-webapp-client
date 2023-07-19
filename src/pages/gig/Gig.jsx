import React from "react";
import "./Gig.scss";
import Slide from "../../components/swiperSlider/Slide";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";

const Gig = () => {
  const { id } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["gig"],
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
    queryKey: ["user"],
    queryFn: () => {
      return newRequest.get(`/users/${data.userId}`).then((res) => {
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
        <div className="gigContainer">
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
            <div className="reviews">
              <h2>Reviews</h2>
              <div className="item">
                <div className="user">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/7600bb5c2c02ef9f1da9ecd19720a8a7-1670636249627/0d4b7f18-97e3-4e14-8d65-31cc865389b3.jpg"
                    alt=""
                  />
                  <div className="info">
                    <span>Victor Krum</span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
                  Another amazing video from Wing! Workflow and communication
                  was simple, fast, and I{"'"}m super happy with the result.
                  This order was for a Spotify Canvas video and she made a very
                  cool one that is just right. Besides the beautiful videos she
                  made for this song, another thing I particularly like about
                  working with him is him quick speed and revision turnaround
                  time. I like to work fast too and it{"'"}s great as a buyer to
                  find a seller who works like this as well. Wing is a very
                  talented video maker and I will definitely work with him
                  again. I highly recommend working with him!
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
                </div>
              </div>
              <hr />
              <div className="item">
                <div className="user">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/7600bb5c2c02ef9f1da9ecd19720a8a7-1670636249627/0d4b7f18-97e3-4e14-8d65-31cc865389b3.jpg"
                    alt=""
                  />
                  <div className="info">
                    <span>Victor Krum</span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
                  Another amazing video from Wing! Workflow and communication
                  was simple, fast, and I{"'"}m super happy with the result.
                  This order was for a Spotify Canvas video and she made a very
                  cool one that is just right. Besides the beautiful videos she
                  made for this song, another thing I particularly like about
                  working with him is him quick speed and revision turnaround
                  time. I like to work fast too and it{"'"}s great as a buyer to
                  find a seller who works like this as well. Wing is a very
                  talented video maker and I will definitely work with him
                  again. I highly recommend working with him!
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
                </div>
              </div>
              <hr />
              <div className="item">
                <div className="user">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/7600bb5c2c02ef9f1da9ecd19720a8a7-1670636249627/0d4b7f18-97e3-4e14-8d65-31cc865389b3.jpg"
                    alt=""
                  />
                  <div className="info">
                    <span>Victor Krum</span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
                  Another amazing video from Wing! Workflow and communication
                  was simple, fast, and I{"'"}m super happy with the result.
                  This order was for a Spotify Canvas video and she made a very
                  cool one that is just right. Besides the beautiful videos she
                  made for this song, another thing I particularly like about
                  working with him is him quick speed and revision turnaround
                  time. I like to work fast too and it{"'"}s great as a buyer to
                  find a seller who works like this as well. Wing is a very
                  talented video maker and I will definitely work with him
                  again. I highly recommend working with him!
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
                </div>
              </div>
            </div>
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
              <button>Continue</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
