import newRequest from "./newRequest";

const logout = async () => {
  localStorage.setItem("currentUser", null);
  await newRequest.post("auth/logout");
};

export default logout;
