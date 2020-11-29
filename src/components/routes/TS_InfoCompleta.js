import React, { useEffect, useState } from 'react';
import firebase from '../../services/firebase';
import { Container, Spinner, Button, Col, Row } from 'react-bootstrap';
import '../cssComponents/routes.css'
import { Link } from 'react-router-dom';

const InfoCompleta = (props) => {

  const [producto, setProducto] = useState({})

  useEffect(
    () => {
      firebase.db.doc('talleresSalidas/' + props.match.params.id)
        .get()
        .then(
          doc => {
            setProducto(doc.data())
          })
    }, []);

  if (producto.img === undefined) {
    return (
      <>
        <div id="section" >
          <div className="espaciado"></div>
          <Container className="titulos ">

            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="light"></Spinner>
            </div>
            <div className="espaciado"></div>
          </Container>
        </div>
      </>
    )
  } else {

    return (
      <>
        <div id="section" >
          <div className="espaciado"></div>
          <Container className="titulos ">
            <Container>
              <Row>
                <Col xs={12} md={12}>
                  <h1 className="text-center">
                    <b>{producto.title}</b>
                  </h1>
                </Col>
              </Row>
            </Container>
            <br />
            <div>
              <Container className="d-flex justify-content-left">
                <Row>
                  <Col xs={12} md={4}>
                    <img
                      className=" titulos"
                      src={producto.img}
                      alt={producto.shortDescription}
                      style={{ height: "20rem" }}
                    />
                  </Col>
                  <Col xs={12} md={8}>
                    <h3 className="m-3">
                      {producto.description}
                    </h3>
                  </Col>
                </Row>
              </Container>
              <br />
              <Container className="d-flex justify-content-left">
                <Row>
                  <Col xs={12} md={4}>
                    <h3 className=""><b>Link:</b> <a style={{ color: 'rgb(0,0,0)' }} href={producto.linkInscripcion} target="_blanck">GoogleForm</a></h3>
                  </Col>
                  <Col xs={12} md={4}>
                    <h3 className=""><b>Fecha de inicio:</b> {producto.fecha}</h3>
                  </Col>
                  <Col xs={12} md={4}>
                    <h3 className=""><b>Dificultad:</b> {producto.dificultad}</h3>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="espaciado"></div>

            <Button variant="primary"><Link style={{ color: 'rgb(255,255,255)' }} to="/talleres">Volver</Link></Button>
          </Container>
        </div>

      </>
    )
  }
}

export default InfoCompleta;