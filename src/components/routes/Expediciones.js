import React from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import '../cssComponents/routes.css'


const Expediciones = () => {

  return (
    <div id="section" >
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container className="titulos-1">

        <h1 className="text-center">
          <b>Expediciones</b>
        </h1>
        <h4>
          Aqui te vas a poder comunicar con nosotros para poder solicitar asesoramiento, para hacer eso que siempre tuviste ganas, pero que por la falta de experiencia nunca pudiste hacer.
        </h4>
        <br />
        <p>Completa el siguiente formulario </p>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Tu e-mail!</Form.Label>
            <Form.Control type="email" placeholder="Ingresá tu email" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Tu celular de contacto</Form.Label>
            <Form.Control type="email" placeholder="Ingresá tu número" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Tu nombre completo</Form.Label>
            <Form.Control type="email" placeholder="Ingresá tu nombre completo" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Contanos qué es aquello que queres hacer!</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Me gustaría poder visitar..." />
          </Form.Group>
          <Button variant="primary">Contactate con nosotros!</Button>
        </Form>
        <br />
        <br />
        <br />
      </Container>
    </div>
  )
}

export default Expediciones;
