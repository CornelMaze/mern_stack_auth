import React, { useState } from "react";
import axios from "axios";

const ForgotPasswordScreen = () => {
 const [email, setEmail] = useState("");
 const [error, setError] = useState("");
 const [success, setSuccess] = useState("");
 const forgotPasswordHandler = async (e) => {
  e.preventDefault();
  const config = {
   headers: {
    "Content-Type": "application/json",
   },
  };

  try {
   const { data } = await axios.post(
    "/api/auth/forgotpassword",
    { email },
    config
   );

   setSuccess(data.data);
  } catch (error) {
   setError(error.response.data.error);
   setEmail("");
   setTimeout(() => {
    setError("");
   }, 5000);
  }
 };
 return (
  <div className="container">
   <form onSubmit={forgotPasswordHandler} className="form">
    <h3>Forgot Password</h3>
    <div className="form-group">
     <p>
      Please enter the email address you registered your account with. We will
      send you reset password confirmation to this email
     </p>
     <label htmlFor="">Email</label>
     <input
      className="form-control"
      type="text"
      required
      id="email"
      placeholder="Email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
     />
    </div>
    <button className="btn btn-primary" type="submit">
     Send Email
    </button>
   </form>
  </div>
 );
};

export default ForgotPasswordScreen;
