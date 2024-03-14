import React from "react";
import "./recentusers.css";
import LOGO from "../../assets/logo.png";

const DataItem = function ({ user }) {
  return (
    <tr>
      <td width="60px">
        <div className="imgBx">
          <img src={LOGO} alt="" />
        </div>
      </td>
      <td>
        <h4>
          {user?.userName} <br /> <span>{user?.department}</span>
        </h4>
      </td>
    </tr>
  );
};

function RecentUsers({ data }) {
  return (
    <div className="recentUsers">
      <div className="cardHeader">
        <h2>Recent Users</h2>
      </div>
      <table>
        <tbody>
          {data?.map((user, idx) => (
            <DataItem key={idx} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentUsers;
