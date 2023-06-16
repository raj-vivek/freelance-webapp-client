import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    userName: "Vivek",
    isSeller: true,
  };

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Vivek Raj</td>
            <td>
              <Link to="/message/123" className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                magni ipsam corporis!
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="linkactive">
            <td>Vivek Raj</td>
            <td>
              <Link to="/message/123" className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                magni ipsam corporis!
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Vivek Raj</td>
            <td>
              <Link to="/message/123" className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                magni ipsam corporis!
              </Link>
            </td>
            <td>1 hour ago</td>
          </tr>
          <tr>
            <td>Vivek Raj</td>
            <td>
              <Link to="/message/123" className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                magni ipsam corporis!
              </Link>
            </td>
            <td>1 hour ago</td>
          </tr>
          <tr>
            <td>Vivek Raj</td>
            <td>
              <Link to="/message/123" className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                magni ipsam corporis!
              </Link>
            </td>
            <td>1 hour ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
