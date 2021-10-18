import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <Container className="mt-4 w-25">
      <p className="text-primary fs-1">Registration</p>
      <Form>
        {/* Name Field */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            //   onBlur={}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
        {/* Email Field */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            //   onBlur={}
            type="email"
            placeholder="Enter Email"
          />
        </Form.Group>
        {/* Password Field */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            //   onBlur={}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <span>Already have an account?</span>
        &nbsp; &nbsp;
        <Link to="/signin">Sign In</Link>
        {/* Display Error */}
        <p className="text-danger"></p>
        {/* Register Button */}
        <div className="mb-5">
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Registration;
