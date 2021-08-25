import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import React from "react";

const LoginScreen = ({ history }) => {
 const [password, setPassword] = useState("");
 const [email, setEmail] = useState("");
 const [error, setError] = useState("");

 useEffect(() => {
  if (localStorage.getItem("authToken")) {
   history.push("/");
  }
 }, [history]);

 const loginHandler = async (e) => {
  e.preventDefault();
  const config = {
   header: {
    "Content-Type": "application/json",
   },
  };

  try {
   const { data } = await axios.post(
    "/api/auth/login",
    { email, password },
    config
   );

   localStorage.setItem("authToken", data.token);
   history.push("/");
  } catch (error) {
   setError(error.response.data.error);
   setTimeout(() => {
    setError("");
   }, 5000);
  }
 };
 return (
  <div className="container">
   <form className="form" onSubmit={loginHandler}>
    <h3>Login</h3>
    {error && <span className="alert alert-danger m-2 col">{error}</span>}

    <div className="form-group">
     <label htmlFor="">Email</label>
     <input
      className="form-control"
      type="text"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      tabIndex={1}
     />
    </div>
    <div className="form-group">
     <label htmlFor="">
      Password
      <Link to="/forgotpassword" tabIndex={4}>
       Forgot Password?
      </Link>
     </label>
     <input
      className="form-control"
      type="text"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      tabIndex={2}
     />
    </div>

    <button tabIndex={3} className="btn btn-primary">
     Login
    </button>
    <span>
     Don't have an account <Link to="/register">Register</Link>
    </span>
   </form>
  </div>
 );
};
export default LoginScreen;
