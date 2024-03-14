import axios from "axios";
import { IoKeypadSharp } from "react-icons/io5";

const URL_API = "http://localhost:5500";

// register user
const register = async function (formData) {
  const res = await axios.post(URL_API + "/register", formData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

// login user
const login = async function (formData) {
  const res = await axios.post(URL_API + "/login", formData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

// admin login
const adminLogin = async function (formData) {
  const res = await axios.post(URL_API + "/admin", formData);
  if (res.data) {
    localStorage.setItem("admin", JSON.stringify(res.data));
  }
  return res.data;
};

// user logout
const logout = function () {
  localStorage.removeItem("user");
};

// admin logout
const adminLogout = function () {
  localStorage.removeItem("admin");
};

const authService = {
  register,
  login,
  adminLogin,
  adminLogout,
  logout,
};

export default authService;
