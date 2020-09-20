import React from 'react';
import "../cssComponents/about.css";
import { Container, Col, Row } from 'react-bootstrap';

const About = () => {
  return (
    <section className="about-section text-center" id="about">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="text-white mb-4">Irûtrekk - Actividades de montaña</h2>
            <p className="text-white-50">
              Aca puede ir un textito lindo sobre lo que se siente hacer
              montaña, o como se diga. no tengo mucha idea sobre eso, pero
              bueno, queria que veas que puede ir algun textito como decoracion.
            </p>
          </Col>
        </Row>
      </Container>
    </section >
  );
};
export default About;