import React from 'react';
// import './Event.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Event({event}) {
  const {name, description, img} = event
  return (
    <Card>
        <Card.Body>
          <Card.Img variant="top" src={img} />
            <Card.Title>Event Name: {name}</Card.Title>
            <Card.Text> Description: {description}</Card.Text>
            <Link to="/event"><Button>Learn More</Button></Link>
        </Card.Body>
    </Card>
  );
}

export default Event;