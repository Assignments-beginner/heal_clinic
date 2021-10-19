import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import footerLogo from "../../Images/footer-logo.png";
const Footer = () => {
  return (
    <div className="main-footer w-100">
      <Container
        sty
        className="d-flex align-items-center justify-content-between px-5 py-3"
      >
        {/* ////////////////////// Connect With Us ////////////////////// */}
        <div className="text-center">
          <div>
            <span>Connect With Us</span>
          </div>
        </div>

        {/*////////////////////// ADDRESS //////////////////////*/}
        <div className="text-center d-grid">
          <strong>ADDRESS</strong>

          <span>California St, Stockton, United States</span>

          <span>+1 209-507-5152</span>
        </div>
      </Container>
      <div className="w-100 py-3" style={{ backgroundColor: "#0B114A" }}>
        {/*/////////////////////// Title ////////////////////// */}
        <div className="d-grid justify-content-center">
          <div className="d-flex align-items-center justify-content-center">
            <img src={footerLogo} alt="" />
            <strong className="text-white ms-2">
              <span style={{ color: "#3EBBC4" }}>HEAL</span> CLINIC
            </strong>
          </div>
          <span className="text-white">Copyright &copy; 2021 All Rights Reserved </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
