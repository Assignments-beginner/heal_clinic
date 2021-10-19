import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import banner from "../../Images/banner.png";
import HomePrograms from "../HomePrograms/HomePrograms";
import "./Home.css";
const Home = () => {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  }, []);
  return (
    <div className="position-relative">
      <div>
        <img className="img-fluid w-100" src={banner} alt="" />
        <h1
          style={{ color: "#0B114A" }}
          className="position-absolute carousel-caption text-start home"
        >
          WELCOME <br />
          TO&nbsp;
          <span style={{ color: "#3EBBC4" }} className="tiny-shadow">
            HEAL
          </span>{" "}
          CLINIC
        </h1>
      </div>

      <Container>
        <h2
          style={{ color: "#0B114A" }}
          className="text-center p-5 text-uppercase"
        >
          check out our services
        </h2>
        <Row className="gy-2 gx-5 pb-5">
          {programs.map((program) => (
            <HomePrograms key={program.id} program={program}></HomePrograms>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
