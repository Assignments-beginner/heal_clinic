import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer bg-dark text-white w-100 p-3">
      <Container className="footer-set d-flex align-items-center justify-content-between px-5 py-3">
        {/*/////////////////////// Title ////////////////////// */}
        <div className="text-center d-grid">
          <strong className="text-white">
            <span className="text-success">HEAL</span> CLINIC
          </strong>
          <span className="hidden-footerText">
            Copyright &copy; 2021 All Rights Reserved{" "}
          </span>
        </div>

        {/* ////////////////////// Connect With Us ////////////////////// */}
        <div className="text-center ">
          <div>
            <span className="hidden-footerText">Connect With Us</span>
          </div>
        </div>

        {/*////////////////////// ADDRESS //////////////////////*/}
        <div className="text-center d-grid">
          <strong className="text-white hidden-footerText">ADDRESS</strong>

          <span className="hidden-footerText">
            California St, Stockton, United States
          </span>

          <span>+1 209-507-5152</span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
