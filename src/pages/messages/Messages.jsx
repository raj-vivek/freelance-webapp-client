import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import moment from "moment/moment";
import useResponsive from "../../customHooks/useResponsive/useResponsive";

const Messages = () => {
  const device = useResponsive();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, data, error } = useQuery({
    queryKey: ["conversations"],
    queryFn: () => {
      return newRequest.get("/conversations").then((res) => {
        return res.data;
      });
    },
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="messages">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                {device != "mobile" && device != "tablet" && <th>Date</th>}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  className={
                    (currentUser.isSeller && !item.readBySeller) ||
                    (!currentUser.isSeller && !item.readByBuyer)
                      ? "active"
                      : ""
                  }
                  key={item.id}
                >
                  <td>Vivek Raj</td>
                  <td>
                    <Link to={`/message/${item.id}`} className="link">
                      <div className="lastMessage">
                        {item?.lastMessage?.substring(0, 100)}...
                      </div>
                    </Link>
                  </td>
                  {device != "mobile" && device != "tablet" && (
                    <td>{moment(item.updatedAt).fromNow()}</td>
                  )}
                  <td>
                    {((currentUser.isSeller && !item.readBySeller) ||
                      (!currentUser.isSeller && !item.readByBuyer)) && (
                      <button onClick={() => handleRead(item.id)}>
                        Mark as Read
                      </button>
                    )}
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

export default Messages;
