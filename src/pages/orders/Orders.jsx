import React from "react";
import "./Orders.scss";

const Orders = () => {
  const currentUser = {
    id: 1,
    userName: "Vivek",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="gigImg"
                src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/e15b529f01e9656bdf634bdb3f96c164-1684515299617/animal%20to%20character%2002.png"
                alt=""
              />
            </td>
            <td>Gig01</td>
            <td>123</td>
            <td>12</td>
            <td>
              <img className="deleteImg" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="gigImg"
                src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/e15b529f01e9656bdf634bdb3f96c164-1684515299617/animal%20to%20character%2002.png"
                alt=""
              />
            </td>
            <td>Gig01</td>
            <td>123</td>
            <td>12</td>
            <td>
              <img className="deleteImg" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="gigImg"
                src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/e15b529f01e9656bdf634bdb3f96c164-1684515299617/animal%20to%20character%2002.png"
                alt=""
              />
            </td>
            <td>Gig01</td>
            <td>123</td>
            <td>12</td>
            <td>
              <img className="deleteImg" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="gigImg"
                src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/e15b529f01e9656bdf634bdb3f96c164-1684515299617/animal%20to%20character%2002.png"
                alt=""
              />
            </td>
            <td>Gig01</td>
            <td>123</td>
            <td>12</td>
            <td>
              <img className="deleteImg" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="gigImg"
                src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/e15b529f01e9656bdf634bdb3f96c164-1684515299617/animal%20to%20character%2002.png"
                alt=""
              />
            </td>
            <td>Gig01</td>
            <td>123</td>
            <td>12</td>
            <td>
              <img className="deleteImg" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="gigImg"
                src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/e15b529f01e9656bdf634bdb3f96c164-1684515299617/animal%20to%20character%2002.png"
                alt=""
              />
            </td>
            <td>Gig01</td>
            <td>123</td>
            <td>12</td>
            <td>
              <img className="deleteImg" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
