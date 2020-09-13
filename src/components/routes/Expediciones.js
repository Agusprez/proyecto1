import React from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import '../cssComponents/routes.css'

const Expediciones = () => {



  return (
    <div id="section">
      <Container>
        <br />
        <br />
        <br />
        <br />
        <h1>
          Expediciones
        </h1>
        <h4>
          Aqui te vas a poder comunicar con nosotros para poder solicitar asesoramiento, para hacer eso que siempre tuviste ganas, pero que por la falta de experiencia nunca pudiste hacer.
        </h4>
        <p>Completa el siguiente formulario </p>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary">Contactate con nosotros!</Button>
        </Form>
        <br />
      </Container>
    </div>
  )
}

export default Expediciones;
