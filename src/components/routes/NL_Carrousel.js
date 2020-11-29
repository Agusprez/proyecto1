import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/Carrusel1/1.png';
import img2 from '../../images/Carrusel1/2.png';
import img3 from '../../images/Carrusel1/3.png';
import img4 from '../../images/Carrusel1/4.png';
import img2_1 from '../../images/Carrusel1/2-1.png';
import img2_2 from '../../images/Carrusel1/2-2.png';
import img2_3 from '../../images/Carrusel1/2-3.png';
import img2_4 from '../../images/Carrusel1/2-4.png';
import img3_1 from '../../images/Carrusel1/3-1.png';
import img3_2 from '../../images/Carrusel1/3-2.png';
import img3_3 from '../../images/Carrusel1/3-3.png';
import img3_4 from '../../images/Carrusel1/3-4.png';
import img4_1 from '../../images/Carrusel1/4-1.png';
import img4_2 from '../../images/Carrusel1/4-2.png';
import img4_3 from '../../images/Carrusel1/4-3.png';
import img4_4 from '../../images/Carrusel1/4-4.png';
import img5_1 from '../../images/Carrusel1/5-1.png';
import img5_2 from '../../images/Carrusel1/5-2.png';
import img5_3 from '../../images/Carrusel1/5-3.png';
import img5_4 from '../../images/Carrusel1/5-4.png';
import img6_1 from '../../images/Carrusel1/6-1.png';
import img6_2 from '../../images/Carrusel1/6-2.png';
import img6_3 from '../../images/Carrusel1/6-3.png';
import img6_4 from '../../images/Carrusel1/6-4.png';

/* TODO */

/* 
// Hacer dinamico la obtencion de imagenes para el carrusel


*/
const Carrusel = () => {



  /*   const descripcion = <Carousel.Caption><h3>Quebrada de Matienzo</h3></Carousel.Caption>;*/
  return (
    <div className="anchoCarrusel">
      {/* QUEBRADA DE MATIENZO */}
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
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="espaciado2"></div>
      {/* QUEBRADA DE VARGAS */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img2_1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img2_2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img2_3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img2_4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="espaciado2"></div>
      {/* QUEBRADA DE HORCONES */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img3_1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img3_2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img3_3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img3_4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="espaciado2"></div>
      {/* CORDON ANSILTA */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img4_1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img4_2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img4_3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img4_4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="espaciado2"></div>
      {/* QUEBRADA BLANCA */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img5_1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img5_2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img5_3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img5_4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="espaciado2"></div>
      {/* NEVADO DE CACHI */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img6_1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img6_2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img6_3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={img6_4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Carrusel;