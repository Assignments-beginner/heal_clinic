import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import footerLogo from "../../Images/footer-logo.png";
const Footer = () => {
  return (
    <div className="main-footer text-white w-100 p-3">
      <Container className="d-flex align-items-center justify-content-between px-5 py-3">
        {/*/////////////////////// Title ////////////////////// */}
        <div className="d-grid">
          <div className="d-flex align-items-center justify-content-center">
            <img src={footerLogo} alt="" />
            <strong className="text-white ms-2">
              <span style={{ color: "#3EBBC4" }}>HEAL</span> CLINIC
            </strong>
          </div>
          <span>Copyright &copy; 2021 All Rights Reserved </span>
        </div>

        {/* ////////////////////// Connect With Us ////////////////////// */}
        <div className="text-center">
          <div>
            <span>Connect With Us</span>
          </div>
        </div>

        {/*////////////////////// ADDRESS //////////////////////*/}
        <div className="text-center d-grid">
          <strong className="text-white hidden-footerText">ADDRESS</strong>

          <span>California St, Stockton, United States</span>

          <span>+1 209-507-5152</span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
