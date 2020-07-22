import React, { useState, useEffect } from 'react';
import Event from '../components/Event/Event';
import axios from 'axios'
import Header from '../components/Header/Header';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import wave from '../assets/wavesNegative.svg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

// move styles to stylesheet
export default function User() { 
  const [events, setEvents] = useState([])
  const [organizations, setOrganizations] = useState([])

  useEffect(() => {
    const getEvents = async () => {
     const [resEvents, resOrgs] = await Promise.all([axios.get('/events'), axios.get('/organizations')]) 
     setEvents(resEvents.data)
     setOrganizations(resOrgs.data)
    }
    document.title = 'Volunteer Match Depot - Profile'
    getEvents()
  }, [])

  return (
  <>
  <Header />
  <img style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}} src={wave}/>
  <h1 style={{marginTop: '-100px', padding: '20px'}}>Home</h1>
  <Tabs defaultActiveKey="events" id="profile-tabs">
  <Tab eventKey="profile" title="Profile Information">
    {/* change matching prefreneces here  */}
    {/* view art templates? */}
    <div style={{padding: '20px'}}>
    <FormGroup>
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Name" />
    </FormGroup>
    <FormGroup>
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Email" />
    </FormGroup>
    <Form.Group>
    <Form.Label>Causes I am interested in</Form.Label>
      <Form.Control as="select">
        <option>STEM</option>
        <option>Environmental</option>
        <option>Fundraising and Administration</option>
      </Form.Control>
    </Form.Group>
    <Button disabled variant="secondary">Edit Info</Button>
    </div>
  </Tab>
  <Tab eventKey="events" title="My Events">
  <Card style={{margin: '20px'}}>
   You are not currently signed up for anything.
   </Card>
   <h5 style={{padding: '20px'}}>Events Matching Your Interests</h5>
  <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
  {
    events && 
    <>
      {events.map(event => {
        return <Event key={event.id} event={event}/>
      })}
    </>
  }
  </div>
  </Tab>
  <Tab eventKey="organizations" title="Organizations">
  <Card style={{margin: '20px'}}>
   <p style={{padding: '5px'}}>Find Matching Organizations</p>
   <InputGroup>
    <FormControl
      placeholder="Organization Name"
    />
    <InputGroup.Append>
      <Button disabled variant="outline-secondary">Search</Button>
    </InputGroup.Append>
  </InputGroup>
   </Card>
  {
    organizations && 
    <>
      {organizations.map(org => {
        return <>
        <Card style={{margin: '20px', padding: '20px'}}>
        <h4>{org.name}</h4> <p>{org.description}</p> <p>{org.location}</p>
        <h5 style={{padding: '20px'}}>New Events</h5>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        {
          events && 
          <>
            {events.map(event => {
              return <Event key={event.id} event={event}/>
            })}
            <Button disabled variant="secondary">View All Events</Button>
          </>
        }
        </div>
        </Card>
        </>
      })}
    </>
  }
  </Tab>
  </Tabs>
  </>
  )
}
