import React from 'react';
import { Col } from 'react-bootstrap';

const HomePrograms = (props) => {
    const { img, titleOne, description } = props.program;
    return (
    <Col xs={12} xl={4} lg={4}>
      <img src={img} alt="" />
      <h1>Title{titleOne}</h1>
      <p>{description}</p>

    </Col>
    );
};

export default HomePrograms;