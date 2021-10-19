import React from "react";
import { Route, Redirect } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  // const { user, isLoading } = useAuth();
  const { user } = useAuth();
  /* const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (isLoading) {
    return (
      <div style={style}>
        <div
          className="spinner-border spinner-border-sm text-dark"
          style={{ width: "10rem", height: "10rem" }}
        ></div>
      </div>
    );
  } */
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
