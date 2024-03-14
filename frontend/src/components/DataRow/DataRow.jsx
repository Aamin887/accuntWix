import React, { useState } from "react";
import "./datarow.css";

function DataRow({ user, setSelected, setEdit }) {
  const { title, firstName, middleName, userName, status, lastName, password } =
    user;

  return (
    <tr
      onClick={() => {
        setSelected(user);
        setEdit(true);
      }}
    >
      <td>
        {title} {firstName} {middleName?.length > 0 && middleName} {lastName}
      </td>
      <td>{userName}</td>
      <td>{password}</td>
      <td>
        <span className={`status ` + status}>
          {" "}
          {status === "active"
            ? "Active"
            : status === "rejected"
            ? "Rejected"
            : "pending"}
        </span>
      </td>
    </tr>
  );
}

export default DataRow;
