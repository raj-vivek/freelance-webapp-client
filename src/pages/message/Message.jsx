import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <div className="breadcrumbs">
          <span className="breadcrumbs">
            <Link to="/messages">MESSAGES</Link> {">"} VIVEK RAJ
          </span>
          <div className="chat">
            <div className="messageItem">
              <img
                src="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse facilis consequatur dolore, nemo voluptatibus quis odio cumque. Ad dolorem ipsam, reiciendis veritatis eum sapiente repudiandae voluptatem quibusdam sint minus!</p>
            </div>
            <div className="messageItem sender">
              <img
                src="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse facilis consequatur dolore, nemo voluptatibus quis odio cumque. Ad dolorem ipsam, reiciendis veritatis eum sapiente repudiandae voluptatem quibusdam sint minus!</p>
            </div>
            <div className="messageItem">
              <img
                src="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse facilis consequatur dolore, nemo voluptatibus quis odio cumque. Ad dolorem ipsam, reiciendis veritatis eum sapiente repudiandae voluptatem quibusdam sint minus!</p>
            </div>
            <div className="messageItem sender">
              <img
                src="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse facilis consequatur dolore, nemo voluptatibus quis odio cumque. Ad dolorem ipsam, reiciendis veritatis eum sapiente repudiandae voluptatem quibusdam sint minus!</p>
            </div>
            <div className="messageItem">
              <img
                src="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse facilis consequatur dolore, nemo voluptatibus quis odio cumque. Ad dolorem ipsam, reiciendis veritatis eum sapiente repudiandae voluptatem quibusdam sint minus!</p>
            </div>
            <div className="messageItem sender">
              <img
                src="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse facilis consequatur dolore, nemo voluptatibus quis odio cumque. Ad dolorem ipsam, reiciendis veritatis eum sapiente repudiandae voluptatem quibusdam sint minus!</p>
            </div>
          </div>
          <div className="write">
            <textarea
              name=""
              id=""
              placeholder="Write a message"
              cols="30"
              rows="10"
            ></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
