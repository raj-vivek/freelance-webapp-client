import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";

const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link className="link" to="/addGig">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className="gigImg"
                src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/e15b529f01e9656bdf634bdb3f96c164-1684515299617/animal%20to%20character%2002.png"
                alt=""
              />
            </td>
            <td>Gig01</td>
            <td>123</td>
            <td>12</td>
            <td>
              <img className="deleteImg" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="gigImg"
                src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/e15b529f01e9656bdf634bdb3f96c164-1684515299617/animal%20to%20character%2002.png"
                alt=""
              />
            </td>
            <td>Gig01</td>
            <td>123</td>
            <td>12</td>
            <td>
              <img className="deleteImg" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="gigImg"
                src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/e15b529f01e9656bdf634bdb3f96c164-1684515299617/animal%20to%20character%2002.png"
                alt=""
              />
            </td>
            <td>Gig01</td>
            <td>123</td>
            <td>12</td>
            <td>
              <img className="deleteImg" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="gigImg"
                src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/e15b529f01e9656bdf634bdb3f96c164-1684515299617/animal%20to%20character%2002.png"
                alt=""
              />
            </td>
            <td>Gig01</td>
            <td>123</td>
            <td>12</td>
            <td>
              <img className="deleteImg" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="gigImg"
                src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/e15b529f01e9656bdf634bdb3f96c164-1684515299617/animal%20to%20character%2002.png"
                alt=""
              />
            </td>
            <td>Gig01</td>
            <td>123</td>
            <td>12</td>
            <td>
              <img className="deleteImg" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="gigImg"
                src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/e15b529f01e9656bdf634bdb3f96c164-1684515299617/animal%20to%20character%2002.png"
                alt=""
              />
            </td>
            <td>Gig01</td>
            <td>123</td>
            <td>12</td>
            <td>
              <img className="deleteImg" src="/img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
