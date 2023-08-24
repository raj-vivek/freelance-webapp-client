import React, { useState } from "react";
import "./Register.scss";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    phone: "",
    desc: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSeller = (event) => {
    setUser({ ...user, isSeller: event.target.checked });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      user.username == "" ||
      user.email == "" ||
      user.password == "" ||
      user.country == ""
    ) {
      setError("Some fields are missing data. Please fill before submitting.");
      return;
    }

    if (file == null) {
      setError("Please upload a Profile Picture");
      return;
    }

    if (user.isSeller && (user.phone == "" || user.desc == "")) {
      setError(
        "Some seller fields are missing data. Please fill before submitting."
      );
      return;
    }

    try {
      const url = await upload(file);
      const res = await newRequest.post("auth/register", {
        ...user,
        img: url,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onFocus={() => setError("")}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label>Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <label>Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label>Country</label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
          <div className="error">{error && error}</div>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label>Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label>Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label>Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Register;
