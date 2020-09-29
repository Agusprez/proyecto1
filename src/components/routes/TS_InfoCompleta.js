import React, { useEffect, useState } from 'react';
import firebase from '../../services/firebase';
import { Container, Spinner, Button } from 'react-bootstrap';
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
            <h1 className="text-center">
              <b>{producto.title}</b>
            </h1>
            <br />
            <div>
              <div className="d-flex justify-content-left">
                <img className="m-3 titulos" src={producto.img} alt={producto.shortDescription} style={{ height: "20rem" }} />
                <h3 className="m-3">
                  {producto.description}
                </h3>
              </div>
              <div className="d-flex justify-content-left">
                <h3 className="m-3"><b>Link:</b> <a style={{ color: 'rgb(0,0,0)' }} href={producto.linkInscripcion} target="_blanck">GoogleForm</a></h3>
                <h3 className="m-3"><b>Fecha de inicio:</b> {producto.fecha}</h3>
                <h3 className="m-3"><b>Dificultad:</b> {producto.dificultad}</h3>
              </div>
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