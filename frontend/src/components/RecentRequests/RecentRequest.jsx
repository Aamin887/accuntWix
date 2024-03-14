import React, { useEffect, useState } from "react";
import "./recentrequests.css";
import Table from "../Table/Table";
import { Link } from "react-router-dom";
import { getAllUser, userReset } from "../../features/users/userReducer";
import { useSelector } from "react-redux";

function RecentRequest() {
  const { allUsers, message } = useSelector((state) => state.userInfo);

  return (
    <div className="recentRequests">
      <div className="cardHeader">
        <h2>Account Requests</h2>
        <Link to={"/allUser"} className="btn">
          View All
        </Link>
      </div>
      <Table allUsers={allUsers[0]} />
    </div>
  );
}

export default RecentRequest;
