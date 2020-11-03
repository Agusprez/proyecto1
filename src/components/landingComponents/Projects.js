import React, { useState } from 'react';
import imagen from '../../images/background-masthead-1.jpg'
import talleresIMG from '../../images/row-image-1.jpg'
import expedicionesIMG from '../../images/row-image-2.jpg'
import lugaresIMG from '../../images/row-image-3.jpg'
import '../cssComponents/projects.css'
import { Container, Row, Col } from 'react-bootstrap';
import IndividualProject from './Projects_Individual';

const Project = () => {

  const [data] = useState({
    proyectos: [
      {
        position: true,
        linkTo: "/talleres",
        title: "Talleres y salidas",
        description: "Nuestra propuesta de aprendizaje, para que juntos, podamos tener la seguridad necesaria en la montaña.",
        img: talleresIMG
      },
      {
        position: false,
        linkTo: "/expediciones",
        title: "Expediciones y logística",
        description: "En este espacio te podras contactar con nosotros de manera directa.",
        img: expedicionesIMG
      },
      {
        position: true,
        linkTo: "/lugares",
        title: "Nuestros lugares",
        description: "Argentina, llena de experiencias por vivir...",
        img: lugaresIMG
      }
    ]
  });
  return (
    <div className="projects-section bg-light" id="projects">
      <Container>
        <Row className="align-items-center no-gutters mb-4 mb-lg-5">
          <Col xl={8} lg={7}>
            <img
              className="img-fluid mb-3 mb-lg-0"
              src={imagen}
              alt="" />
          </Col>
          <Col xl={4} lg={5}>
            <div className="featured-text text-center text-lg-left">
              <h4>¿Quienes somos?</h4>
              <p className="text-black-50 mb-0">
                Somos apasionados de la montaña, buscando transmitir nuestra
                pasion y amor por este . Llegando asi a todos los que quieran
                adentrarse en el mundo de la montaña, con la seguridad y apoyo
                necesario, para realizar una experiencia de aprendizaje!
              </p>
            </div>
          </Col>
        </Row>
        {data.proyectos.map((proyecto, index) =>
          <IndividualProject
            key={index}
            position={proyecto.position}
            linkTo={proyecto.linkTo}
            title={proyecto.title}
            description={proyecto.description}
            img={proyecto.img}
          />
        )}
      </Container>
    </div>
  );
};
export default Project;