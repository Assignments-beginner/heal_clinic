import React from "react";
import { Container } from "react-bootstrap";
import doctor from "../../Images/About/doctor.png";
import hours from "../../Images/About/24-hours.png";
import lab from "../../Images/About/laboratory.png";
import ladyDoctor from "../../Images/About/about.png";
import "./About.css";

const About = () => {
  return (
    <div style={{backgroundColor:'#F9FBFF'}} className="pb-5">
      <h1
        style={{ color: "#0B114A" }}
        className="text-center p-5 text-uppercase"
      >
        Why Choose Us
      </h1>

      <Container className="d-flex pb-5">
        <div className="d-grid px-5">
          <p style={{ color: "#0b114a" }} className="text-center">
            Our top priority is you. Which means you get the answers and
            assurance you deserve with accuracy you can trust.
          </p>

          {/* bar-one */}
          <div>
            <Container className="bg-white shadow radius p-4 d-flex align-items-center justify-content-center">
              <div className="m-3">
                <img src={doctor} alt="" />
              </div>
              <div className="d-grid align-items-center ms-3">
                <h5 className="text-uppercase">Professional Doctors</h5>
                <span style={{ color: "#0b114a" }}>
                  At Heal Clinic, over 50 doctors across 20 specialties are
                  ready to care for you. Our special doctors treats complex or
                  rare conditions in adults and children.
                </span>
              </div>
            </Container>
          </div>
          {/* bar-two */}
          <div>
            <Container className="bg-white shadow radius p-4 d-flex align-items-center justify-content-center">
              <div className="m-3">
                <img src={hours} alt="" />
              </div>
              <div className="d-grid align-items-center ms-3">
                <h5 className="text-uppercase">24 Hours patient support</h5>
                <span style={{ color: "#0b114a" }}>
                  Our state-of-the-art treatment options, comprehensive care and
                  24-hour availability help patients return to good health as
                  quickly as possible.
                </span>
              </div>
            </Container>
          </div>
          {/* bar-three */}
          <div>
            <Container className="bg-white shadow radius p-4 d-flex align-items-center justify-content-center">
              <div className="m-3">
                <img src={lab} alt="" />
              </div>
              <div className="d-grid align-items-center ms-3">
                <h5 className="text-uppercase">Excellients Lab Tests</h5>
                <span style={{ color: "#0b114a" }}>
                  Standardized processes and procedures are used across our
                  global network of central labs for specialized testing and for
                  high-volume safety testing.
                </span>
              </div>
            </Container>
          </div>

          {/* stop */}
        </div>
        <div>
          <img src={ladyDoctor} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default About;
