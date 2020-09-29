import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const CardExpedicion = (props) => {

  console.log(props.datos.title)
  return (
    <>
      <Card style={{ width: '18rem', margin: '2rem' }}>
        <Card.Img style={{ height: "14rem" }} variant="top" src={props.datos.img} />
        <Card.Body>
          <Card.Title>{props.datos.title}</Card.Title>
          <Card.Text>
            {props.datos.shortDescription}
          </Card.Text>
          <Button variant="primary"><Link style={{ color: 'rgb(255,255,255)' }} to={"/talleres/" + props.id}>Mas info +</Link></Button>
        </Card.Body>
      </Card>
    </>
  )
};

export default CardExpedicion;