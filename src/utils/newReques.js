import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true, // to get cookies
});

export default newRequest;
