import newRequest from "./newRequest";

const logout = async () => {
  await newRequest.post("auth/logout");
  localStorage.setItem("currentUser", null);
};

export default logout;
