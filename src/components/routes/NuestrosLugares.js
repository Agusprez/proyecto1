import React from 'react';
import { Carousel, Container } from 'react-bootstrap'
import '../cssComponents/routes.css'
import img1 from '../../images/row-image-2.jpg'
import img2 from '../../images/row-image-3.jpg'
import img3 from '../../images/P1040083.jpg'


const NuestrosLugares = () => {

  return (
    <div id="section">
      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="titulos">
          <h1 className="text-center">
            <b>Nuestros lugares</b>
          </h1>
          <h4>
            Galeria de imagenes capturadas en salidas
          </h4>
        </div>
        <br />
        <br />
        <div className="anchoCarrusel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={img1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={img2}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={img3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <br />
        <br />
      </Container>
    </div>
  )
}

export default NuestrosLugares;
