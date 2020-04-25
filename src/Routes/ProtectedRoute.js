import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, userAuth, ...rest }) => {
  // userAuth is from state and isAuthenticated is from localstorage
  let isAuthenticated = JSON.parse(localStorage.getItem("userState"))
    .isAuthenticated;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (userAuth || isAuthenticated) {
          return <Component {...rest} {...props} />;
        } else {
          return <Redirect to="be-login"></Redirect>;
        }
      }}
    />
  );
};

export default ProtectedRoute;
