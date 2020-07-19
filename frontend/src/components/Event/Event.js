import React from 'react';
// import './Event.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Event({event}) {
  const {name, description, img} = event
  return (
    <Card>
        <Card.Body>
          <Card.Img variant="top" src={img} />
            <Card.Title>Event Name: {name}</Card.Title>
            <Card.Text> Description: {description}</Card.Text>
            <Button>Learn More</Button>
        </Card.Body>
    </Card>
  );
}

export default Event;