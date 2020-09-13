import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap'
import card1 from '../../images/card-1.jpg'
import '../cssComponents/routes.css'

const TallerSalida = () => {



  return (
    <div id="section" >
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container >
        <Row>
          <Card style={{ width: '18rem', margin: '2rem' }}>
            <Card.Img style={{ height: "12rem" }} variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Algun lugar</Card.Title>
              <Card.Text>
                Aca va a ir alguien
          </Card.Text>
              <Button variant="primary">Mas info +</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', margin: '2rem' }}>
            <Card.Img style={{ height: "12rem" }} variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Algun lugar</Card.Title>
              <Card.Text>
                Aca va a ir alguien
          </Card.Text>
              <Button variant="primary">Mas info +</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', margin: '2rem' }}>
            <Card.Img style={{ height: "12rem" }} variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Algun lugar</Card.Title>
              <Card.Text>
                Aca va a ir alguien
          </Card.Text>
              <Button variant="primary">Mas info +</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', margin: '2rem' }}>
            <Card.Img style={{ height: "12rem" }} variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Algun lugar</Card.Title>
              <Card.Text>
                Aca va a ir alguien
          </Card.Text>
              <Button variant="primary">Mas info +</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      <br />
    </div>
  )
}

export default TallerSalida;