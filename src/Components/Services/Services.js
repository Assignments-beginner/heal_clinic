import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <img
              width="256"
              height="256"
              src={singleServiceDetails?.doctorImg}
              alt=""
            />
          </div>
          <div className="ms-5 pe-5">
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
              <p>
                We will elaborate everything about{" "}
                <span style={{ color: "#3EBBC4" }}>
                  {singleServiceDetails?.serviceTitle}
                </span>
                &nbsp;together. No worries at all feel free and nice. Let's
                check the description below.
              </p>
            </div>
          </div>
        </div>
      </Container>
      {/* Service Description */}
      <Container className="mb-5 p-5">
        <div className="d-flex align-items-center">
          <div className="me-5">
            <h3>{singleServiceDetails?.serviceTitle}</h3>
            <div>{singleServiceDetails?.description}</div>
            <div className="mt-3">
              <strong>
                For more information check our Appointment section.
              </strong>
            </div>
          </div>

          <div>
            <img
              width="510"
              height="345"
              src={singleServiceDetails?.serviceImg}
              alt=""
            />
          </div>
        </div>
      </Container>
      <div className="text-center pb-5">
        <Link className="text-decoration-none" to="/home">
          {" "}
          <span style={{ color: "#3EBBC4", fontSize: '20px' }} >Back to Services</span>{" "}
        </Link>
      </div>
    </Container>
  );
};

export default Services;
