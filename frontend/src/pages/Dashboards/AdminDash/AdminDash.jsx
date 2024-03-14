import LOGO from "../../../assets/logo.png";
import AdminNav from "../../../components/AdminDashNav/AdminNav";
import "./admindash.css";
import { useEffect, useRef, useState } from "react";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { adminLogout, reset } from "../../../features/auth/authReducer";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner/Spinner";

function AdminDash() {
  // reference to main section and navigation bar
  const [searchQuery, setSearchQuery] = useState("");
  const nav = useRef();
  const main = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { admin, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!admin) {
      navigate("/admin/login");
      return;
    }

    // to handle automatic logout
    // after user is logged in for 12 hours
    // setTimeout(() => {
    //   dispatch(adminLogout());
    //   console.log('here');
    // }, (74800))

    return () => {
      dispatch(reset());
    };
  }, [admin, dispatch, navigate, isError, isSuccess, message]);

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
      <AdminNav logo={LOGO} nav={nav} logout={adminLogout} />

      <div className="main" ref={main}>
        <AdminHeader setSearchQuery={setSearchQuery} toggleNav={toggleNav} />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDash;
