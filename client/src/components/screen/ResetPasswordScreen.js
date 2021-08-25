import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ResetPasswordScreen = ({ history, match }) => {
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const [error, setError] = useState("");
 const [success, setSuccess] = useState("");

 const resetPasswordHandler = async (e) => {
  e.preventDefault();

  const config = {
   headers: {
    "Content-Type": "application/json",
   },
  };

  if (password !== confirmPassword) {
   setPassword("");
   setConfirmPassword("");
   setTimeout(() => {
    setError("");
   }, 5000);
   return setError("Passwords don't match");
  }
  try {
   const { data } = await axios.put(
    `/api/auth/passwordreset/${match.params.resetToken}`,
    {
     password,
    },
    config
   );

   // console.log(data);
   setSuccess(data.data);
  } catch (error) {
   setError(error.response.data.error);
   setTimeout(() => {
    setError("");
   }, 5000);
  }
 };

 return (
  <div>
   <form onSubmit={resetPasswordHandler}>
    <h3>Reset Password</h3>
    {error && <span>{error}</span>}
    {success && (
     <span>
      {success}
      <Link to="/login">Login</Link>
     </span>
    )}
    <div className="form-group">
     <label htmlFor="password">New Password</label>
     <input
      type="text"
      id="password"
      placeholder="Enter new password"
      autoComplete="true"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
     />
    </div>
    <div className="form-group">
     <label htmlFor="confirmpassword">Confirm New Password</label>
     <input
      type="text"
      required
      id="confirmpassword"
      placeholder="confirm new password"
      autoComplete="true"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
     />
    </div>
    <button type="submit" className="btn btn-primary">
     Reset Password
    </button>
   </form>
  </div>
 );
};

export default ResetPasswordScreen;
