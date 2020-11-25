import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import '../cssComponents/routes.css'

/* TODO */
/* 

// Crear estado en donde se va a ir guardando la info de los INPUTs LISTO 
// Conectar con API de envio de Email (Averiguar si existe alguna gratuita)
// Renderizar una respuesta cuando la API nos diga que el mail fue enviado exitosamente

*/


const Expediciones = () => {

  const [emailSent, setEmailSent] = useState({
    emailHasBeenSent: false
  })

  const [user, setUser] = useState({
    emailFROM: '',
    celular: '',
    nombreCompleto: "",
    dudas: ""
  })

  const handleForm = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    //Enviar los atos que estan en user, por POST, a localhost:5500/send-email
    //En formato JSON

    console.log(user)

    fetch("https://send-email-irutrekk.herokuapp.com/send-email", {
      crossDomain: true,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        emailFROM: user.emailFROM,
        celular: user.celular,
        nombreCompleto: user.nombreCompleto,
        dudas: user.dudas
      })

    })
      .then(response => {
        response.json()
        console.log(response)

        setEmailSent({ emailHasBeenSent: true });
        console.log(emailSent.emailHasBeenSent)

      })

  }

  if (emailSent.emailHasBeenSent !== true) {
    return (
      <div id="section" >
        <div className="espaciado"></div>
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
            {/* INPUT EMAIL */}
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Tu e-mail!</Form.Label>
              <Form.Control
                name="emailFROM"
                type="email"
                placeholder="Ingresá tu email"
                onChange={(event) => handleForm(event)}
              />
            </Form.Group>
            {/* INPUT CELULAR */}
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Tu celular de contacto</Form.Label>
              <Form.Control
                name="celular"
                type="text"
                placeholder="Ingresá tu número"
                onChange={(event) => handleForm(event)}
              />
            </Form.Group>
            {/* INPUT NOMBRE COMPLETO */}
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Tu nombre completo</Form.Label>
              <Form.Control
                name="nombreCompleto"
                type="text"
                placeholder="Ingresá tu nombre completo"
                onChange={(event) => handleForm(event)}
              />
            </Form.Group>
            {/* INPUT DUDAS */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Contanos qué es aquello que queres hacer!</Form.Label>
              <Form.Control
                as="textarea"
                name="dudas"
                rows="3"
                placeholder="Me gustaría poder visitar..."
                onChange={(event) => handleForm(event)}
              />
            </Form.Group>
            <Button variant="primary" onClick={(event) => handleSubmit(event)}>Contactate con nosotros!</Button>
          </Form>
          <div className="espaciado"></div>
        </Container>
      </div>
    )
  } else {
    return (
      <div id="section" >
        <div className="espaciado"></div>
        <Container className="titulos-1">

          <h1 className="text-center">
            <b>Expediciones</b>
          </h1>
          <h4>
            Aqui te vas a poder comunicar con nosotros para poder solicitar asesoramiento, para hacer eso que siempre tuviste ganas, pero que por la falta de experiencia nunca pudiste hacer.
        </h4>

          <div className="espaciado"></div>
          <div className="espaciado"></div>
          <h2>¡¡Email Enviado!!</h2>
          <div className="espaciado"></div>
        </Container>
      </div>)
  }
}

export default Expediciones;
