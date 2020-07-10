import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import './styles/tailwind.css'
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App(props) {
  const { isAuthenticated, isVerifying, isSignedUp } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isSignedUp={isSignedUp}
      />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
    isSignedUp: state.signup.isSignedUp,
    // signUpVerify: state.signup.signUpVerify
  };
}
export default connect(mapStateToProps)(App);
