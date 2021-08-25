import React, { useState } from "react";

const SignUp = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const changeEmail = (e) => {
  setEmail(e.target.value);
 };
 const changePassword = (e) => {
  setPassword(e.target.value);
 };
 const formSubmit = (e) => {
  e.preventDefault();
  console.log({ email, password });
 };
 return (
  <div className="container">
   <div className="card mt-3">
    <div className="card-body">
     <form action="">
      <div className="">
       <div className="form-group">
        <label htmlFor="">Email</label>
        <input
         type="text"
         id="email"
         name="email"
         value={email}
         onChange={changeEmail}
         className="form-control"
        />
       </div>
       <div className="form-group">
        <label htmlFor="">Password</label>
        <input
         type="password"
         value={password}
         onChange={changePassword}
         className="form-control"
         name="password"
         id="password"
        />
       </div>
       <button
        onClick={formSubmit}
        type="submit"
        className="btn btn-primary mt-2"
       >
        Sign Up
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
};

export default SignUp;
