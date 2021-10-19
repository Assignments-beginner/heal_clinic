import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import footerLogo from "../../Images/footer-logo.png";
const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "whiteSmoke" }}
      className="main-footer w-100"
    >
      <Container className="d-flex align-items-center justify-content-between py-4">
        {/* ////////////////////// Connect With Us ////////////////////// */}
        <div className="text-center d-grid">
          <strong style={{ color: "#0B114A" }}>Connect With Us</strong>
          <span>Feel Free - Like, Share and Subscribe</span>
          <div className="social-media d-flex justify-content-center fs-4">
            <a
              href="https://www.facebook.com/healclinicbelgium"
              target="_blank"
            >
              <i className="fab fa-facebook px-2"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UC-ygYiYn3YKSAbKS9hw9eXw"
              target="_blank"
            >
              <i className="fab fa-youtube px-2"></i>
            </a>
            <a href="https://twitter.com/healclinichom" target="_blank">
              <i className="fab fa-twitter px-2"></i>
            </a>
          </div>
        </div>

        {/* ////////////////////// Open Hours ////////////////////// */}
        <div className="text-center mt-2">
          <p style={{ color: "#0B114A" }}>
            <strong>Open Hours</strong>
          </p>
          <p>Mon-Wed &nbsp; 8:00AM - 10:00PM</p>
          <p>Thurs-Fri &nbsp; 8:00AM - 10:00AM</p>
          <p style={{ color: "#0B114A" }}>
            <strong>Emergency 24/7</strong>
          </p>
        </div>

        {/*////////////////////// ADDRESS //////////////////////*/}
        <div className="text-center d-grid">
          <strong style={{ color: "#0B114A" }}>ADDRESS</strong>

          <span>California St, Stockton, United States</span>

          <span>
            {" "}
            <i style={{ color: "#0B114A" }} class="fas fa-phone"></i> +1
            209-507-5152
          </span>
        </div>
      </Container>
      <div className="w-100 py-3" style={{ backgroundColor: "#0B114A" }}>
        {/*/////////////////////// Title ////////////////////// */}
        <div className="d-grid justify-content-center">
          <Container>
            <div className="d-flex align-items-center justify-content-center">
              <img src={footerLogo} alt="" />
              <strong className="text-white ms-2">
                <span style={{ color: "#3EBBC4" }}>HEAL</span> CLINIC
              </strong>
            </div>
            <span className="text-white">
              Copyright &copy; 2021 All Rights Reserved{" "}
            </span>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
