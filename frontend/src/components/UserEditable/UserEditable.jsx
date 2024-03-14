// UserDisplay.js
import { useEffect, useState } from "react";
import "./usereditable.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, getAllUser } from "../../features/users/userReducer";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";

const UserEditable = ({ users, user, setEdit, setAllUsers }) => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const { allUsers, isLoading, isError, message } = useSelector(
    (state) => state.userInfo
  );

  const [editedUserData, setEditedUserData] = useState({});

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    setUserData(user);
  }, [isError, message, dispatch, user]);

  const handleEdit = () => {
    setEditedUserData({ ...userData });
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
    if (editedUserData) {
      const formattedData = {
        ...editedUserData,
        _id: editedUserData._id.toString(),
      };

      console.log(formattedData);
      dispatch(updateUser(formattedData));
      // setAllUsers(allUsers[0]);
      setEdit(false);
      // window.location.reload();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="user-editable ">
      {isEditing ? (
        <article className="page user-details">
          <div className="card-container">
            <div className="data-field">
              <small>Title</small>
              <input
                className="input-control"
                type="text"
                name="title"
                value={editedUserData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="data-field">
              <small>First Name</small>
              <input
                className="input-control"
                type="text"
                name="firstName"
                value={editedUserData.firstName}
                onChange={handleInputChange}
              />
            </div>
            {userData?.middleName && (
              <div className="data-field">
                <small>Middle Name</small>
                <input
                  className="input-control"
                  type="text"
                  name="middleName"
                  value={editedUserData.middleName}
                  onChange={handleInputChange}
                />
              </div>
            )}
            <div className="data-field">
              <small>Last Name</small>
              <input
                className="input-control"
                type="text"
                name="lastName"
                value={editedUserData.lastName}
                onChange={handleInputChange}
              />
            </div>
            {userData?.staffId && (
              <div className="data-field">
                <small>Staff ID</small>
                <input
                  className="input-control"
                  type="text"
                  name="staffId"
                  value={editedUserData.staffId}
                  onChange={handleInputChange}
                />
              </div>
            )}
            <div className="data-field">
              <small>Status</small>
              <select
                name="status"
                id=""
                value={editedUserData.status}
                onChange={handleInputChange}
              >
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="data-field">
              <small>Employment Type</small>
              <input
                className="input-control"
                type="text"
                name="employmentStatus"
                value={editedUserData.employmentStatus}
                onChange={handleInputChange}
              />
            </div>
            <div className="data-field">
              <small>Department</small>
              <input
                className="input-control"
                type="text"
                name="department"
                value={editedUserData.department}
                onChange={handleInputChange}
              />
            </div>
            <div className="data-field">
              <small>Password</small>
              <input
                className="input-control"
                type="text"
                name="password"
                value={editedUserData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="data-field">
              <small>Username</small>
              <input
                className="input-control"
                type="text"
                name="userName"
                value={editedUserData.userName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="footer">
            <button className="new-btn" onClick={handleUpdate}>
              Save Changes
            </button>
          </div>
        </article>
      ) : (
        <article className="page user-details">
          <div className="card-container">
            <div className="data-field">
              <small>Title</small>
              <h4>{userData?.title}</h4>
            </div>
            <div className="data-field">
              <small>First Name</small>
              <h4>{userData?.firstName}</h4>
            </div>
            {userData?.middleName && (
              <div className="data-field">
                <small>Middle Name</small>
                <h4>{userData?.middleName}</h4>
              </div>
            )}
            <div className="data-field">
              <small>Last Name</small>
              <h4>{userData?.lastName}</h4>
            </div>
            {userData?.staffId && (
              <div className="data-field">
                <small>Staff ID</small>
                <h4>{userData?.staffId}</h4>
              </div>
            )}
            <div className="data-field">
              <small>Status</small>
              <h4>{userData?.status}</h4>
            </div>
            <div className="data-field">
              <small>Employment Type</small>
              <h4>{userData?.employmentStatus}</h4>
            </div>
            <div className="data-field">
              <small>Department</small>
              <h4>{userData?.department}</h4>
            </div>
            <div className="data-field">
              <small>Password</small>
              <h4>{userData?.password}</h4>
            </div>
            <div className="data-field">
              <small>Username</small>
              <h4>{userData?.userName}</h4>
            </div>
          </div>
          {/* buttons  */}
          <div className="buttons">
            <button className="new-btn" onClick={handleEdit}>
              Update Details
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default UserEditable;
