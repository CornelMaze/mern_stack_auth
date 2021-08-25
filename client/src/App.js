import React from "react";
// routing
import PrivateRoute from "./components/routing/PrivateRoute";

// screens
import PrivateScreen from "./components/screen/PrivateScreen";
import LoginScreen from "./components/screen/LoginScreen";
import RegisterScreen from "./components/screen/RegisterScreen";
import ForgotPasswordScreen from "./components/screen/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screen/ResetPasswordScreen";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
function App() {
 return (
  <BrowserRouter>
   <div className="app">
    <Switch>
     <PrivateRoute exact path="/" component={PrivateScreen} />
     <Route path="/login" exact component={LoginScreen} />
     <Route path="/register" exact component={RegisterScreen} />
     <Route path="/forgotpassword" exact component={ForgotPasswordScreen} />
     <Route
      path="/passwordreset/:resetToken"
      exact
      component={ResetPasswordScreen}
     />
    </Switch>
   </div>
  </BrowserRouter>
 );
}

export default App;
