import React, { useState, useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap'
import '../cssComponents/routes.css'
import E_Card from './TS_Card'
import firebase from '../../services/firebase';

const TallerSalida = () => {

  const [estado, setEstado] = useState({
    productosCargados: [],
    isLoaded: false
  })

  useEffect(
    () => {
      firebase.db.collection('talleresSalidas')
        .get()
        .then(querySnapshot => {
          setEstado({
            ...estado,
            productosCargados: querySnapshot.docs,
            isLoaded: true
          })
        })
    },
    []);




  if (!estado.isLoaded) {

    return (
      <div id="section">
        <div className="espaciado"></div>
        <Container >
          <div className="d-flex justify-content-center" >
            <Spinner animation="border" variant="light"></Spinner>
          </div>
        </Container>
        <div className="espaciado"></div>
        <div className="espaciado"></div>
        <div className="espaciado"></div>
        <div className="espaciado"></div>
      </div>
    )
  } else {

    return (
      <div id="section" >
        <div className="espaciado"></div>
        <Container className="titulos ">
          <h1 className="text-center">
            <b>Talleres y Salidas</b>
          </h1>
          <br />
          <h3>
            ¡Acá vas a encontrar todo lo que estamos preparando para vos!
        </h3>
          <Row>
            {estado.productosCargados.map((oneCard) => <E_Card key={oneCard.id} id={oneCard.id} datos={oneCard.data()}> </E_Card>).reverse()}
          </Row>
        </Container>
      </div>
    )
  }
}

export default TallerSalida;
