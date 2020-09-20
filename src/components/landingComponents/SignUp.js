import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../cssComponents/signup.css';
import Contacto from './SingUp_Contact';
import Link from './SingUp_Links';

const SignUp = () => {

  return (
    <section id="signup" className="contact-section signup-section bg-black">
      <Container>
        <Row>
          <Contacto tipo="Contacto" texto="Marcos" icon="far fa-user-circle text-primary mb-2" />
          <Contacto tipo="Email" texto="irutrekk@gmail.com" icon="fas fa-envelope text-primary mb-2" />
          <Contacto tipo="Contacto" texto="Sofia" icon="far fa-user-circle text-primary mb-2" />
        </Row>
        <div className="social d-flex justify-content-center">
          <Link destino="https://www.facebook.com/irutrekk/" icon="fab fa-facebook-f" />
          <Link destino="https://wa.me/543329546303" icon="fab fa-whatsapp" />
          <Link destino="https://www.instagram.com/irutrekk" icon="fab fa-instagram" />
        </div>
      </Container>
    </section >
  );
};

export default SignUp;