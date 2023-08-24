import React, { useState } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); //To not submit page

    if (username == "" || password == "") {
      setError("Enter username and/or password");
      return;
    }
    try {
      const res = await newRequest.post("auth/login", { username, password });
      //Storing user data in local storage to use it at different pages/components like navbar
      localStorage.setItem("currentUser", JSON.stringify(res.data)); // we can and should use Context API here. Not used to keep is simple for now
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="login" onSubmit={handleSubmit}>
      <div className="container">
        <form action="">
          <h1>Sign In</h1>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            onFocus={() => setError("")}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            type="text"
            name="password"
            onFocus={() => setError("")}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
          <div className="error">{error && error}</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
