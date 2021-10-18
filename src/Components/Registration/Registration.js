import React from 'react';
import { Container, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Registration = () => {
    return (
        <Container className="mt-5 pt-5 w-25">
        <p className="text-secondary fs-1">Registration</p>
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
  
          &nbsp;
          &nbsp;
  
          <Link to="/signin">Sign In</Link>
  
          {/* Display Error */}
          <p className="text-danger"></p>
  
          {/* Register Button */}
          <Button variant="secondary" type="submit">
            Sign Up
          </Button>
        </Form>
      </Container>
      
    );
};

export default Registration;