import React from "react";
import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate, useOutletContext } from "react-router-dom";

const Orders = () => {
  const [device] = useOutletContext();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const orders = await newRequest.get(`/orders`).then((res) => res.data);
      for (const key in orders) {
        const otherUser = currentUser.isSeller
          ? await newRequest.get(`/users/${orders[key].buyerId}`)
          : await newRequest.get(`/users/${orders[key].sellerId}`);

        orders[key].otherUser = otherUser.data.username;
      }
      return orders;
    },
  });

  const handleContact = async (order) => {
    const id = order.sellerId + order.buyerId;
    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (error) {
      if (error.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.isSeller ? order.buyerId : order.sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

  return (
    <div className="orders">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <thead>
              <tr>
                {(device == "desktop" ||
                  device == "laptop" ||
                  device == "tabletPortrait") && <th>Image</th>}
                <th>Title</th>
                {device != "mobile" && <th>Price</th>}
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order._id}>
                  {(device == "desktop" ||
                    device == "laptop" ||
                    device == "tabletPortrait") && (
                    <td>
                      <img className="gigImg" src={order.img} alt="" />
                    </td>
                  )}
                  <td>{order.title}</td>
                  {device != "mobile" && <td>{order.price}</td>}
                  <td>{order.otherUser}</td>
                  <td>
                    <img
                      className="messageImg"
                      src="/img/message.png"
                      alt=""
                      onClick={() => {
                        handleContact(order);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
