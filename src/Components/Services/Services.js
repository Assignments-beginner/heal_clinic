import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../Services/Services.css";

const Services = () => {
  const { dynamicId } = useParams();
  const [services, setServices] = useState([]);
  const [singleServiceDetails, setSingleServiceDetails] = useState({});

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    const getService = services.find(
      (serviceDetails) => serviceDetails.id === dynamicId
    );
    console.log(getService);
    setSingleServiceDetails(getService);
  }, [dynamicId, services]);
  return (
    <Container>
      <h2
        style={{ color: "#0B114A" }}
        className="text-center p-5 text-uppercase"
      >
        Thank you for choosing our particular services
      </h2>
      {/* Doctor's Intro */}
      <Container className="mb-5 px-5">
        <Row className="d-flex align-items-center">
          <Col xl={6} lg={6} sm={12}>
            <div className="d-flex justify-content-center">
              <img
                width="256"
                height="256"
                src={singleServiceDetails?.doctorImg}
                alt=""
              />
            </div>
          </Col>
          <Col xl={6} lg={6} sm={12} className="res-doctor-intro">
            <h3>
              Hi There I'm{" "}
              <span style={{ color: "#3EBBC4" }}>
                {singleServiceDetails?.doctorName}
              </span>
            </h3>
            <div>
              <span>The</span>&nbsp;
              <span style={{ color: "#3EBBC4" }}>
                {singleServiceDetails?.serviceTitle}
              </span>
              &nbsp;
              <span>Specialist</span>
            </div>
            <div className="mt-5">
              <p className="dr-advice">
                We will elaborate everything about{" "}
                <span style={{ color: "#3EBBC4" }}>
                  {singleServiceDetails?.serviceTitle}
                </span>
                &nbsp;together. No worries at all feel free and nice. Let's
                check the description below.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Service Description */}
      <Container className="mb-5 p-5">
        <Row className="d-flex align-items-center">
          <Col className="me-5">
            <h3>{singleServiceDetails?.serviceTitle}</h3>
            <div>{singleServiceDetails?.description}</div>
            <div className="mt-3">
              <strong>
                For more information check our Appointment section.
              </strong>
            </div>
          </Col>

          <Col>
            <img
              width="510"
              height="345"
              src={singleServiceDetails?.serviceImg}
              alt=""
            />
          </Col>
        </Row>
      </Container>
      <div className="text-center pb-5">
        <Link className="text-decoration-none" to="/home">
          {" "}
          <span style={{ color: "#3EBBC4", fontSize: "20px" }}>
            Back To Services
          </span>{" "}
        </Link>
      </div>
      {/* End of main Container */}
    </Container>
  );
};

export default Services;
