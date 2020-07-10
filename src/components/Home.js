import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";



class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };


  render() {
    const { isLoggingOut, logoutError, name } = this.props;
    // console.log(sname)
    return (
      <div>
        <h1>{ name } This is your app's protected area.</h1>
        <p>Any routes here will also be protected</p>
        <button onClick={this.handleLogout} className="bg-orange-500 rounded p-2">Logout</button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
    name: state.auth.name,
    // sname: state.signup.name
  };
}
export default connect(mapStateToProps)(Home);