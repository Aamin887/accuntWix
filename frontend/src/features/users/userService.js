import axios from "axios";

const URL_API = "http://localhost:5500/users";

// / = all users
// /:id a user by id
// /update/:id update user by id

// user get user info
const getUser = async function (id, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(URL_API + `/${id}`, config);
  return res.data;
};

// admin get all users
const allUsers = async function (token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(URL_API + "/", config);
  return res.data;
};

// admin update user
const updateUser = async function (_id, formData, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const id = _id;
  const res = await axios.put(URL_API + `/update/${id}`, formData, config);
  return res.data;
};

const userService = {
  getUser,
  allUsers,
  updateUser,
};

export default userService;
