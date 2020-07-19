import React, { useState, useEffect } from 'react';
import Event from '../components/Event/Event';
import axios from 'axios'
import Header from '../components/Header/Header';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function User() { 
  const [events, setEvents] = useState([])
 
  useEffect(() => {
    const getEvents = async () => {
     const res = await axios.get('/events')
     setEvents(res.data)
    }
    document.title = 'Volunteer Match Depot - Profile'
    getEvents()
  }, [])

  return (
  <>
  <Header />
  <h1>Profile</h1>
  <Tabs defaultActiveKey="events" id="profile-tabs">
  <Tab eventKey="profile" title="Profile Information">
    change matching prefreneces here 
    {/* view art templates? */}
  </Tab>
  <Tab eventKey="events" title="My Events">
    my events go here 
  </Tab>
  </Tabs>
  <hr />
  <h2 style={{padding: '20px'}}>New Events</h2>
  <div style={{display: 'flex'}}>
  {
    events && 
    <>
      {events.map(event => {
        return <Event key={event.id} event={event}/>
      })}
    </>
  }
  </div>
  <h2 style={{padding: '20px'}}>Events Matching Your Interests</h2>
  <div style={{display: 'flex'}}>
  {
    events && 
    <>
      {events.map(event => {
        return <Event key={event.id} event={event}/>
      })}
    </>
  }
    </div>

  </>
  )
}
