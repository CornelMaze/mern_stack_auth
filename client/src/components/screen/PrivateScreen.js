import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const PrivateScreen = ({ history }) => {
 const [error, setError] = useState("");
 const [privateData, setPrivate] = useState("");

 useEffect(() => {
  if (!localStorage.getItem("authToken")) {
   history.pushState("/login");
  }

  const fetchPrivateData = async () => {
   const config = {
    headers: {
     "Content-Type": "application/json",
     Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
   };

   try {
    const { data } = await axios.get("/api/private", config);
   } catch (error) {
    localStorage.removeItem("authToken");
    setError("You are not authorized please login");
   }
  };
  fetchPrivateData();
 }, [history]);

 const logoutHandler = () => {
  localStorage.removeItem("authToken");
  history.push("/login");
 };
 return (
  <div>
   {error ? <span>{error}</span> : <div>{privateData}</div>}
   <h2>Welcome to the private resource</h2>
   <button className="btn btn-primary" onClick={logoutHandler}>
    Logout
   </button>
  </div>
 );
};

export default PrivateScreen;
