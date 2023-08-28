import React from "react";
import "./Message.scss";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

// Conversation
const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, data, error } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const messages = (await newRequest.get(`/messages/${id}`)).data;
      for (const key in messages) {
        messages[key].userImg = await newRequest.get(
          `/users/${messages[key].userId}`
        ).then(res => res.data.img);
      }
      return messages;
    },
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value == "") {
      return;
    }
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/messages">MESSAGES</Link> {">"} VIVEK RAJ
          </div>
          <div className="chat">
            {data.map((message) => (
              <div
                className={
                  message.userId == currentUser._id
                    ? "messageItem owner"
                    : "messageItem"
                }
                key={message._id}
              >
                <img
                  src={message.userImg}
                  alt=""
                />
                <p>{message.desc}</p>
              </div>
            ))}
          </div>
          <form className="write" onSubmit={handleSubmit}>
            <textarea
              placeholder="Write a message"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Message;
