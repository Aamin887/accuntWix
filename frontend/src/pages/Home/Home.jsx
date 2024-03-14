import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <h1>Login as :</h1>
        <div className="links">
          <Link to={"/admin"}>Admin</Link>
          <Link to={"/login"}> User</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
