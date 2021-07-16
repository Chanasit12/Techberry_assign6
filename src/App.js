import {useState} from "react";
import Login from "./templates/login/Login.js";
import ForgotPassword from "./templates/forgotPassword/ForgotPassword"
import {
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div >
      <Switch>
        <Route path="/" component={Login} exact/>
        <Route path="/forgotpassword" component={ForgotPassword}/>
      </Switch>
    </div>
  );
}

export default App;
