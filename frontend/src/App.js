import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Login,
  Register,
  UserDash,
  AdminLogin,
  AdminDash,
  Nomatch,
  ChangePassword,
  UserInfo,
  UsersPage,
  Home,
} from "./pages/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* authentication routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password" element={<ChangePassword />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          {/* user dashboard routes */}

          <Route path="/dashboard" element={<UserDash />}>
            <Route path="/dashboard/home" element={<UserInfo />} />
            <Route path="/dashboard/home" element={<Nomatch />} />
            <Route path="/dashboard/help" element={<Nomatch />} />
            <Route path="*" element={<Nomatch />} />
          </Route>
          {/* admin dashboard routes */}
          <Route path="/admin" element={<AdminDash />}>
            <Route path="/admin/dashboard" element={<UsersPage />} />
            <Route path="/admin/schedule" element={<Nomatch />} />
            <Route path="/admin/notice" element={<Nomatch />} />
            <Route path="/admin/activities" element={<Nomatch />} />
            <Route path="/admin/reset" element={<Nomatch />} />
            <Route path="/admin/help" element={<Nomatch />} />
          </Route>
          {/* all routes - 404.html */}
          <Route path="*" element={<Nomatch />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
