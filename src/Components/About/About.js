import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import doctor from "../../Images/About/doctor.png";
import hours from "../../Images/About/24-hours.png";
import lab from "../../Images/About/laboratory.png";
import ladyDoctor from "../../Images/About/about.png";
import ladyDoctorRes from "../../Images/About/about_res.jpg";
import "./About.css";

const About = () => {
  return (
    <div style={{ backgroundColor: "#F9FBFF" }} className="pb-5">
      <h1
        style={{ color: "#0B114A" }}
        className="text-center p-5 text-uppercase"
      >
        Why Choose Us
      </h1>

      <Col className="about-res-img" sm={12}>
        <img src={ladyDoctorRes} alt="" />
      </Col>

      <div className="border border-danger px-5 pb-5">
        <Row className="d-flex">
          <Col
            xl={7}
            lg={7}
            sm={12}
            className="d-flex justify-content-center px-5 border border-danger"
          >
            <div className="d-grid">
              <p style={{ color: "#0b114a" }} className="text-center">
                Our top priority is you. Which means you get the answers and
                assurance you deserve with accuracy you can trust.
              </p>

              {/* bar-one */}
              <div>
                <Container className="bg-white shadow radius mb-3 ps-2 py-4 pe-4 about-bar">
                  <div className="mx-5">
                    <img src={doctor} alt="" />
                  </div>
                  <div className="d-grid align-items-center">
                    <h5 className="text-uppercase">Professional Doctors</h5>
                    <span style={{ color: "#0b114a" }}>
                      At Heal Clinic, over 50 doctors across 20 specialties are
                      ready to care for you. Our special doctors treats complex
                      or rare conditions in adults and children.
                    </span>
                  </div>
                </Container>
              </div>
              {/* bar-two */}
              <div>
                <Container className="bg-white shadow radius mb-3 ps-2 py-4 pe-4 about-bar">
                  <div className="mx-5">
                    <img src={hours} alt="" />
                  </div>
                  <div className="d-grid align-items-center">
                    <h5 className="text-uppercase">24 Hours patient support</h5>
                    <span style={{ color: "#0b114a" }}>
                      Our state-of-the-art treatment options, comprehensive care
                      and 24-hour availability help patients return to good
                      health as quickly as possible.
                    </span>
                  </div>
                </Container>
              </div>
              {/* bar-three */}
              <div>
                <Container className="bg-white shadow radius mb-3 ps-2 py-4 pe-4 about-bar">
                  <div className="mx-5">
                    <img src={lab} alt="" />
                  </div>
                  <div className="d-grid align-items-center">
                    <h5 className="text-uppercase">Excellients Lab Tests</h5>
                    <span style={{ color: "#0b114a" }}>
                      Standardized processes and procedures are used across our
                      global network of central labs for specialized testing and
                      for high-volume safety testing.
                    </span>
                  </div>
                </Container>
              </div>

              {/* stop */}
            </div>
          </Col>
          {/* about-img  */}
          <Col xl={5} lg={5} sm={12} className="about-img border border-danger">
            <img src={ladyDoctor} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
