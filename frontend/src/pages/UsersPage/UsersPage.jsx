import React, { useEffect, useState } from "react";
import Cardbox from "../../components/Cardbox/Cardbox";
import RecentRequest from "../../components/RecentRequests/RecentRequest";
// import RecentUsers from "../../components/RecentUsers/RecentUsers";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaUserFriends, FaUserPlus, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../features/users/userReducer";
import { toast } from "react-toastify";

function UsersPage() {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  const { allUsers, message } = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  useEffect(() => {
    setUsers(allUsers[0]);
  }, [allUsers, message]);

  return (
    <div>
      <Cardbox
        data={[
          {
            name: users?.length === 1 ? "Account" : "Accounts",
            icon: FaUserFriends,
            number: users?.length,
          },
          {
            name: "Account requests",
            icon: FaUserPlus,
            number: users?.length,
          },
          { name: "Password requests", icon: FaLock, number: 1 },
          {
            name: "Help requests",
            icon: IoChatboxEllipses,
            number: users?.length,
          },
        ]}
      />

      <div className="requests">
        <RecentRequest />
        {/* <RecentUsers data={users} /> */}
      </div>
    </div>
  );
}

export default UsersPage;
