import axios from "axios";
import logout from "./logout";

const newAxiosRequest = axios.create({
  // baseURL: "http://localhost:8800/" + "api/",
  baseURL: import.meta.env.VITE_BACKEND_URL + "api/",
  withCredentials: true, // Send cookies and other credentials
  crossDomain: true, // Allow cross-domain requests
});

const newRequest = {
  get: (...args) => {
    const res = newAxiosRequest.get(...args).catch((error) => {
      if (error.response.data == "Token is not valid!") {
        logout();
        window.location.href = "/login";
        alert("You session has expired. Please login again.");
      }
    });
    return res;
  },
  post: (...args) => {
    const res = newAxiosRequest.post(...args).catch((error) => {
      if (error.response.data == "Token is not valid!") {
        logout();
        window.location.href = "/login";
        alert("You session has expired. Please login again.");
      }
    });
    return res;
  },
  put: (...args) => {
    const res = newAxiosRequest.put(...args).catch((error) => {
      if (error.response.data == "Token is not valid!") {
        logout();
        window.location.href = "/login";
        alert("You session has expired. Please login again.");
      }
    });
    return res;
  },
  delete: (...args) => {
    const res = newAxiosRequest.delete(...args).catch((error) => {
      if (error.response.data == "Token is not valid!") {
        logout();
        window.location.href = "/login";
        alert("You session has expired. Please login again.");
      }
    });
    return res;
  },
};

export default newRequest;
