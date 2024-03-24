import "./userdash.css";
import LOGO from "../../../assets/logo.png";
import UserDashNav from "../../../components/UserDashNav/UserDashNav";
import { useEffect, useRef, useState } from "react";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../../features/auth/authReducer";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner/Spinner";
import { userGetUser } from "../../../features/users/userReducer";

function UserDash() {
  // reference to main section and navigation bar
  const [searchQuery, setSearchQuery] = useState("");

  const nav = useRef();
  const main = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!user) {
      navigate("/login");
      return;
    }

    return () => {
      dispatch(reset());
    };
  }, [isError, message, navigate, isSuccess, dispatch, user]);

  // expanding retracting the nav bar
  const toggleNav = function () {
    nav.current.classList.toggle("active");
    main.current.classList.toggle("active");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <UserDashNav logo={LOGO} nav={nav} logout={logout} />
      <div className="main" ref={main}>
        <AdminHeader setSearchQuery={setSearchQuery} toggleNav={toggleNav} />
        <Outlet />
      </div>
    </div>
  );
}

export default UserDash;
