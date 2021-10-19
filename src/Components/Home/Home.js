import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import banner from "../../Images/banner.png";
import HomePrograms from "../HomePrograms/HomePrograms";
import "./Home.css";
const Home = () => {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    fetch("/generated.json")
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
          WELCOME <br />TO&nbsp;
          <span style={{ color: "#3EBBC4" }} className="tiny-shadow">HEAL</span> CLINIC
        </h1>
      </div>

      <Container>
      <Row className="mt-3 mx-auto g-5">
          {programs.map((program) => (
            <HomePrograms key={program.id} program={program}></HomePrograms>
          ))}
        </Row>
      </Container>

    </div>
  );
};

export default Home;
