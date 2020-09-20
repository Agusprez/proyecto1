import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Contacto = (props) => {
  return (
    <>
      <Col md={4} mb={3} mb-md={0}>
        <Card className="py-4 h-100">
          <div className="card-body text-center">
            <i className={props.icon}></i>
            <h4 className="text-uppercase m-0">{props.tipo} </h4>
            <hr className="my-4" />
            <div className="small text-black-50">{props.texto}</div>
          </div>
        </Card>
      </Col>
    </>
  );
};
export default Contacto;