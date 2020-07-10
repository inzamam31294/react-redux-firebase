import React from "react";
import { Route, Redirect } from "react-router-dom";


const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    isVerifying,
    isSignedUp,
    ...rest
  }) => (
    <Route
      {...rest}
      render={props =>
        isVerifying ? (
          <div />
        ) : isAuthenticated || isSignedUp ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

  export default ProtectedRoute;