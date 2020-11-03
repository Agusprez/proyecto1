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

            <blockquote className="text-white-50">
              <p className="text-white-50">
                ¿Por qué subir montañas? Porque están ahí.
                <br />
                <small><cite>Lionel Terray</cite></small>
              </p>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </section >
  );
};
export default About;