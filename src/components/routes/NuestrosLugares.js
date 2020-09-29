import React from 'react';
import { Container } from 'react-bootstrap';
import '../cssComponents/routes.css';
import Carrousel from './NL_Carrousel';

const NuestrosLugares = () => {

  return (
    <div id="section">
      <Container>
        <div className="espaciado"></div>
        <div className="titulos">
          <h1 className="text-center">
            <b>Nuestros lugares</b>
          </h1>
          <h4>
            Galeria de imagenes capturadas en salidas
          </h4>
          <Carrousel />
        </div>

      </Container>
    </div>
  )
}

export default NuestrosLugares;
