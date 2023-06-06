import React from "react";
import "./Gig.scss";
import Slide from "../../components/swiperSlider/Slide";

const Gig = () => {
  return (
    <div className="gig">
      <div className="gigContainer">
        <div className="left">
          <span className="breadCrumbs">
            FIVERR {">"} GRAPHICS & DESIGN {">"}
          </span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img
              className="pp"
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418"
              alt=""
            />
            <h4>Victor Krum</h4>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>

          <Slide slidesPerView={1} slidesPerGroup={1}>
            <swiper-slide>
              <img
                className="sliderImg"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/300950700/original/40ef17230e6912bae9c198375d1e367519ab0272/create-4-portraits-from-your-picture-with-ai.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                className="sliderImg"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/300950700/original/a2d3ef981dc972d97d753bc555f77cc9e4eea7a1/create-4-portraits-from-your-picture-with-ai.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                className="sliderImg"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/300950700/original/28c6a6c84ec20f0a14063d7441c67af69626022d/create-4-portraits-from-your-picture-with-ai.png"
                alt=""
              />
            </swiper-slide>
          </Slide>
          <h2>About this gig</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            cumque ea cum inventore assumenda at nihil et perferendis dolorem,
            libero, ipsum molestiae soluta. Deleniti, commodi ut quo saepe dicta
            ex? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci dolorum temporibus laudantium dicta unde nulla? Ipsum
            dolorem earum odit ad iusto tempore corrupti ipsa soluta, illum
            provident neque nostrum deleniti.
          </p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418"
                alt=""
              />
              <div className="userInfo">
                <h3>Victor Krum</h3>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
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
              <p>
                Hello! My name is Victor, and I am a skilled digital illustrator
                with a passion for producing high-quality designs. My areas of
                expertise include creating portraits, original characters, and
                cover art.
              </p>
            </div>
          </div>
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
                Another amazing video from Wing! Workflow and communication was
                simple, fast, and I{"'"}m super happy with the result. This
                order was for a Spotify Canvas video and she made a very cool
                one that is just right. Besides the beautiful videos she made
                for this song, another thing I particularly like about working
                with him is him quick speed and revision turnaround time. I like
                to work fast too and it{"'"}s great as a buyer to find a seller
                who works like this as well. Wing is a very talented video maker
                and I will definitely work with him again. I highly recommend
                working with him!
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
                Another amazing video from Wing! Workflow and communication was
                simple, fast, and I{"'"}m super happy with the result. This
                order was for a Spotify Canvas video and she made a very cool
                one that is just right. Besides the beautiful videos she made
                for this song, another thing I particularly like about working
                with him is him quick speed and revision turnaround time. I like
                to work fast too and it{"'"}s great as a buyer to find a seller
                who works like this as well. Wing is a very talented video maker
                and I will definitely work with him again. I highly recommend
                working with him!
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
                Another amazing video from Wing! Workflow and communication was
                simple, fast, and I{"'"}m super happy with the result. This
                order was for a Spotify Canvas video and she made a very cool
                one that is just right. Besides the beautiful videos she made
                for this song, another thing I particularly like about working
                with him is him quick speed and revision turnaround time. I like
                to work fast too and it{"'"}s great as a buyer to find a seller
                who works like this as well. Wing is a very talented video maker
                and I will definitely work with him again. I highly recommend
                working with him!
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
              <h3>1 AI generated image</h3>
              <h2>₹5,202</h2>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              quos perferendis.
            </p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>2 Days Delivery</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>3 Revisions</span>
              </div>
            </div>
            <div className="features">
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt writing</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Artwork delivery</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Image upscaling</span>
              </div>
            </div>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;
