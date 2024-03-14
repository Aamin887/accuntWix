import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaHome, FaLock } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import "./userDashNav.css";
import { useDispatch } from "react-redux";

function UserDashNav({ logo, nav, logout }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = function (e) {
    e.preventDefault();

    dispatch(logout());
    navigate("/");
    return;
  };

  return (
    <div className="navigation" ref={nav}>
      <ul>
        <li>
          <span className="logo-wrapper">
            <img className="logo" src={logo} alt="clinic logo" />
          </span>
        </li>

        <li>
          <NavLink to={"/dashboard/home"}>
            <span className="icons">
              <FaHome />
            </span>
            <span className="title">Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={"/dashboard/reset"}>
            <span className="icons">
              <FaLock />
            </span>
            <span className="title">Password Reset</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={"/dashboard/help"}>
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

export default UserDashNav;
