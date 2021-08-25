import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import React from "react";

const RegisterScreen = ({ history }) => {
 const [username, setUserName] = useState("");
 const [password, setPassword] = useState("");
 const [email, setEmail] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const [error, setError] = useState("");

 useEffect(() => {
  if (localStorage.getItem("authToken")) {
   history.push("/");
  }
 }, [history]);

 const registerHandler = async (e) => {
  e.preventDefault();
  console.log({ username, password, email });
  const config = {
   header: {
    "Content-Type": "application/json",
   },
  };
  if (password !== confirmPassword) {
   setPassword("");
   setConfirmPassword("");
   setTimeout(() => {
    setError("");
   }, 5000);
   return setError("Passwords do not match");
  }
  try {
   const { data } = await axios.post(
    "/api/auth/register",
    { username, email, password },
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
   <form action="" onSubmit={registerHandler}>
    <h3>Register</h3>
    {error && <span className="alert alert-danger">{error}</span>}
    <div className="form-group">
     <label htmlFor="">Username</label>
     <input
      type="text"
      id="name"
      className="form-control"
      placeholder="Enter username"
      value={username}
      onChange={(e) => setUserName(e.target.value)}
     />
    </div>
    <div className="form-group">
     <label htmlFor="">Email</label>
     <input
      className="form-control"
      type="text"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
     />
    </div>
    <div className="form-group">
     <label htmlFor="">Password</label>
     <input
      className="form-control"
      type="text"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
     />
    </div>
    <div className="form-group">
     <label htmlFor="">Confirm Password</label>
     <input
      className="form-control"
      type="text"
      id="confirm_password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
     />
    </div>
    <button className="btn btn-primary">Register</button>
    <span>
     Already have an account <Link to="/login">Login</Link>
    </span>
   </form>
  </div>
 );
};

export default RegisterScreen;
