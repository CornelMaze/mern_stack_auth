import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Header = ({ history }) => {
 const logoutHandler = () => {
  localStorage.removeItem("authToken");
  <Redirect to="/login" />;
 };
 return (
  <nav className="navbar navbar-expand navbar-dark bg-dark">
   <Link className="navbar-brand" to="/">
    CornelPrime API Auth
   </Link>
   <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
     <li className="nav-item">
      <Link className="nav-link" to="/">
       Dashboard
      </Link>
     </li>
    </ul>
    <ul className="nav navbar-nav ml-auto">
     <li className="nav-item">
      <Link className="nav-link" to="/login">
       Login
      </Link>
     </li>
     <li className="nav-item">
      <Link className="nav-link" to="/register">
       Register
      </Link>
     </li>
     <li className="nav-item">
      <Link className="nav-link" onClick={logoutHandler}>
       Sign Out
      </Link>
     </li>
    </ul>
   </div>
  </nav>
 );
};

export default Header;
