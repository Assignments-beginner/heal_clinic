import React from "react";
import {
  Col,
  Form,
  Row,
  Button,
  FloatingLabel,
  Container,
} from "react-bootstrap";

const Appointment = () => {
  return (
    <div style={{ backgroundColor: "#F9FBFF" }} className="pb-5">
      <h1
        style={{ color: "#0B114A" }}
        className="text-center p-5 text-uppercase"
      >
        Make An Appointement
      </h1>
      <Container className="px-5 d-flex justify-content-between align-items-start">
        <div>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>Second Name</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <FloatingLabel controlId="floatingTextarea2" label="Message">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>

            <Form.Group className="mt-3 mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        <div className="p-5 shadow bg-white">
          <h4 style={{ color: "#0B114A" }} className="text-uppercase">
            <i style={{ color: "#3EBBC4" }} className="fas fa-history fs-2"></i>{" "}
            &nbsp;CLINIC SECHDULE
          </h4>
          <br />
          <p>
            {" "}
            <strong style={{ color: "#0B114A" }}>Thursday to Friday</strong> <br />{" "}
            <span className="text-secondary">9:00am to 5:00pm</span>{" "}
          </p>

          <p>
            {" "}
            <strong style={{ color: "#0B114A" }}>Monday to Wednesday</strong> <br />{" "}
            <span className="text-secondary">9:00am to 5:00pm</span>{" "}
          </p>

          <p>
            {" "}
            <strong style={{ color: "#0B114A" }}>Emergancy Appointment</strong> <br />{" "}
            <span className="text-secondary">Anytime</span> <br />{" "}
            <span style={{ color: "#3EBBC4" }}>
              ( But you have to pay extra charge for emergency )
            </span>{" "}
          </p>
          <br />
          <span>
            {" "}
            <i style={{ color: "#0B114A" }} class="fas fa-phone"></i> +1 209-507-5152
          </span>
          <br />
          <span>
            {" "}
            <i style={{ color: "#0B114A" }} class="fas fa-envelope"></i> healclinic@gmail.com
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Appointment;
