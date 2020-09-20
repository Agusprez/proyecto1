import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IndividualProject = (props) => {


  //If props.position = true
  //el componente se ubica a la derecha


  //ELSE 
  //el componente se ubica a la izquierda

  console.log(props.position)

  if (props.position) {
    return (
      <Row mb={5} mb-lb={0} className="justify-content-center no-gutters">
        <Col lg={6}>
          <img
            className="img-fluid"
            alt=""
            src={props.img}
          />
        </Col>
        <Col lg={6}>
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">{props.title}</h4>
                <p className="mb-0 text-white-50">
                  {props.description}
                </p>
                <hr className="d-none d-lg-block mb-0 ml-0" />
                <Link to={props.linkTo}>Ver más</Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    )
  } else {
    return (
      <Row className="justify-content-center no-gutters">
        <Col lg={6}>
          <img
            className="img-fluid"
            alt=""
            src={props.img}
          />
        </Col>
        <Col lg={6} className="order-lg-first" >
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">{props.title}</h4>
                <p className="mb-0 text-white-50">
                  {props.description}
                </p>
                <hr className="d-none d-lg-block mb-0 mr-0" />
                <Link to={props.linkTo}>Ver más</Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
};
export default IndividualProject;
