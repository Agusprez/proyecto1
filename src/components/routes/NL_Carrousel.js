import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/Carrusel1/1.png';
import img2 from '../../images/Carrusel1/2.png';
import img3 from '../../images/Carrusel1/3.png';
import img4 from '../../images/Carrusel1/4.png';


const Carrusel = () => {

  const descripcion = <Carousel.Caption><h3>Quebrada de Matienzo</h3></Carousel.Caption>;

  return (
    <div className="anchoCarrusel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img2}
            alt="Third slide"
          />
          {descripcion}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img3}
            alt="Third slide"
          />
          {descripcion}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img4}
            alt="Third slide"
          />
          {descripcion}
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Carrusel;