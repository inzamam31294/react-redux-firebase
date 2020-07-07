import React, { Component } from "react";
import { connect } from "react-redux";
// import { loginUser } from "../actions";
import { logoutUser } from "../actions";
// import { db } from "../plugins/firebaseConfig";



class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  // getUserName = () => {
  //   return db.collection('authUsers').doc(loginUser.user.uid).get().then(name => {
  //     return name
  //   })
  // }

  render() {
    const { isLoggingOut, logoutError } = this.props;
    return (
      <div>
        <h1>This is your app's protected area.</h1>
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
    logoutError: state.auth.logoutError
  };
}
export default connect(mapStateToProps)(Home);