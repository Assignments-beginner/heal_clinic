import React from "react";
import { Container } from "react-bootstrap";
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

      {/* Treatments Right */}
      <Container className="mb-5 p-5 bg-white shadow radius">
        <div className="d-flex align-items-center">
          <div>
            <div className="pb-5">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque provident eum rerum totam error reiciendis minus
                voluptatem mollitia voluptatum excepturi ipsa ad odit
                consequuntur possimus illo, incidunt alias ipsam inventore.
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
              <strong>Dr. Lorem</strong>
            </div>
          </div>
          <div>
          <img
            width="360"
            height="245"
            className="radius"
            src="https://media.istockphoto.com/photos/physical-doctor-consulting-with-patient-knee-problems-physical-picture-id1136089250?b=1&k=20&m=1136089250&s=170667a&w=0&h=Y8SzTM3U3doNltULm1--C1xaUcoK8FDvG0rdajKIjLs="
            alt=""
          />
          </div>
        </div>
      </Container>
      
      {/* Treatments Left */}
      <Container className="mb-5 p-5 bg-white shadow radius">
        <div className="d-flex align-items-center">
        <div>
            <img
            width="360"
            height="245"
            className="radius"
            src="https://media.istockphoto.com/photos/physical-doctor-consulting-with-patient-knee-problems-physical-picture-id1136089250?b=1&k=20&m=1136089250&s=170667a&w=0&h=Y8SzTM3U3doNltULm1--C1xaUcoK8FDvG0rdajKIjLs="
            alt=""
          /></div>
          <div className="ms-5">
            <div className="pb-5">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque provident eum rerum totam error reiciendis minus
                voluptatem mollitia voluptatum excepturi ipsa ad odit
                consequuntur possimus illo, incidunt alias ipsam inventore.
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
              <strong>Dr. Lorem</strong>
            </div>
          </div>
          
          
        </div>
      </Container>
      
    </div>
  );
};

export default Treatment;
