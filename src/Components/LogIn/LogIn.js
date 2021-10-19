import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const LogIn = () => {
  const {
    signInWithGoogle,
    passwordBlurHandler,
    emailBlurHandler,
    signInHandler,
    error,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  // console.log(location.state?.from);
  const redirect_uri = location.state?.from || "/home";

  const googleLoginHandler = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
    /* .catch((error) => {
        setError(error.message);
      }); */
  };

  const redirectSignInHandler = () => {
    signInHandler().then((result) => {
      history.push(redirect_uri);
    });
  }

  return (
    <Container className="mt-4 w-25">
      <p className="text-primary fs-1">Please Sign In</p>
      <Form>
        {/* Email Field */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onBlur={emailBlurHandler}
            type="email"
            placeholder="Enter Email"
          />
        </Form.Group>
        {/* Password Field */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={passwordBlurHandler}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <span>Don't have an account?</span>
        &nbsp; &nbsp;
        <Link to="/registration">Create One</Link>
        {/* Display Error */}
        <p className="text-danger">{error}</p>
        {/* Register Button */}
        <Button
          onClick={redirectSignInHandler}
          className="mt-3"
          variant="primary"
          type="submit"
        >
          Sign In
        </Button>
      </Form>

      <div className="mt-5 mb-5">
        <p className="text-secondary">Or, you can also sign in with</p>

        <Button
          onClick={googleLoginHandler}
          variant="outline-secondary px-5"
          size="sm"
        >
          Google
        </Button>
      </div>
    </Container>
  );
};

export default LogIn;
