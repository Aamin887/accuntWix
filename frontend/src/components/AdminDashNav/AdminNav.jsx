import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaRegClock, FaLock } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { FaNoteSticky } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import "./adminnav.css";
import { useDispatch } from "react-redux";

function AdminNav({ logo, nav, logout }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = function () {
    dispatch(logout());
    navigate("/admin/login");
  };

  return (
    <div className="navigation" ref={nav}>
      <ul>
        <li>
          <NavLink to={"/"}>
            <span className="logo-wrapper">
              <img className="logo" src={logo} alt="clinic logo" />
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink to={"/admin/dashboard"}>
            <span className="icons">
              <FaHome />
            </span>
            <span className="title">Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={"/admin/schedule"}>
            <span className="icons">
              <FaCalendarAlt />
            </span>
            <span className="title">Schedule</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={"/admin/notice"}>
            <span className="icons">
              <FaNoteSticky />
            </span>
            <span className="title">Notice</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={"/admin/activities"}>
            <span className="icons">
              <FaRegClock />
            </span>
            <span className="title">Activities</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={"/admin/reset"}>
            <span className="icons">
              <FaLock />
            </span>
            <span className="title">Password Reset</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/help"}>
            <span className="icons">
              <IoMdHelp />
            </span>
            <span className="title">Help</span>
          </NavLink>
        </li>

        <li>
          <Link onClick={handleLogout}>
            <span className="icons">
              <IoExitOutline />
            </span>
            <span className="title">Sign Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminNav;
