import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Treatment.css";
const Treatment = () => {
  return (
    <div style={{ backgroundColor: "#F9FBFF" }} className="pb-5">
      <h2
        style={{ color: "#0B114A" }}
        className="text-center p-5 text-uppercase"
      >
        check out more treatments from our doctors
      </h2>

      {/* (1) Treatments Right */}
      <Container className="mb-5 p-5 bg-white shadow radius">
        <Row className="d-flex align-items-center justify-content-between">
          <Col xl={8} lg={8}>
            {/* Special Treatments  */}
            <div className="pb-5">
              <h3>Breast Cancer</h3>
              <p>
                Breast cancer most often begins with cells in the milk-producing
                ducts (invasive ductal carcinoma). Breast cancer may also begin
                in the glandular tissue called lobules (invasive lobular
                carcinoma) or in other cells or tissue within the breast.
              </p>
            </div>
            {/* Special Doctor ID  */}
            <div>
              <strong>By</strong> &nbsp;{" "}
              <img
                width="32"
                height="32"
                className="rounded-circle"
                src="https://randomuser.me/api/portraits/women/51.jpg"
                alt=""
              />{" "}
              <span style={{ color: "#3EBBC4" }}>Dr. Virginia Apgar</span>
            </div>
          </Col>
          <Col xl={4} lg={4} className="treatment-banner">
            <div>
              <img
                width="100%"
                height="100%"
                src="https://media.istockphoto.com/photos/breast-cancer-awareness-picture-id897593850?b=1&k=20&m=897593850&s=170667a&w=0&h=uG4wRbK1Jhl-ILDF6dFIphCmsVcnXTZRqYAF7WwOK54="
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* (2) Treatments Left */}
      <Container className="mb-5 p-5 bg-white shadow radius">
        <Row
          style={{ flexDirection: "row-reverse" }}
          className="d-flex align-items-center justify-content-between"
        >
          <Col xl={8} lg={8}>
            <div className="pb-5">
              <h3>Knee Treatments</h3>
              <p>
                Pain is a common knee problem that can originate in any of the
                bony structures compromising the knee joint the kneecap or the
                ligaments, tendons, and cartilage of the knee. Knee pain can be
                aggravated by physical activity, as well as obesity.
              </p>
            </div>
            <div>
              <strong>By</strong> &nbsp;{" "}
              <img
                width="32"
                height="32"
                className="rounded-circle"
                src="https://randomuser.me/api/portraits/men/80.jpg"
                alt=""
              />{" "}
              <span style={{ color: "#3EBBC4" }}>Dr. Richard Thomson</span>
            </div>
          </Col>
          <Col xl={4} lg={4} className="treatment-banner">
            <div>
              <img
                width="100%"
                height="100%"
                src="https://media.istockphoto.com/photos/physical-doctor-consulting-with-patient-knee-problems-physical-picture-id1136089250?b=1&k=20&m=1136089250&s=170667a&w=0&h=Y8SzTM3U3doNltULm1--C1xaUcoK8FDvG0rdajKIjLs="
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* (3) Treatments Right */}
      <Container className="mb-5 p-5 bg-white shadow radius">
        <Row className="d-flex align-items-center justify-content-between">
          <Col xl={8} lg={8}>
            <div className="pb-5">
              <h3>Light Therapy</h3>
              <p>
                Light therapy is a way to treat seasonal affective disorder
                (SAD) and certain other conditions by exposure to artificial
                light. SAD is a type of depression that occurs at a certain time
                each year, usually in the fall or winter. During light therapy,
                you sit or work near a device called a light therapy box.
              </p>
            </div>
            <div>
              <strong>By</strong> &nbsp;{" "}
              <img
                width="32"
                height="32"
                className="rounded-circle"
                src="https://randomuser.me/api/portraits/women/52.jpg"
                alt=""
              />{" "}
              <span style={{ color: "#3EBBC4" }}>Dr. Ana Aslan</span>
            </div>
          </Col>
          <Col xl={4} lg={4} className="treatment-banner">
            <div>
              <img
                width="100%"
                height="100%"
                src="https://media.istockphoto.com/photos/healing-pain-with-infrared-light-therapy-picture-id1279799540?b=1&k=20&m=1279799540&s=170667a&w=0&h=Mr4gNHokbWtQGsgr0KHFbtYGKpqzomLus9Aza91DbMs="
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* (4) Treatments Left */}
      <Container className="mb-5 p-5 bg-white shadow radius">
        <div className="d-flex align-items-center">
          <div>
            <img
              width="100%"
              height="100%"
              src="https://media.istockphoto.com/photos/man-at-the-psychotherapist-picture-id610262070?b=1&k=20&m=610262070&s=170667a&w=0&h=OdrgJgVfjEo4s4H7cnaTatS6PVFTQT6TPSmA5c5-yuQ="
              alt=""
            />
          </div>
          <div className="ms-5">
            <div className="pb-5">
              <h3>Psychiatric Treatments‎</h3>
              <p>
                Psychiatrists use a variety of treatments – including various
                forms of psychotherapy, medications, psychosocial interventions
                and other treatments (such as electroconvulsive therapy or ECT),
                depending on the needs of each patient.
              </p>
            </div>
            <div>
              <strong>By</strong> &nbsp;{" "}
              <img
                width="32"
                height="32"
                className="rounded-circle"
                src="https://randomuser.me/api/portraits/men/78.jpg"
                alt=""
              />{" "}
              <span style={{ color: "#3EBBC4" }}>Dr. Josh Barret</span>
            </div>
          </div>
        </div>
      </Container>
      {/* (5) Treatments Right */}
      <Container className="mb-5 p-5 bg-white shadow radius">
        <div className="d-flex align-items-center">
          <div className="me-5">
            <div className="pb-5">
              <h3>Hypnotherapy</h3>
              <p>
                Hypnotherapy is a type of mind-body intervention in which
                hypnosis is used to create a state of focused attention and
                increased suggestibility in the treatment of a medical or
                psychological disorder or concern.
              </p>
            </div>
            <div>
              <strong>By</strong> &nbsp;{" "}
              <img
                width="32"
                height="32"
                className="rounded-circle"
                src="https://randomuser.me/api/portraits/men/90.jpg"
                alt=""
              />{" "}
              <span style={{ color: "#3EBBC4" }}>Dr. Robert William</span>
            </div>
          </div>
          <div>
            <img
              width="100%"
              height="100%"
              src="https://media.istockphoto.com/photos/male-therapist-using-hypnosis-therapy-on-young-woman-picture-id1272205203?b=1&k=20&m=1272205203&s=170667a&w=0&h=w28_X2vYZIgVlfE8_eIFnEnxz8OSqr0W7W5zv5b90ws="
              alt=""
            />
          </div>
        </div>
      </Container>

      {/* (6) Treatments Left */}
      <Container className="mb-5 p-5 bg-white shadow radius">
        <div className="d-flex align-items-center">
          <div>
            <img
              width="100%"
              height="100%"
              src="https://media.istockphoto.com/photos/will-it-be-quarantine-for-you-picture-id1216012061?b=1&k=20&m=1216012061&s=170667a&w=0&h=ZRne4DgdokX4PZCvEPeVOVuIBtKYhcg8J1EgGLrPJTY="
              alt=""
            />
          </div>
          <div className="ms-5">
            <div className="pb-5">
              <h3>Infection Control Measures</h3>
              <p>
                No one should catch an infection while receiving health care,
                yet, these infections can spread through outbreaks and many
                regular care practices, affecting hundreds of millions of people
                across the world every year.
              </p>
            </div>
            <div>
              <strong>By</strong> &nbsp;{" "}
              <img
                width="32"
                height="32"
                className="rounded-circle"
                src="https://randomuser.me/api/portraits/women/53.jpg"
                alt=""
              />{" "}
              <span style={{ color: "#3EBBC4" }}>Dr. Helen Brooke</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Treatment;
