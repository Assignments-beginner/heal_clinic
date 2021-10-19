import React from "react";
import { Container } from "react-bootstrap";
import doctor from '../../Images/About/doctor.png';
import hours from '../../Images/About/24-hours.png';
import lab from '../../Images/About/laboratory.png';
import './About.css'
const About = () => {
  return (
    <div>
      <h1
        style={{ color: "#0B114A" }}
        className="text-center m-3 p-3 text-uppercase"
      >
        Why Choose Us
      </h1>

      <Container className="d-flex mb-5 pb-5">
        <div className="d-grid px-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            id dignissimos, quisquam quae harum nobis sequi natus enim
            asperiores error.
          </p>

          <div>
            <Container className="shadow radius p-3 d-flex align-items-center justify-content-center">
            <div className="m-3">
            <img src={doctor} alt="" />
            </div>
            <div className="d-grid align-items-center ms-3">
              <h4>Professional Doctor</h4>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              quod in earum iusto error provident consequatur possimus totam
              assumenda perferendis.
            </span>
            </div>
            </Container>
          </div>
          
          
          <div>
            <Container className="shadow radius p-3 d-flex align-items-center justify-content-center">
            <div className="m-3">
            <img src={hours} alt="" />
            </div>
            <div className="d-grid align-items-center ms-3">
              <h4>Professional Doctor</h4>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              quod in earum iusto error provident consequatur possimus totam
              assumenda perferendis.
            </span>
            </div>
            </Container>
          </div>
          
          <div>
            <Container className="shadow radius p-3 d-flex align-items-center justify-content-center">
            <div className="m-3">
            <img src={lab} alt="" />
            </div>
            <div className="d-grid align-items-center ms-3">
              <h4>Professional Doctor</h4>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              quod in earum iusto error provident consequatur possimus totam
              assumenda perferendis.
            </span>
            </div>
            </Container>
          </div>
          

          
          
          {/* stop */}
        </div>
        <div>
          <img
            src="https://html.softtechitltd.com/physicmed/physicmed/assets/images/about21.png"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default About;
