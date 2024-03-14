import React, { useEffect, useState } from "react";
import "./table.css";
import DataRow from "../DataRow/DataRow";
import { useDispatch, useSelector } from "react-redux";
import UserEditable from "../UserEditable/UserEditable";
import { getAllUser, userReset } from "../../features/users/userReducer";

function Table({ allUsers, setAllUsers }) {
  const [selected, setSelected] = useState(null);
  const [users, setUser] = useState(allUsers);
  const [edit, setEdit] = useState(false);

  // const {} = useSelector(state => state.allUsers)

  const dispatch = useDispatch();
  const list = allUsers?.map((user, idx) => (
    <DataRow
      key={idx}
      user={user}
      setSelected={setSelected}
      setEdit={setEdit}
    />
  ));

  useEffect(() => {
    console.log(allUsers);
    dispatch(getAllUser());
  }, []);

  if (edit) {
    return (
      <UserEditable
        user={selected}
        setEdit={setEdit}
        users={allUsers}
        setAllUsers={setAllUsers}
      />
    );
  }

  return (
    <table>
      {/* header with column title */}
      <thead>
        <tr>
          <td>Fullname</td>
          <td>Username</td>
          <td>Password</td>
          <td>Status</td>
        </tr>
      </thead>
      {/* body with rows  */}
      <tbody>{list}</tbody>

      <button
        onClick={() => {
          window.location.reload();
        }}
        className="new-btn "
      >
        Get Changes
      </button>
    </table>
  );
}

export default Table;

// const users = state.allUsers[0].filter((user) =>
// user._id !== action.payload._id ? user : action.payload
// );
