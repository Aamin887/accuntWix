import "./userinfo.css";
import { useEffect, useState } from "react";
import { logout } from "../../features/auth/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userGetUser } from "../../features/users/userReducer";

function UserInfo() {
  const [overlayActive, setOverActive] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userInfo);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(userGetUser(user._id));
  }, []);

  // toggle off for overlay when account pending
  const activateOverlay = function () {
    if (userInfo?.status === "pending") {
      setOverActive(true);
    } else if (userInfo?.status === "rejected") {
      setOverActive(true);
    } else {
      setOverActive(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    activateOverlay();
  }, []);

  useEffect(() => {
    activateOverlay();
  }, [userInfo]);

  return (
    <div className="user-card-info">
      <div className={`user-card-overlay ${overlayActive ? "show" : ""}`}>
        <div className="container">
          <div className="header">
            <h1>Account - {userInfo?.status}</h1>
          </div>
          <div className="details">
            {userInfo?.firstName && (
              <div className="detail">
                <>
                  <h4>Fullname</h4>
                  <p>{`${userInfo?.firstName} ${userInfo?.middleName} ${userInfo?.lastName}`}</p>
                </>
              </div>
            )}
            {userInfo?.userName && (
              <div className="detail">
                <>
                  <h4>Username</h4>
                  <p>{userInfo?.userName}</p>
                </>
              </div>
            )}
            {userInfo?.email && (
              <div className="detail">
                <>
                  <h4>Username</h4>
                  <p>{userInfo?.email}</p>
                </>
              </div>
            )}
            {userInfo?.employmentStatus && (
              <>
                <div className="detail">
                  <h4>Employment Type</h4>
                  <p>{userInfo?.employmentStatus}</p>
                </div>
              </>
            )}
            {userInfo?.account && (
              <>
                <div className="detail">
                  <h4>Account Type</h4>
                  <p>{userInfo?.account}</p>
                </div>
              </>
            )}
            {userInfo?.department && (
              <>
                <div className="detail">
                  <h4>Department</h4>
                  <p>{userInfo?.department}</p>
                </div>
              </>
            )}
          </div>
          <div className="footer">
            <button className="btn" onClick={handleLogout}>
              Ok
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="header">
          <h2>Account Details</h2>
        </div>

        <div className="details">
          {userInfo?.userName && (
            <>
              <div className="detail">
                <h4>Username</h4>
                <p>{userInfo?.userName}</p>
              </div>
            </>
          )}
          {userInfo?.department && (
            <>
              <div className="detail">
                <h4>Department</h4>
                <p>{userInfo?.department}</p>
              </div>
            </>
          )}
          {userInfo?.account && (
            <>
              <div className="detail">
                <h4>Account Type</h4>
                <p>{userInfo?.account}</p>
              </div>
            </>
          )}
          {userInfo?.createdAt && (
            <>
              <div className="detail">
                <h4>Date of Registration</h4>
                <p>{new Date(userInfo?.updatedAt).toLocaleString("en-GB")}</p>
              </div>
            </>
          )}
          {userInfo?.email && (
            <>
              <div className="detail">
                <h4>Email</h4>
                <p>{userInfo?.email}</p>
              </div>
            </>
          )}
          {userInfo?.employmentStatus && (
            <>
              <div className="detail">
                <h4>Employment Type</h4>
                <p>{userInfo?.employmentStatus}</p>
              </div>
            </>
          )}
          {userInfo?.staffId && (
            <>
              <div className="detail">
                <h4>Staff ID</h4>
                <p>{userInfo?.staffId}</p>
              </div>
            </>
          )}
          {userInfo?.updatedAt && (
            <>
              <div className="detail">
                <h4>Approved Date</h4>
                <p>{new Date(userInfo?.updatedAt).toLocaleString("en-GB")}</p>
              </div>
            </>
          )}
          {userInfo?.status && (
            <>
              <div className="detail active">
                <h4>Account Status</h4>
                <p>{userInfo?.status}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
