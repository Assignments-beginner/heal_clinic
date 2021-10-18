import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Header.css'
import mainLogo from '../../Images/main-logo.png'
const Header = () => {
  return (
    <Navbar
      className="nav-font p-3"
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <div className="me-5 d-flex align-items-center">
          <div>
            <NavLink to="/home">
              <img src={mainLogo} alt="" />
            </NavLink>
          </div>

          <div>
            <strong className="text-white ms-2 fs-5">
              <span style={{color:'#3EBBC4'}}>HEAL</span> CLINIC
            </strong>
          </div>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink
              activeClassName="navs-active"
              className="res-navlink navs me-5 text-decoration-none"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="navs-active"
              className="res-navlink navs me-5 text-decoration-none"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              activeClassName="navs-active"
              className="res-navlink navs me-5 text-decoration-none"
              to="/treatment"
            >
              Treatment
            </NavLink>
            <NavLink
              activeClassName="navs-active"
              className="res-navlink navs me-5 text-decoration-none"
              to="/blog"
            >
              Blog
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
